use base64::Engine;
use futures_util::{SinkExt, StreamExt};
use serde_json::{json, Value};
use sha2::{Digest, Sha256};
use std::sync::Mutex;
use tokio::net::TcpStream;
use tokio::time::{timeout, Duration};
use tokio_tungstenite::tungstenite::Message;
use tokio_tungstenite::{connect_async, MaybeTlsStream, WebSocketStream};

static CREDENTIALS: Mutex<Option<(String, String)>> = Mutex::new(None);

type Socket = WebSocketStream<MaybeTlsStream<TcpStream>>;

async fn next_json(socket: &mut Socket) -> Result<Value, String> {
    loop {
        let message = timeout(Duration::from_secs(10), socket.next())
            .await
            .map_err(|_| "OBS WebSocket: таймаут".to_string())?
            .ok_or_else(|| "OBS WebSocket: соединение закрыто".to_string())?
            .map_err(|error| error.to_string())?;

        if let Message::Text(text) = message {
            return serde_json::from_str(&text).map_err(|error| error.to_string());
        }
    }
}

async fn open(url: &str, password: &str) -> Result<Socket, String> {
    let (mut socket, _) = connect_async(url)
        .await
        .map_err(|error| error.to_string())?;
    let hello = next_json(&mut socket).await?;
    let authentication = hello.get("d").and_then(|data| data.get("authentication"));

    let mut identify = json!({ "rpcVersion": 1 });
    if let Some(authentication) = authentication {
        let salt = authentication
            .get("salt")
            .and_then(Value::as_str)
            .unwrap_or("");
        let challenge = authentication
            .get("challenge")
            .and_then(Value::as_str)
            .unwrap_or("");
        let mut hasher = Sha256::new();
        hasher.update(password.as_bytes());
        hasher.update(salt.as_bytes());
        hasher.update(challenge.as_bytes());
        let encoded = base64::engine::general_purpose::STANDARD.encode(hasher.finalize());
        identify["authentication"] = Value::String(encoded);
    }

    socket
        .send(Message::Text(
            json!({ "op": 1, "d": identify }).to_string().into(),
        ))
        .await
        .map_err(|error| error.to_string())?;

    let identified = next_json(&mut socket).await?;
    if identified.get("op").and_then(Value::as_u64) != Some(2) {
        return Err("OBS WebSocket: не удалось авторизоваться".to_string());
    }

    Ok(socket)
}

async fn request(socket: &mut Socket, request_type: &str, data: Value) -> Result<Value, String> {
    let request_id = format!(
        "ns-{}",
        std::time::SystemTime::now()
            .duration_since(std::time::UNIX_EPOCH)
            .map(|duration| duration.as_nanos())
            .unwrap_or_default()
    );
    socket
        .send(Message::Text(
            json!({
                "op": 6,
                "d": { "requestType": request_type, "requestId": request_id, "requestData": data }
            })
            .to_string()
            .into(),
        ))
        .await
        .map_err(|error| error.to_string())?;

    loop {
        let message = next_json(socket).await?;
        if message.get("op").and_then(Value::as_u64) != Some(7) {
            continue;
        }
        let response = message.get("d").cloned().unwrap_or_default();
        if response.get("requestId").and_then(Value::as_str) != Some(request_id.as_str()) {
            continue;
        }
        if response
            .get("requestStatus")
            .and_then(|status| status.get("result"))
            .and_then(Value::as_bool)
            == Some(false)
        {
            return Err(response
                .get("requestStatus")
                .and_then(|status| status.get("comment"))
                .and_then(Value::as_str)
                .unwrap_or("OBS request failed")
                .to_string());
        }
        return Ok(response.get("responseData").cloned().unwrap_or_default());
    }
}

pub async fn connect(url: String, password: String) -> Result<Value, String> {
    let status = status_with(&url, &password).await?;
    *CREDENTIALS.lock().map_err(|_| "OBS state poisoned")? = Some((url, password));
    Ok(status)
}

pub async fn status() -> Result<Value, String> {
    let (url, password) = CREDENTIALS
        .lock()
        .map_err(|_| "OBS state poisoned")?
        .clone()
        .ok_or_else(|| "OBS WebSocket не подключён".to_string())?;
    status_with(&url, &password).await
}

async fn status_with(url: &str, password: &str) -> Result<Value, String> {
    let mut socket = open(url, password).await?;
    let scene_list = request(&mut socket, "GetSceneList", json!({})).await?;
    let input_list = request(&mut socket, "GetInputList", json!({})).await?;
    let stream = request(&mut socket, "GetStreamStatus", json!({})).await?;
    let record = request(&mut socket, "GetRecordStatus", json!({})).await?;
    let scenes = scene_list
        .get("scenes")
        .and_then(Value::as_array)
        .map(|items| {
            items
                .iter()
                .filter_map(|item| item.get("sceneName").and_then(Value::as_str))
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();
    let inputs = input_list
        .get("inputs")
        .and_then(Value::as_array)
        .map(|items| {
            items
                .iter()
                .filter_map(|item| item.get("inputName").and_then(Value::as_str))
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();

    Ok(json!({
        "connected": true,
        "url": url,
        "scenes": scenes,
        "currentScene": scene_list.get("currentProgramSceneName").and_then(Value::as_str).unwrap_or(""),
        "inputs": inputs,
        "streaming": stream.get("outputActive").and_then(Value::as_bool).unwrap_or(false),
        "recording": record.get("outputActive").and_then(Value::as_bool).unwrap_or(false),
    }))
}

pub async fn scene(scene: String) -> Result<Value, String> {
    let (url, password) = credentials()?;
    let mut socket = open(&url, &password).await?;
    request(
        &mut socket,
        "SetCurrentProgramScene",
        json!({ "sceneName": scene }),
    )
    .await
}

pub async fn mute(input: String) -> Result<Value, String> {
    let (url, password) = credentials()?;
    let mut socket = open(&url, &password).await?;
    let current = request(&mut socket, "GetInputMute", json!({ "inputName": input })).await?;
    let muted = !current
        .get("inputMuted")
        .and_then(Value::as_bool)
        .unwrap_or(false);
    request(
        &mut socket,
        "SetInputMute",
        json!({ "inputName": input, "inputMuted": muted }),
    )
    .await?;
    Ok(json!({ "muted": muted }))
}

pub async fn output(output: String, action: String) -> Result<Value, String> {
    let (url, password) = credentials()?;
    let mut socket = open(&url, &password).await?;
    let request_type = match (output.as_str(), action.as_str()) {
        ("stream", "stop") => "StopStream",
        ("stream", _) => "StartStream",
        ("record", "stop") => "StopRecord",
        ("record", _) => "StartRecord",
        _ => "SaveReplayBuffer",
    };
    request(&mut socket, request_type, json!({})).await
}

pub fn disconnect() {
    if let Ok(mut credentials) = CREDENTIALS.lock() {
        *credentials = None;
    }
}

fn credentials() -> Result<(String, String), String> {
    CREDENTIALS
        .lock()
        .map_err(|_| "OBS state poisoned")?
        .clone()
        .ok_or_else(|| "OBS WebSocket не подключён".to_string())
}
