use std::collections::HashSet;
use std::io::{Read, Write};
use std::net::TcpListener;
use std::thread;

use keyring::Entry;
use serde::{Deserialize, Serialize};
use std::sync::atomic::{AtomicBool, Ordering};
use sysinfo::{Disks, Networks, System};
use tauri::menu::{Menu, MenuItem};
use tauri::tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent};
use tauri::webview::{NewWindowResponse, PageLoadEvent};
use tauri::{AppHandle, Emitter, Manager, WebviewUrl, WebviewWindowBuilder, WindowEvent};
use tauri_plugin_notification::NotificationExt;
use tauri_plugin_updater::UpdaterExt;

const SERVICE: &str = "dev.rdpctd.nameless-streamhata";
static SYSTEM_WIDGET_ENABLED: AtomicBool = AtomicBool::new(true);
static UPDATE_NOTIFIED: std::sync::Mutex<Option<String>> = std::sync::Mutex::new(None);
const SYSTEM_OVERLAY_URL: &str = "http://127.0.0.1:17890/";
const APP_VERSION: &str = env!("CARGO_PKG_VERSION");
const TERMS_VERSION: &str = "1.2";
const TERMS_TEXT: &str = include_str!("../../web/terms.txt");
const USER: &str = "session";

#[derive(Serialize)]
struct DiskMetric {
    name: String,
    mount: String,
    total: u64,
    available: u64,
}

#[derive(Serialize)]
struct SystemMetrics {
    cpu: f32,
    gpu: Option<f32>,
    memory_total: u64,
    memory_used: u64,
    swap_total: u64,
    swap_used: u64,
    uptime: u64,
    processes: usize,
    network_received: u64,
    network_transmitted: u64,
    disks: Vec<DiskMetric>,
}

#[cfg(target_os = "linux")]
fn gpu_usage() -> Option<f32> {
    if let Ok(nvml) = nvml_wrapper::Nvml::init() {
        if let Ok(device) = nvml.device_by_index(0) {
            if let Ok(utilization) = device.utilization_rates() {
                return Some(utilization.gpu as f32);
            }
        }
    }

    let entries = std::fs::read_dir("/sys/class/drm").ok()?;

    for entry in entries.flatten() {
        let path = entry.path().join("device/gpu_busy_percent");

        if let Ok(value) = std::fs::read_to_string(path) {
            if let Ok(percent) = value.trim().parse::<f32>() {
                return Some(percent);
            }
        }
    }

    None
}

#[cfg(target_os = "windows")]
fn gpu_usage() -> Option<f32> {
    use serde::Deserialize;

    #[derive(Deserialize)]
    struct GpuEngine {
        #[serde(rename = "Name")]
        name: String,
        #[serde(rename = "UtilizationPercentage")]
        utilization: Option<u64>,
    }

    let com = wmi::COMLibrary::new().ok()?;
    let connection = wmi::WMIConnection::new(com).ok()?;
    let rows: Vec<GpuEngine> = connection
        .raw_query("SELECT Name, UtilizationPercentage FROM Win32_PerfFormattedData_GPUPerformanceCounters_GPUEngine")
        .ok()?;
    let three_d: u64 = rows
        .iter()
        .filter(|row| row.name.contains("engtype_3D"))
        .filter_map(|row| row.utilization)
        .sum();
    let total = if three_d > 0 {
        three_d
    } else {
        rows.iter().filter_map(|row| row.utilization).sum()
    };

    Some((total.min(100)) as f32)
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn gpu_usage() -> Option<f32> {
    None
}

#[tauri::command]
fn system_metrics() -> SystemMetrics {
    let mut system = System::new_all();
    std::thread::sleep(std::time::Duration::from_millis(200));
    system.refresh_cpu_usage();
    system.refresh_memory();

    let networks = Networks::new_with_refreshed_list();
    let (network_received, network_transmitted) =
        networks
            .list()
            .values()
            .fold((0_u64, 0_u64), |(received, transmitted), network| {
                (
                    received + network.total_received(),
                    transmitted + network.total_transmitted(),
                )
            });
    let disks = Disks::new_with_refreshed_list();
    let disk_metrics = disks
        .list()
        .iter()
        .map(|disk| DiskMetric {
            name: disk.name().to_string_lossy().to_string(),
            mount: disk.mount_point().to_string_lossy().to_string(),
            total: disk.total_space(),
            available: disk.available_space(),
        })
        .collect();

    SystemMetrics {
        cpu: system.global_cpu_usage(),
        gpu: gpu_usage(),
        memory_total: system.total_memory(),
        memory_used: system.used_memory(),
        swap_total: system.total_swap(),
        swap_used: system.used_swap(),
        uptime: System::uptime(),
        processes: system.processes().len(),
        network_received,
        network_transmitted,
        disks: disk_metrics,
    }
}

#[tauri::command]
fn system_widget_enabled() -> bool {
    SYSTEM_WIDGET_ENABLED.load(Ordering::Relaxed)
}

#[tauri::command]
fn set_system_widget_enabled(enabled: bool) -> bool {
    SYSTEM_WIDGET_ENABLED.store(enabled, Ordering::Relaxed);

    enabled
}

#[tauri::command]
fn system_overlay_url() -> String {
    SYSTEM_OVERLAY_URL.to_string()
}

fn start_system_overlay_server() {
    let Ok(server) = tiny_http::Server::http("127.0.0.1:17890") else {
        return;
    };

    for request in server.incoming_requests() {
        let path = request.url().split('?').next().unwrap_or("/");
        let (body, content_type) = match path {
            "/" => (
                include_str!("../../web/system-overlay.html").to_string(),
                "text/html; charset=utf-8",
            ),
            "/metrics" => {
                if !SYSTEM_WIDGET_ENABLED.load(Ordering::Relaxed) {
                    (
                        "{\"enabled\":false}".to_string(),
                        "application/json; charset=utf-8",
                    )
                } else {
                    let mut body = serde_json::to_string(&system_metrics())
                        .unwrap_or_else(|_| "{}".to_string());
                    body.insert_str(1, "\"enabled\":true,");

                    (body, "application/json; charset=utf-8")
                }
            }
            _ => ("not found".to_string(), "text/plain; charset=utf-8"),
        };
        let header = tiny_http::Header::from_bytes("Content-Type", content_type).expect("header");
        let cors =
            tiny_http::Header::from_bytes("Access-Control-Allow-Origin", "*").expect("header");
        let _ = request.respond(
            tiny_http::Response::from_string(body)
                .with_header(header)
                .with_header(cors),
        );
    }
}

#[derive(Default, Serialize, Deserialize)]
struct TermsState {
    version: String,
}

fn terms_accepted(app: &AppHandle) -> bool {
    let Ok(directory) = app.path().app_config_dir() else {
        return false;
    };

    std::fs::read_to_string(directory.join("terms-state.json"))
        .ok()
        .and_then(|raw| serde_json::from_str::<TermsState>(&raw).ok())
        .map(|state| state.version == TERMS_VERSION)
        .unwrap_or(false)
}

fn save_terms_accepted(app: &AppHandle) {
    let Ok(directory) = app.path().app_config_dir() else {
        return;
    };

    let _ = std::fs::create_dir_all(&directory);
    let state = TermsState {
        version: TERMS_VERSION.to_owned(),
    };
    let _ = std::fs::write(
        directory.join("terms-state.json"),
        serde_json::to_string(&state).unwrap_or_default(),
    );
}

#[cfg(target_os = "linux")]
fn native_terms_dialog() -> bool {
    use gtk::prelude::*;

    let dialog = gtk::Dialog::with_buttons(
        Some("Пользовательское соглашение"),
        None::<&gtk::Window>,
        gtk::DialogFlags::MODAL,
        &[],
    );
    dialog.set_default_size(720, 620);
    dialog.add_button("Принять", gtk::ResponseType::Accept);
    dialog.add_button("Выйти", gtk::ResponseType::Reject);

    let scrolled = gtk::ScrolledWindow::new(None::<&gtk::Adjustment>, None::<&gtk::Adjustment>);
    scrolled.set_policy(gtk::PolicyType::Automatic, gtk::PolicyType::Automatic);
    scrolled.set_min_content_height(420);

    let view = gtk::Label::new(Some(TERMS_TEXT));
    view.set_line_wrap(true);
    view.set_xalign(0.0);
    view.set_yalign(0.0);
    view.set_selectable(true);
    view.set_margin_start(12);
    view.set_margin_end(12);
    view.set_margin_top(12);
    view.set_margin_bottom(12);
    scrolled.add(&view);
    dialog.content_area().pack_start(&scrolled, true, true, 0);

    let checkbox = gtk::CheckButton::with_label("Я принимаю условия соглашения");
    dialog.content_area().pack_end(&checkbox, false, false, 0);
    checkbox.show();
    dialog.show_all();

    let accepted = loop {
        let response = dialog.run();

        if response == gtk::ResponseType::Accept && !checkbox.is_active() {
            let warning = gtk::MessageDialog::new(
                Some(&dialog),
                gtk::DialogFlags::MODAL,
                gtk::MessageType::Warning,
                gtk::ButtonsType::Ok,
                "Отметьте согласие с условиями, чтобы продолжить.",
            );
            warning.run();
            warning.close();

            continue;
        }

        break response == gtk::ResponseType::Accept;
    };

    dialog.hide();

    while gtk::events_pending() {
        gtk::main_iteration();
    }

    dialog.close();

    accepted
}

#[cfg(target_os = "windows")]
fn native_terms_dialog() -> bool {
    use windows::core::{w, BOOL, HSTRING, PCWSTR};
    use windows::Win32::UI::Controls::{
        TaskDialogIndirect, TASKDIALOGCONFIG, TASKDIALOG_BUTTON, TDF_ALLOW_DIALOG_CANCELLATION,
        TDF_EXPANDED_BY_DEFAULT, TDF_SIZE_TO_CONTENT,
    };

    let buttons = [
        TASKDIALOG_BUTTON {
            nButtonID: 200,
            pszButtonText: w!("Принять"),
        },
        TASKDIALOG_BUTTON {
            nButtonID: 201,
            pszButtonText: w!("Выйти"),
        },
    ];
    let terms = HSTRING::from(TERMS_TEXT);
    let config = TASKDIALOGCONFIG {
        cbSize: std::mem::size_of::<TASKDIALOGCONFIG>() as u32,
        dwFlags: TDF_ALLOW_DIALOG_CANCELLATION | TDF_SIZE_TO_CONTENT | TDF_EXPANDED_BY_DEFAULT,
        pszWindowTitle: w!("Пользовательское соглашение"),
        pszMainInstruction: w!("Nameless StreamHata"),
        pszContent: w!("Прочитайте и примите условия использования приложения."),
        pszExpandedInformation: PCWSTR::from_raw(terms.as_ptr()),
        cButtons: buttons.len() as u32,
        pButtons: buttons.as_ptr(),
        pszVerificationText: w!("Я принимаю условия соглашения"),
        ..Default::default()
    };
    let mut button = 0;
    let mut checked = BOOL(0);
    let _ = unsafe { TaskDialogIndirect(&config, Some(&mut button), None, Some(&mut checked)) };

    button == 200 && checked.as_bool()
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn native_terms_dialog() -> bool {
    false
}

#[derive(Default, Serialize, Deserialize)]
struct OnboardingState {
    completed: bool,
    choice: u8,
    virus: bool,
}

fn onboarding_state(app: &AppHandle) -> OnboardingState {
    let Ok(directory) = app.path().app_config_dir() else {
        return OnboardingState::default();
    };

    std::fs::read_to_string(directory.join("onboarding-state.json"))
        .ok()
        .and_then(|raw| serde_json::from_str(&raw).ok())
        .unwrap_or_default()
}

fn save_onboarding_state(app: &AppHandle, choice: u8, virus: bool) {
    let Ok(directory) = app.path().app_config_dir() else {
        return;
    };

    let _ = std::fs::create_dir_all(&directory);
    let state = OnboardingState {
        completed: true,
        choice,
        virus,
    };
    let _ = std::fs::write(
        directory.join("onboarding-state.json"),
        serde_json::to_string(&state).unwrap_or_default(),
    );
}

#[cfg(target_os = "linux")]
fn native_onboarding_dialog() -> (u8, bool) {
    use gtk::prelude::*;

    let dialog = gtk::Dialog::with_buttons(
        Some("Проверка безопасности"),
        None::<&gtk::Window>,
        gtk::DialogFlags::MODAL,
        &[],
    );
    dialog.set_default_size(680, 430);
    dialog.add_button("Продолжить", gtk::ResponseType::Accept);

    let content = gtk::Box::new(gtk::Orientation::Vertical, 10);
    content.set_margin_top(16);
    content.set_margin_bottom(16);
    content.set_margin_start(16);
    content.set_margin_end(16);
    dialog.content_area().pack_start(&content, true, true, 0);

    let question = gtk::Label::new(Some(
        "Что вы будете делать, если вдруг что-то украдёт данные из хранилища и начнёт пользоваться ими в своих интересах?",
    ));
    question.set_line_wrap(true);
    question.set_xalign(0.0);
    content.pack_start(&question, false, false, 0);

    let first = gtk::RadioButton::with_label(
        "Проверю, что установлено, отзову токены и сменю пароли везде",
    );
    let second = gtk::RadioButton::with_label_from_widget(
        &first,
        "Напишу, что приложение — вирус, а автор — козёл",
    );
    let third = gtk::RadioButton::with_label_from_widget(
        &first,
        "Переустановлю систему и восстановлю данные из резервной копии",
    );
    content.pack_start(&first, false, false, 0);
    content.pack_start(&second, false, false, 0);
    content.pack_start(&third, false, false, 0);

    let explanation = gtk::Label::new(Some(
        "Всё верно. Сначала проверьте, что вы скачивали в последнее время, нагрузку в диспетчере задач и странные процессы. Удалите кейлоггеры, трояны и другие вирусы, которые могут забрать данные из хранилища.",
    ));
    explanation.set_line_wrap(true);
    explanation.set_xalign(0.0);
    explanation.set_margin_top(10);
    content.pack_start(&explanation, false, false, 0);

    for (button, text) in [
        (&first, "Всё верно. Сначала проверьте, что вы скачивали в последнее время, нагрузку в диспетчере задач и странные процессы. Удалите кейлоггеры, трояны и другие вирусы, которые могут забрать данные из хранилища."),
        (&second, "Смело, но обвинением вирус не остановить. Сначала проверьте автозагрузку, процессы, расширения браузера и отзовите токены — а называть автора козлом можно и после."),
        (&third, "Радикально, но надёжно. Перед переустановкой сохраните логи и проверьте, откуда пришло заражение, чтобы не повторить историю."),
    ] {
        let label = explanation.clone();
        button.connect_toggled(move |button| {
            if button.is_active() {
                label.set_text(text);
            }
        });
    }

    first.set_active(true);
    dialog.show_all();
    dialog.present();
    let _ = dialog.run();
    dialog.hide();

    while gtk::events_pending() {
        gtk::main_iteration();
    }

    let choice = if second.is_active() {
        2
    } else if third.is_active() {
        3
    } else {
        1
    };
    dialog.close();

    (choice, choice == 2)
}

#[cfg(not(target_os = "linux"))]
fn native_onboarding_dialog() -> (u8, bool) {
    (1, false)
}

#[derive(Default, Serialize, Deserialize)]
struct ChangelogState {
    version: String,
    never: bool,
}

fn changelog_state(app: &AppHandle) -> ChangelogState {
    let Ok(directory) = app.path().app_config_dir() else {
        return ChangelogState::default();
    };
    let path = directory.join("changelog-state.json");
    std::fs::read_to_string(path)
        .ok()
        .and_then(|raw| serde_json::from_str(&raw).ok())
        .unwrap_or_default()
}

fn save_changelog_state(app: &AppHandle, never: bool) {
    let Ok(directory) = app.path().app_config_dir() else {
        return;
    };
    let _ = std::fs::create_dir_all(&directory);
    let state = ChangelogState {
        version: APP_VERSION.to_owned(),
        never,
    };
    let _ = std::fs::write(
        directory.join("changelog-state.json"),
        serde_json::to_string(&state).unwrap_or_default(),
    );
}

#[cfg(target_os = "linux")]
fn native_changelog_choice() -> (bool, bool) {
    use gtk::prelude::*;

    let text = format!("Вышла версия {APP_VERSION}. Хотите узнать, что нового?");
    let dialog = gtk::MessageDialog::new(
        None::<&gtk::Window>,
        gtk::DialogFlags::MODAL,
        gtk::MessageType::Question,
        gtk::ButtonsType::None,
        &text,
    );
    dialog.set_title("Nameless StreamHata");
    dialog.add_button("Посмотреть", gtk::ResponseType::Yes);
    dialog.add_button("Пропустить", gtk::ResponseType::No);

    let checkbox = gtk::CheckButton::with_label("Не показывать больше");
    dialog.content_area().add(&checkbox);
    checkbox.show();
    dialog.show_all();
    dialog.present();

    let response = dialog.run();
    let never = checkbox.is_active();
    dialog.close();

    (response == gtk::ResponseType::Yes, never)
}

#[cfg(target_os = "windows")]
use windows::core::{HSTRING, PCWSTR};

#[cfg(target_os = "windows")]
fn native_changelog_choice() -> (bool, bool) {
    use windows::core::w;
    use windows::core::BOOL;
    use windows::Win32::UI::Controls::{
        TaskDialogIndirect, TASKDIALOGCONFIG, TASKDIALOG_BUTTON, TDF_ALLOW_DIALOG_CANCELLATION,
        TDF_SIZE_TO_CONTENT,
    };

    let buttons = [
        TASKDIALOG_BUTTON {
            nButtonID: 100,
            pszButtonText: w!("Посмотреть"),
        },
        TASKDIALOG_BUTTON {
            nButtonID: 101,
            pszButtonText: w!("Пропустить"),
        },
    ];
    let text = HSTRING::from(format!(
        "Вышла версия {APP_VERSION}. Хотите узнать, что нового?"
    ));
    let config = TASKDIALOGCONFIG {
        cbSize: std::mem::size_of::<TASKDIALOGCONFIG>() as u32,
        dwFlags: TDF_ALLOW_DIALOG_CANCELLATION | TDF_SIZE_TO_CONTENT,
        pszWindowTitle: w!("Nameless StreamHata"),
        pszMainInstruction: PCWSTR::from_raw(text.as_ptr()),
        pszContent: w!("Посмотреть список изменений?"),
        cButtons: buttons.len() as u32,
        pButtons: buttons.as_ptr(),
        pszVerificationText: w!("Не показывать больше"),
        ..Default::default()
    };
    let mut button = 0;
    let mut checked = BOOL(0);
    let _ = unsafe { TaskDialogIndirect(&config, Some(&mut button), None, Some(&mut checked)) };

    (button == 100, checked.as_bool())
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn native_changelog_choice() -> (bool, bool) {
    (false, false)
}

#[tauri::command]
fn get_onboarding_state(app: AppHandle) -> OnboardingState {
    onboarding_state(&app)
}

fn restart_onboarding(app: &AppHandle) -> ! {
    if let Ok(directory) = app.path().app_config_dir() {
        let _ = std::fs::remove_file(directory.join("onboarding-state.json"));
        let _ = std::fs::remove_file(directory.join("terms-state.json"));
        let _ = std::fs::remove_file(directory.join("changelog-state.json"));
    }

    app.restart();
}

#[tauri::command]
fn clear_virus_mode(app: AppHandle) {
    if let Ok(directory) = app.path().app_config_dir() {
        let _ = std::fs::remove_file(directory.join("onboarding-state.json"));
        let _ = std::fs::remove_file(directory.join("terms-state.json"));
        let _ = std::fs::remove_file(directory.join("changelog-state.json"));
    }

    if let Some(window) = app.get_webview_window("main") {
        let _ = window.set_title("Nameless StreamHata");
    }
}

#[tauri::command]
fn restart_app(app: AppHandle) {
    app.restart();
}

#[tauri::command]
fn show_splash(app: AppHandle) {
    if let Some(window) = app.get_webview_window("splash") {
        let _ = window.show();
    }
}

#[tauri::command]
fn open_changelog(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("changelog") {
        let _ = window.show();
        let _ = window.set_focus();

        return Ok(());
    }

    WebviewWindowBuilder::new(&app, "changelog", WebviewUrl::App("changelog.html".into()))
        .title("Что нового · Nameless StreamHata")
        .inner_size(760.0, 680.0)
        .min_inner_size(520.0, 420.0)
        .resizable(true)
        .center()
        .visible(true)
        .focused(true)
        .build()
        .map(|_| ())
        .map_err(|error| error.to_string())
}

#[tauri::command]
fn finish_changelog(app: AppHandle) {
    if let Some(window) = app.get_webview_window("changelog") {
        let _ = window.destroy();
    }

    if let Some(window) = app.get_webview_window("splash") {
        let _ = window.hide();
    }

    if let Some(window) = app.get_webview_window("main") {
        let _ = window.show();
        let _ = window.unminimize();
        let _ = window.set_focus();
    }
}

#[tauri::command]
fn open_system_window(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("system") {
        let _ = window.show();
        let _ = window.set_focus();

        return Ok(());
    }

    WebviewWindowBuilder::new(&app, "system", WebviewUrl::App("system.html".into()))
        .title("Nameless StreamHata · Система")
        .inner_size(760.0, 640.0)
        .min_inner_size(560.0, 480.0)
        .build()
        .map(|_| ())
        .map_err(|error| error.to_string())
}

#[derive(Serialize)]
struct SessionStatus {
    present: bool,
}

fn entry() -> Result<Entry, String> {
    Entry::new(SERVICE, USER).map_err(|error| error.to_string())
}

#[tauri::command]
fn session_status() -> Result<SessionStatus, String> {
    match entry()?.get_password() {
        Ok(value) => Ok(SessionStatus {
            present: !value.is_empty(),
        }),
        Err(keyring::Error::NoEntry) => Ok(SessionStatus { present: false }),
        Err(error) => Err(error.to_string()),
    }
}

#[tauri::command]
fn save_session(token: String) -> Result<(), String> {
    entry()?
        .set_password(&token)
        .map_err(|error| error.to_string())
}

#[derive(Deserialize)]
struct ExchangeResponse {
    #[serde(rename = "refreshToken")]
    refresh_token: String,
    #[serde(rename = "bridgeCode")]
    bridge_code: String,
}

#[derive(Deserialize)]
struct ResumeResponse {
    #[serde(rename = "bridgeCode")]
    bridge_code: String,
}

#[tauri::command]
fn resume_session(app: AppHandle) -> Result<bool, String> {
    let Ok(token) = entry()?.get_password() else {
        return Ok(false);
    };

    if token.is_empty() {
        return Ok(false);
    }

    let response = reqwest::blocking::Client::new()
        .post("https://streamhata.rdpctd.dev/rgg-sync/desktop/resume")
        .bearer_auth(&token)
        .send()
        .map_err(|error| error.to_string())?;

    if !response.status().is_success() {
        let _ = entry()?.delete_credential();
        return Ok(false);
    }

    let resume = response
        .json::<ResumeResponse>()
        .map_err(|error| error.to_string())?;
    let bridge = format!(
        "https://streamhata.rdpctd.dev/rgg-sync/desktop/login?code={}",
        resume.bridge_code
    );

    if let Some(window) = app.get_webview_window("main") {
        window
            .navigate(bridge.parse().expect("valid bridge url"))
            .map_err(|error| error.to_string())?;
    }

    Ok(true)
}

#[tauri::command]
fn start_desktop_login(app: AppHandle) -> Result<(), String> {
    let listener = TcpListener::bind("127.0.0.1:0").map_err(|error| error.to_string())?;
    let port = listener
        .local_addr()
        .map_err(|error| error.to_string())?
        .port();
    let auth_url = format!("https://streamhata.rdpctd.dev/desktop-auth?port={port}");

    open::that(&auth_url).map_err(|error| error.to_string())?;

    thread::spawn(move || {
        let Ok((mut stream, _)) = listener.accept() else {
            return;
        };

        let mut buffer = [0_u8; 8192];
        let size = stream.read(&mut buffer).unwrap_or_default();
        let request = String::from_utf8_lossy(&buffer[..size]);
        let code = request
            .lines()
            .next()
            .and_then(|line| line.split_whitespace().nth(1))
            .and_then(|path| path.split('?').nth(1))
            .and_then(|query| {
                query.split('&').find_map(|pair| {
                    let (key, value) = pair.split_once('=')?;
                    (key == "code").then_some(value.to_owned())
                })
            });

        let body = "<h1>Готово</h1><p>Можно закрыть эту вкладку и вернуться в приложение.</p>";
        let response =
            format!("HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\n\r\n{body}");
        let _ = stream.write_all(response.as_bytes());

        let Some(code) = code else {
            return;
        };

        let response = reqwest::blocking::Client::new()
            .post("https://streamhata.rdpctd.dev/rgg-sync/desktop/exchange")
            .json(&serde_json::json!({ "code": code }))
            .send()
            .and_then(|response| response.error_for_status())
            .and_then(|response| response.json::<ExchangeResponse>());

        let Ok(exchange) = response else {
            return;
        };

        if entry()
            .and_then(|entry| {
                entry
                    .set_password(&exchange.refresh_token)
                    .map_err(|error| error.to_string())
            })
            .is_err()
        {
            return;
        }

        let bridge = format!(
            "https://streamhata.rdpctd.dev/rgg-sync/desktop/login?code={}",
            exchange.bridge_code
        );

        if let Some(window) = app.get_webview_window("main") {
            let _ = window.navigate(bridge.parse().expect("valid bridge url"));
        }
    });

    Ok(())
}

#[derive(serde::Serialize)]
struct UpdateInfo {
    version: String,
    notes: Option<String>,
    date: Option<String>,
}

#[tauri::command]
fn hide_to_tray(app: AppHandle) {
    if let Some(window) = app.get_webview_window("main") {
        let _ = window.hide();
    }
}

#[tauri::command]
fn app_version() -> String {
    APP_VERSION.to_owned()
}

#[tauri::command]
async fn check_update(app: AppHandle) -> Result<Option<UpdateInfo>, String> {
    let update = app
        .updater()
        .map_err(|error| error.to_string())?
        .check()
        .await
        .map_err(|error| error.to_string())?;

    let Some(update) = update else {
        return Ok(None);
    };

    let should_notify = UPDATE_NOTIFIED
        .lock()
        .map(|mut seen| {
            if seen.as_deref() == Some(update.version.as_str()) {
                false
            } else {
                *seen = Some(update.version.clone());
                true
            }
        })
        .unwrap_or(false);

    if should_notify {
        let _ = app
            .notification()
            .builder()
            .title("Доступно обновление StreamHata")
            .body(format!(
                "Версия {} уже доступна. Откройте приложение, чтобы обновиться.",
                update.version
            ))
            .show();
    }

    Ok(Some(UpdateInfo {
        version: update.version,
        notes: update.body,
        date: update.date.map(|value| value.to_string()),
    }))
}

#[tauri::command]
async fn install_update(app: AppHandle) -> Result<(), String> {
    let update = app
        .updater()
        .map_err(|error| error.to_string())?
        .check()
        .await
        .map_err(|error| error.to_string())?
        .ok_or_else(|| "Обновлений нет".to_string())?;

    let emitter = app.clone();

    update
        .download_and_install(
            move |downloaded, total| {
                let _ = emitter.emit("update-progress", (downloaded, total));
            },
            || {},
        )
        .await
        .map_err(|error| error.to_string())?;

    app.restart();
}

async fn tray_check_and_update(app: AppHandle) {
    let update = match app.updater() {
        Ok(updater) => updater.check().await,
        Err(error) => {
            let _ = app
                .notification()
                .builder()
                .title("Не удалось проверить обновление")
                .body(error.to_string())
                .show();
            return;
        }
    };

    let Ok(update) = update else {
        let _ = app
            .notification()
            .builder()
            .title("StreamHata обновлён")
            .body("Установлена последняя доступная версия.")
            .show();
        return;
    };

    let Some(update) = update else {
        let _ = app
            .notification()
            .builder()
            .title("Обновлений нет")
            .body("Установлена последняя версия StreamHata.")
            .show();
        return;
    };

    let version = update.version.clone();
    let _ = app
        .notification()
        .builder()
        .title("Обновляем StreamHata")
        .body(format!("Скачиваем версию {version}…"))
        .show();

    let emitter = app.clone();

    if update
        .download_and_install(
            move |downloaded, total| {
                let _ = emitter.emit("update-progress", (downloaded, total));
            },
            || {},
        )
        .await
        .is_err()
    {
        let _ = app
            .notification()
            .builder()
            .title("Не удалось обновить StreamHata")
            .body("Попробуйте ещё раз или обновите вручную.")
            .show();
        return;
    }

    app.restart();
}

#[tauri::command]
fn clear_session() -> Result<(), String> {
    match entry()?.delete_credential() {
        Ok(()) | Err(keyring::Error::NoEntry) => Ok(()),
        Err(error) => Err(error.to_string()),
    }
}

fn start_notification_poller(app: AppHandle) {
    std::thread::spawn(move || {
        let client = reqwest::blocking::Client::builder()
            .timeout(std::time::Duration::from_secs(15))
            .build();

        let Ok(client) = client else {
            return;
        };

        let mut seen = HashSet::new();
        let mut primed = false;
        let mut seen_viewers = HashSet::new();
        let mut viewers_primed = false;
        let mut seen_version = String::new();

        loop {
            std::thread::sleep(std::time::Duration::from_secs(15));

            let Some(window) = app.get_webview_window("main") else {
                continue;
            };
            let cookies = window.cookies().unwrap_or_default();
            let Some(cookie) = cookies
                .iter()
                .find(|cookie| cookie.name() == "e-hub-refresh-token")
            else {
                continue;
            };
            let cookie_header = format!("e-hub-refresh-token={}", cookie.value());

            let settings = client
                .get("https://streamhata.rdpctd.dev/rgg-sync/notifications/settings")
                .send()
                .and_then(|response| response.error_for_status())
                .and_then(|response| response.json::<serde_json::Value>());

            let Ok(settings) = settings else {
                continue;
            };
            if settings.get("enabled").and_then(|value| value.as_bool()) != Some(true) {
                continue;
            }

            let quiet = settings
                .get("quietWhenFocused")
                .and_then(|value| value.as_bool())
                == Some(true)
                && window.is_focused().unwrap_or(false);

            if settings.get("version").and_then(|value| value.as_bool()) == Some(true) && !quiet {
                if let Ok(response) = client
                    .get("https://streamhata.rdpctd.dev/version.json")
                    .send()
                    .and_then(|response| response.error_for_status())
                    .and_then(|response| response.json::<serde_json::Value>())
                {
                    if let Some(version) = response.get("version").and_then(|value| value.as_str())
                    {
                        if !seen_version.is_empty() && seen_version != version {
                            let _ = app
                                .notification()
                                .builder()
                                .title("Доступно обновление StreamHata")
                                .body(format!("Версия {version} уже доступна"))
                                .show();
                        }

                        seen_version = version.to_owned();
                    }
                }
            }

            let viewers = client
                .get("https://streamhata.rdpctd.dev/rgg-sync/viewers")
                .header(reqwest::header::COOKIE, &cookie_header)
                .send()
                .and_then(|response| response.error_for_status())
                .and_then(|response| response.json::<serde_json::Value>());

            if let Ok(viewers) = viewers {
                let list = viewers
                    .get("viewers")
                    .and_then(|value| value.as_array())
                    .cloned()
                    .unwrap_or_default();

                for viewer in list {
                    let user_id = viewer
                        .get("userId")
                        .and_then(|value| value.as_str())
                        .unwrap_or_default();
                    if user_id.is_empty() || !seen_viewers.insert(user_id.to_owned()) {
                        continue;
                    }
                    if !viewers_primed || quiet {
                        continue;
                    }
                    if settings.get("viewer").and_then(|value| value.as_bool()) != Some(true) {
                        continue;
                    }

                    let name = viewer
                        .get("displayName")
                        .and_then(|value| value.as_str())
                        .unwrap_or("Зритель");
                    let _ = app
                        .notification()
                        .builder()
                        .title("Новый зритель")
                        .body(name)
                        .show();
                }

                viewers_primed = true;
            }

            let alerts = client
                .get("https://streamhata.rdpctd.dev/rgg-sync/alerts")
                .header(reqwest::header::COOKIE, cookie_header)
                .send()
                .and_then(|response| response.error_for_status())
                .and_then(|response| response.json::<serde_json::Value>());

            let Ok(alerts) = alerts else {
                continue;
            };
            let events = alerts
                .get("events")
                .and_then(|value| value.as_array())
                .cloned()
                .unwrap_or_default();

            for event in events {
                let id = event
                    .get("id")
                    .and_then(|value| value.as_str())
                    .unwrap_or_default();
                if id.is_empty() || !seen.insert(id.to_owned()) {
                    continue;
                }
                if !primed {
                    continue;
                }

                let kind = event
                    .get("type")
                    .and_then(|value| value.as_str())
                    .unwrap_or_default();
                let enabled = match kind {
                    "follow" => "follow",
                    "subscribe" => "subscribe",
                    "gift" => "gift",
                    "resub" => "resub",
                    "raid" => "raid",
                    _ => continue,
                };
                if settings.get(enabled).and_then(|value| value.as_bool()) != Some(true) {
                    continue;
                }

                let username = event
                    .get("username")
                    .and_then(|value| value.as_str())
                    .unwrap_or("Зритель");
                let title = match kind {
                    "follow" => "Новый фолловер",
                    "subscribe" => "Новая подписка",
                    "gift" => "Подарочная подписка",
                    "resub" => "Продление подписки",
                    "raid" => "Рейд",
                    _ => "Событие канала",
                };

                let _ = app
                    .notification()
                    .builder()
                    .title(title)
                    .body(username)
                    .show();
            }

            primed = true;
        }
    });
}

pub fn run() {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::from_default_env()
                .add_directive("info".parse().expect("valid log level")),
        )
        .init();

    std::thread::spawn(start_system_overlay_server);

    tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
                let _ = window.unminimize();
                let _ = window.set_focus();
            }
        }))
        .on_page_load(|webview, payload| {
            if webview.label() != "main" {
                return;
            }

            let app = webview.app_handle().clone();
            let Some(splash) = app.get_webview_window("splash") else {
                return;
            };

            match payload.event() {
                PageLoadEvent::Started => {
                    if let Some(window) = app.get_webview_window("main") {
                        let _ = window.hide();
                    }
                    if app.get_webview_window("changelog").is_none() {
                        let _ = splash.show();
                    }
                }
                PageLoadEvent::Finished => {
                    let splash = splash.clone();
                    let app_for_show = app.clone();
                    std::thread::spawn(move || {
                        std::thread::sleep(std::time::Duration::from_millis(1100));
                        let app_for_window = app_for_show.clone();
                        let _ = app_for_show.run_on_main_thread(move || {
                            let _ = splash.close();
                            if let Some(window) = app_for_window.get_webview_window("changelog") {
                                let _ = window.show();
                                let _ = window.set_focus();
                            } else if let Some(window) = app_for_window.get_webview_window("main") {
                                let _ = window.show();
                                let _ = window.set_focus();
                            }
                        });
                    });
                }
            }
        })
        .setup(|app| {
            if !terms_accepted(app.handle()) {
                if !native_terms_dialog() {
                    std::process::exit(0);
                }

                save_terms_accepted(app.handle());
            }

            if !onboarding_state(app.handle()).completed {
                let (choice, virus) = native_onboarding_dialog();
                save_onboarding_state(app.handle(), choice, virus);
            }

            let state = changelog_state(app.handle());
            let mut show_changelog = false;

            if !state.never && state.version != APP_VERSION {
                let (view, never) = native_changelog_choice();

                if view {
                    show_changelog = true;
                    save_changelog_state(app.handle(), never);
                } else if never {
                    save_changelog_state(app.handle(), true);
                }
            }

            let app_for_nav = app.handle().clone();
            let virus_mode = onboarding_state(app.handle()).virus;
            let init_script = format!(
                "window.__STREAMHATA_DESKTOP__ = true; window.__STREAMHATA_VIRUS__ = {virus_mode}; try {{ localStorage.setItem('nsh.virus-mode', '{virus_mode}'); document.documentElement.setAttribute('data-virus', '{virus_mode}'); if ({virus_mode}) document.title = 'StreamHata - очень опасный вирус'; }} catch (error) {{}}"
            );
            let main_url = if virus_mode {
                WebviewUrl::App("index.html?virus=1".into())
            } else {
                WebviewUrl::App("index.html".into())
            };
            let main = WebviewWindowBuilder::new(app, "main", main_url)
                .title("Nameless StreamHata")
                .inner_size(1280.0, 800.0)
                .min_inner_size(1024.0, 640.0)
                .visible(false)
                .user_agent("NamelessStreamHataDesktop/0.1")
                .initialization_script(&init_script)
                .on_new_window(|url, _features| {
                    let _ = open::that(url.as_str());
                    NewWindowResponse::Deny
                })
                .on_navigation(move |url| {
                    if url.path() == "/app/restart" || (url.scheme() == "streamhata" && url.host_str() == Some("restart")) {
                        restart_onboarding(&app_for_nav);
                    }

                    if url.path() == "/app/system" {
                        let _ = open_system_window(app_for_nav.clone());

                        return false;
                    }

                    if url.scheme() == "streamhata" {
                        if url.host_str() == Some("system") {
                            let _ = open_system_window(app_for_nav.clone());

                            return false;
                        }

                        if let Some((_, target)) = url.query_pairs().find(|(key, _)| key == "url") {
                            let _ = open::that(target.as_ref());
                        }

                        return false;
                    }

                    true
                })
                .build()?;

            if onboarding_state(app.handle()).virus {
                let _ = main.set_title("StreamHata - очень опасный вирус");
            }

            let _splash =
                WebviewWindowBuilder::new(app, "splash", WebviewUrl::App("splash.html".into()))
                    .title("Nameless StreamHata")
                    .inner_size(360.0, 220.0)
                    .resizable(false)
                    .decorations(false)
                    .always_on_top(true)
                    .center()
                    .visible(!show_changelog)
                    .focused(!show_changelog)
                    .background_color(tauri::window::Color(15, 8, 23, 255))
                    .build()?;

            if show_changelog {
                let _changelog = WebviewWindowBuilder::new(
                    app,
                    "changelog",
                    WebviewUrl::App("changelog.html".into()),
                )
                .title("Что нового · Nameless StreamHata")
                .inner_size(600.0, 560.0)
                .min_inner_size(460.0, 360.0)
                .resizable(true)
                .center()
                .visible(false)
                .background_color(tauri::window::Color(15, 8, 23, 255))
                .build()?;
            }

            if let Ok(image) = image::load_from_memory(include_bytes!("../icons/128x128.png")) {
                let image = image.to_rgba8();
                let (width, height) = image.dimensions();
                let icon = tauri::image::Image::new_owned(image.into_raw(), width, height);
                let _ = main.set_icon(icon);
            }

            let show = MenuItem::with_id(app, "show", "Открыть StreamHata", true, None::<&str>)?;
            let system = MenuItem::with_id(app, "system", "Система", true, None::<&str>)?;
            let top = MenuItem::with_id(app, "top", "Поверх всех окон", true, None::<&str>)?;
            let hide = MenuItem::with_id(app, "hide", "Скрыть в трей", true, None::<&str>)?;
            let update = MenuItem::with_id(app, "update", "Проверить обновление", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Выход", true, None::<&str>)?;
            let menu = Menu::with_items(app, &[&show, &system, &top, &hide, &update, &quit])?;

            TrayIconBuilder::new()
                .icon(app.default_window_icon().cloned().expect("app icon"))
                .menu(&menu)
                .show_menu_on_left_click(false)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "show" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                    "system" => {
                        let _ = open_system_window(app.clone());
                    }
                    "top" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let next = !window.is_always_on_top().unwrap_or(false);
                            let _ = window.set_always_on_top(next);
                        }
                    }
                    "hide" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.hide();
                        }
                    }
                    "update" => {
                        let app = app.clone();
                        tauri::async_runtime::spawn(async move {
                            tray_check_and_update(app).await;
                        });
                    }
                    "quit" => app.exit(0),
                    _ => {}
                })
                .on_tray_icon_event(|tray, event| {
                    if let TrayIconEvent::Click {
                        button: MouseButton::Left,
                        button_state: MouseButtonState::Up,
                        ..
                    } = event
                    {
                        let app = tray.app_handle();
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                })
                .build(app)?;

            start_notification_poller(app.handle().clone());

            Ok(())
        })
        .on_window_event(|window, event| {
            if let WindowEvent::CloseRequested { api, .. } = event {
                api.prevent_close();

                if window.label() == "changelog" {
                    finish_changelog(window.app_handle().clone());
                } else {
                    let _ = window.hide();
                }
            }
        })
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_notification::init())
        .invoke_handler(tauri::generate_handler![
            session_status,
            save_session,
            clear_session,
            system_metrics,
            system_widget_enabled,
            set_system_widget_enabled,
            system_overlay_url,
            open_system_window,
            show_splash,
            open_changelog,
            finish_changelog,
            get_onboarding_state,
            clear_virus_mode,
            restart_app,
            resume_session,
            start_desktop_login,
            app_version,
            hide_to_tray,
            check_update,
            install_update
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
