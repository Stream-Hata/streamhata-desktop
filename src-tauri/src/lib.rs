mod obs;

use std::collections::HashSet;
use std::io::{Read, Write};
use std::net::TcpListener;
use std::process::Command;
use std::thread;

use keyring::Entry;
use serde::{Deserialize, Serialize};
use std::sync::atomic::{AtomicBool, Ordering};
use sysinfo::{DiskRefreshKind, Disks, Networks, System};
use tauri::menu::{Menu, MenuItem};
use tauri::tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent};
use tauri::webview::{NewWindowResponse, PageLoadEvent};
use tauri::{AppHandle, Emitter, Manager, WebviewUrl, WebviewWindowBuilder, WindowEvent};
use tauri_plugin_notification::{Action, ActionType, NotificationExt};
use tauri_plugin_updater::{Update, UpdaterExt};

const SERVICE: &str = "dev.rdpctd.nameless-streamhata";
static SYSTEM_WIDGET_ENABLED: AtomicBool = AtomicBool::new(true);
static UPDATE_NOTIFIED: std::sync::Mutex<Option<String>> = std::sync::Mutex::new(None);
static UPDATE_MENU_ITEM: std::sync::Mutex<Option<MenuItem<tauri::Wry>>> =
    std::sync::Mutex::new(None);
static UPDATE_UI_STATE: std::sync::Mutex<UpdateUiState> = std::sync::Mutex::new(UpdateUiState {
    phase: String::new(),
    version: None,
    downloaded: 0,
    total: 0,
    error: None,
});
static UPDATE_INSTALLING: AtomicBool = AtomicBool::new(false);
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
    kind: String,
    file_system: String,
    removable: bool,
    read_bytes: u64,
    written_bytes: u64,
}

#[derive(Serialize)]
struct CpuCoreMetric {
    name: String,
    usage: f32,
    frequency: u64,
}

#[derive(Serialize)]
struct ProcessMetric {
    pid: u32,
    name: String,
    cpu: f32,
    memory: u64,
    status: String,
}

#[derive(Serialize)]
struct NetworkMetric {
    name: String,
    received: u64,
    transmitted: u64,
    packets_received: u64,
    packets_transmitted: u64,
    errors_received: u64,
    errors_transmitted: u64,
}

#[derive(Serialize)]
struct BatteryMetric {
    name: String,
    status: String,
    percent: Option<f32>,
}

#[derive(Serialize)]
struct PeripheralMetric {
    name: String,
    kind: String,
    detail: String,
}

#[derive(Serialize)]
struct MemoryModule {
    locator: String,
    bank: String,
    size: String,
    kind: String,
    speed: String,
    manufacturer: String,
    part_number: String,
}

#[derive(Serialize)]
struct VolumeMetric {
    name: String,
    path: String,
    kind: String,
    size: u64,
    file_system: String,
    mount: String,
    model: String,
    serial: String,
    parent: String,
    transport: String,
    rotational: bool,
    revision: String,
}

#[derive(Serialize)]
struct SmartAttribute {
    id: u64,
    name: String,
    value: u64,
    worst: u64,
    threshold: u64,
    raw: String,
}

#[derive(Serialize)]
struct DiskHealth {
    device: String,
    model: String,
    serial: String,
    firmware: String,
    health: String,
    temperature_c: Option<i64>,
    power_on_hours: Option<u64>,
    reallocated_sectors: Option<u64>,
    pending_sectors: Option<u64>,
    uncorrectable_sectors: Option<u64>,
    wear_percent: Option<u64>,
    data_written_bytes: Option<u64>,
    data_read_bytes: Option<u64>,
    media_errors: Option<u64>,
    note: String,
    transport: String,
    rotational: bool,
    type_label: String,
    attributes: Vec<SmartAttribute>,
}

#[derive(Serialize)]
struct SystemDetails {
    memory: Vec<MemoryModule>,
    volumes: Vec<VolumeMetric>,
    disks: Vec<DiskHealth>,
    board_vendor: String,
    board_name: String,
    bios_vendor: String,
    bios_version: String,
    bios_date: String,
    product_name: String,
    serial: String,
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
    host: String,
    os: String,
    kernel: String,
    physical_cores: usize,
    logical_cores: usize,
    load_one: f64,
    load_five: f64,
    load_fifteen: f64,
    cpu_cores: Vec<CpuCoreMetric>,
    process_list: Vec<ProcessMetric>,
    networks: Vec<NetworkMetric>,
    batteries: Vec<BatteryMetric>,
    peripherals: Vec<PeripheralMetric>,
    arch: String,
    bitness: u32,
    cpu_brand: String,
    cpu_vendor: String,
    cpu_frequency: u64,
    gpu_name: String,
    gpu_temperature: Option<i64>,
    cpu_temperature: Option<f32>,
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
#[cfg(target_os = "linux")]
fn gpu_details() -> (Option<String>, Option<i64>) {
    let Ok(nvml) = nvml_wrapper::Nvml::init() else {
        return (None, None);
    };
    let Ok(device) = nvml.device_by_index(0) else {
        return (None, None);
    };
    let name = device.name().ok();
    let temperature = device
        .temperature(nvml_wrapper::enum_wrappers::device::TemperatureSensor::Gpu)
        .ok()
        .map(|value| value as i64);
    (name, temperature)
}

#[cfg(target_os = "windows")]
fn powershell_json(script: &str) -> Option<serde_json::Value> {
    let output = Command::new("powershell")
        .args([
            "-NoProfile",
            "-NonInteractive",
            "-ExecutionPolicy",
            "Bypass",
            "-Command",
            script,
        ])
        .output()
        .ok()?;
    if !output.status.success() {
        return None;
    }
    let text = String::from_utf8_lossy(&output.stdout);
    serde_json::from_str(text.trim_start_matches('\u{feff}').trim()).ok()
}

#[cfg(target_os = "windows")]
fn json_array(value: serde_json::Value) -> Vec<serde_json::Value> {
    value.as_array().cloned().unwrap_or_else(|| vec![value])
}

#[cfg(target_os = "windows")]
fn json_u64(value: &serde_json::Value) -> u64 {
    value
        .as_u64()
        .or_else(|| value.as_str().and_then(|value| value.parse().ok()))
        .unwrap_or(0)
}

#[cfg(target_os = "windows")]
fn gpu_details() -> (Option<String>, Option<i64>) {
    if let Ok(output) = Command::new("nvidia-smi")
        .args([
            "--query-gpu=name,temperature.gpu",
            "--format=csv,noheader,nounits",
        ])
        .output()
    {
        if output.status.success() {
            let text = String::from_utf8_lossy(&output.stdout);
            if let Some(line) = text.lines().next() {
                let mut parts = line.split(',').map(str::trim);
                let name = parts.next().unwrap_or_default().to_string();
                let temperature = parts.next().and_then(|value| value.parse::<i64>().ok());
                if !name.is_empty() {
                    return (Some(name), temperature);
                }
            }
        }
    }
    let name = powershell_json("@(Get-CimInstance Win32_VideoController | Select-Object -ExpandProperty Name) | ConvertTo-Json -Compress")
        .and_then(|value| json_array(value).first().and_then(|value| value.as_str()).map(str::to_string));

    (name, None)
}

#[cfg(target_os = "windows")]
fn cpu_temperature() -> Option<f32> {
    let value = powershell_json("@(Get-CimInstance -Namespace root/wmi -ClassName MSAcpi_ThermalZoneTemperature -ErrorAction SilentlyContinue | Select-Object -ExpandProperty CurrentTemperature) | ConvertTo-Json -Compress")?;
    json_array(value)
        .into_iter()
        .filter_map(|value| value.as_f64())
        .map(|value| (value / 10.0 - 273.15) as f32)
        .reduce(f32::max)
}

#[cfg(target_os = "windows")]
fn battery_metrics() -> Vec<BatteryMetric> {
    let Some(value) = powershell_json("@(Get-CimInstance Win32_Battery | Select-Object Name,EstimatedChargeRemaining,BatteryStatus) | ConvertTo-Json -Compress -Depth 3") else {
        return Vec::new();
    };
    json_array(value)
        .into_iter()
        .map(|item| {
            let status = match item["BatteryStatus"].as_u64().unwrap_or(0) {
                1 => "Discharging",
                2 => "AC",
                3 => "Fully charged",
                4 => "Low",
                5 => "Critical",
                6 => "Charging",
                7 => "Charging + high",
                8 => "Charging + low",
                9 => "Charging + critical",
                _ => "Unknown",
            };
            BatteryMetric {
                name: item["Name"].as_str().unwrap_or("Battery").to_string(),
                status: status.to_string(),
                percent: item["EstimatedChargeRemaining"]
                    .as_f64()
                    .map(|value| value as f32),
            }
        })
        .collect()
}

#[cfg(target_os = "windows")]
fn peripheral_metrics() -> Vec<PeripheralMetric> {
    let Some(value) = powershell_json("@(Get-PnpDevice -PresentOnly | Where-Object { $_.Class -in @('USB','Bluetooth','HIDClass','Keyboard','Mouse','AudioEndpoint') } | Select-Object FriendlyName,Class,InstanceId) | ConvertTo-Json -Compress -Depth 3") else {
        return Vec::new();
    };
    json_array(value)
        .into_iter()
        .filter_map(|item| {
            let name = item["FriendlyName"].as_str().unwrap_or_default().trim();
            if name.is_empty() {
                return None;
            }
            Some(PeripheralMetric {
                name: name.to_string(),
                kind: item["Class"].as_str().unwrap_or("Device").to_string(),
                detail: item["InstanceId"].as_str().unwrap_or_default().to_string(),
            })
        })
        .collect()
}

#[cfg(target_os = "windows")]
fn dmi_info() -> (String, String, String, String, String, String, String) {
    let Some(value) = powershell_json("$board=Get-CimInstance Win32_BaseBoard; $bios=Get-CimInstance Win32_BIOS; $cs=Get-CimInstance Win32_ComputerSystemProduct; [pscustomobject]@{boardVendor=$board.Manufacturer;boardName=$board.Product;biosVendor=$bios.Manufacturer;biosVersion=$bios.SMBIOSBIOSVersion;biosDate=$bios.ReleaseDate;productName=$cs.Name;serial=$cs.IdentifyingNumber} | ConvertTo-Json -Compress") else {
        return (String::new(), String::new(), String::new(), String::new(), String::new(), String::new(), String::new());
    };
    let text = |key: &str| value[key].as_str().unwrap_or_default().to_string();
    (
        text("boardVendor"),
        text("boardName"),
        text("biosVendor"),
        text("biosVersion"),
        text("biosDate"),
        text("productName"),
        text("serial"),
    )
}

#[cfg(target_os = "windows")]
fn memory_modules() -> Vec<MemoryModule> {
    let Some(value) = powershell_json("@(Get-CimInstance Win32_PhysicalMemory | Select-Object DeviceLocator,BankLabel,Capacity,Speed,SMBIOSMemoryType,Manufacturer,PartNumber) | ConvertTo-Json -Compress -Depth 3") else {
        return Vec::new();
    };
    json_array(value)
        .into_iter()
        .filter_map(|item| {
            let capacity = json_u64(&item["Capacity"]);
            if capacity == 0 {
                return None;
            }
            let kind = match item["SMBIOSMemoryType"].as_u64().unwrap_or(0) {
                20 => "DDR",
                21 => "DDR2",
                24 => "DDR3",
                26 => "DDR4",
                34 => "DDR5",
                _ => "RAM",
            };
            Some(MemoryModule {
                locator: item["DeviceLocator"]
                    .as_str()
                    .unwrap_or_default()
                    .to_string(),
                bank: item["BankLabel"].as_str().unwrap_or_default().to_string(),
                size: format!("{} GB", capacity / 1024 / 1024 / 1024),
                kind: kind.to_string(),
                speed: item["Speed"]
                    .as_u64()
                    .map(|value| format!("{} MHz", value))
                    .unwrap_or_default(),
                manufacturer: item["Manufacturer"]
                    .as_str()
                    .unwrap_or_default()
                    .to_string(),
                part_number: item["PartNumber"]
                    .as_str()
                    .unwrap_or_default()
                    .trim()
                    .to_string(),
            })
        })
        .collect()
}

#[cfg(target_os = "windows")]
fn volume_layout() -> Vec<VolumeMetric> {
    let Some(value) = powershell_json("@(Get-Volume | Select-Object DriveLetter,FileSystemLabel,FileSystem,Size,SizeRemaining,Path,DriveType) | ConvertTo-Json -Compress -Depth 3") else {
        return Vec::new();
    };
    json_array(value)
        .into_iter()
        .map(|item| {
            let letter = item["DriveLetter"].as_str().unwrap_or_default();
            let label = item["FileSystemLabel"].as_str().unwrap_or_default();
            let path = item["Path"].as_str().unwrap_or_default();
            VolumeMetric {
                name: if letter.is_empty() {
                    label.to_string()
                } else {
                    letter.to_string()
                },
                path: if path.is_empty() && !letter.is_empty() {
                    format!("{}:", letter)
                } else {
                    path.to_string()
                },
                kind: item["DriveType"].as_str().unwrap_or_default().to_string(),
                size: json_u64(&item["Size"]),
                file_system: item["FileSystem"].as_str().unwrap_or_default().to_string(),
                mount: if letter.is_empty() {
                    path.to_string()
                } else {
                    format!("{}:\\", letter)
                },
                model: String::new(),
                serial: String::new(),
                parent: String::new(),
                transport: item["DriveType"].as_str().unwrap_or_default().to_string(),
                rotational: false,
                revision: String::new(),
            }
        })
        .collect()
}

#[cfg(target_os = "windows")]
fn disk_health() -> Vec<DiskHealth> {
    let Some(disks) = powershell_json("@(Get-PhysicalDisk | Select-Object DeviceId,FriendlyName,SerialNumber,MediaType,BusType,HealthStatus,OperationalStatus,Size) | ConvertTo-Json -Compress -Depth 3") else {
        return Vec::new();
    };
    let counters = powershell_json("@(Get-PhysicalDisk | Get-StorageReliabilityCounter | Select-Object DeviceId,Temperature,PowerOnHours,Wear,ReadErrorsTotal,WriteErrorsTotal) | ConvertTo-Json -Compress -Depth 3");
    let mut counter_map = std::collections::HashMap::new();
    if let Some(counters) = counters {
        for counter in json_array(counters) {
            if let Some(id) = counter["DeviceId"].as_str() {
                counter_map.insert(id.to_string(), counter);
            }
        }
    }
    json_array(disks)
        .into_iter()
        .map(|disk| {
            let device = disk["DeviceId"].as_str().unwrap_or_default().to_string();
            let counter = counter_map.get(&device);
            let media = disk["MediaType"].as_str().unwrap_or_default();
            let bus = disk["BusType"].as_str().unwrap_or_default();
            let health = disk["HealthStatus"]
                .as_str()
                .unwrap_or("Unknown")
                .to_string();
            let read_errors = counter
                .and_then(|value| value["ReadErrorsTotal"].as_u64())
                .unwrap_or(0);
            let write_errors = counter
                .and_then(|value| value["WriteErrorsTotal"].as_u64())
                .unwrap_or(0);
            DiskHealth {
                device: device.clone(),
                model: disk["FriendlyName"]
                    .as_str()
                    .unwrap_or_default()
                    .to_string(),
                serial: disk["SerialNumber"]
                    .as_str()
                    .unwrap_or_default()
                    .to_string(),
                firmware: String::new(),
                health,
                temperature_c: counter.and_then(|value| value["Temperature"].as_i64()),
                power_on_hours: counter.and_then(|value| value["PowerOnHours"].as_u64()),
                reallocated_sectors: None,
                pending_sectors: None,
                uncorrectable_sectors: None,
                wear_percent: counter.and_then(|value| value["Wear"].as_u64()),
                data_written_bytes: None,
                data_read_bytes: None,
                media_errors: if read_errors + write_errors > 0 {
                    Some(read_errors + write_errors)
                } else {
                    None
                },
                note: if counter.is_some() {
                    "Windows storage reliability counters".to_string()
                } else {
                    "SMART counters unavailable".to_string()
                },
                transport: bus.to_string(),
                rotational: media.eq_ignore_ascii_case("HDD"),
                type_label: format!("{} {}", bus, media).trim().to_string(),
                attributes: Vec::new(),
            }
        })
        .collect()
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn gpu_details() -> (Option<String>, Option<i64>) {
    (None, None)
}

#[cfg(target_os = "linux")]
fn cpu_temperature() -> Option<f32> {
    let entries = std::fs::read_dir("/sys/class/thermal").ok()?;
    let mut temperatures = Vec::new();
    for entry in entries.flatten() {
        let path = entry.path().join("temp");
        if let Ok(value) = std::fs::read_to_string(path) {
            if let Ok(value) = value.trim().parse::<f32>() {
                temperatures.push(value / 1000.0);
            }
        }
    }
    temperatures.into_iter().reduce(f32::max)
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn cpu_temperature() -> Option<f32> {
    None
}

#[tauri::command]
fn system_metrics() -> SystemMetrics {
    let mut system = System::new_all();
    std::thread::sleep(std::time::Duration::from_millis(200));
    system.refresh_cpu_usage();
    system.refresh_memory();

    let mut networks = Networks::new_with_refreshed_list();
    networks.refresh(true);
    let network_list: Vec<NetworkMetric> = networks
        .list()
        .iter()
        .map(|(name, network)| NetworkMetric {
            name: name.clone(),
            received: network.total_received(),
            transmitted: network.total_transmitted(),
            packets_received: network.total_packets_received(),
            packets_transmitted: network.total_packets_transmitted(),
            errors_received: network.total_errors_on_received(),
            errors_transmitted: network.total_errors_on_transmitted(),
        })
        .collect();
    let network_received = network_list.iter().map(|item| item.received).sum();
    let network_transmitted = network_list.iter().map(|item| item.transmitted).sum();

    let disks = Disks::new_with_refreshed_list_specifics(DiskRefreshKind::everything());
    let disk_metrics = disks
        .list()
        .iter()
        .map(|disk| DiskMetric {
            name: disk.name().to_string_lossy().to_string(),
            mount: disk.mount_point().to_string_lossy().to_string(),
            total: disk.total_space(),
            available: disk.available_space(),
            kind: disk.kind().to_string(),
            file_system: disk.file_system().to_string_lossy().to_string(),
            removable: disk.is_removable(),
            read_bytes: disk.usage().total_read_bytes,
            written_bytes: disk.usage().total_written_bytes,
        })
        .collect();

    let cpu_cores: Vec<CpuCoreMetric> = system
        .cpus()
        .iter()
        .map(|cpu| CpuCoreMetric {
            name: cpu.name().to_string(),
            usage: cpu.cpu_usage(),
            frequency: cpu.frequency(),
        })
        .collect();

    let mut process_list: Vec<ProcessMetric> = system
        .processes()
        .values()
        .map(|process| ProcessMetric {
            pid: process.pid().as_u32(),
            name: process.name().to_string_lossy().to_string(),
            cpu: process.cpu_usage(),
            memory: process.memory(),
            status: format!("{:?}", process.status()),
        })
        .collect();
    process_list.sort_by(|left, right| {
        right
            .cpu
            .partial_cmp(&left.cpu)
            .unwrap_or(std::cmp::Ordering::Equal)
    });
    process_list.truncate(20);

    let load = System::load_average();
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
        host: System::host_name().unwrap_or_else(|| "—".to_string()),
        os: System::long_os_version()
            .or_else(System::os_version)
            .unwrap_or_else(|| "—".to_string()),
        kernel: System::kernel_version().unwrap_or_else(|| "—".to_string()),
        physical_cores: System::physical_core_count().unwrap_or(0),
        logical_cores: system.cpus().len(),
        load_one: load.one,
        load_five: load.five,
        load_fifteen: load.fifteen,
        cpu_cores,
        process_list,
        networks: network_list,
        batteries: battery_metrics(),
        peripherals: peripheral_metrics(),
        arch: std::env::consts::ARCH.to_string(),
        bitness: (std::mem::size_of::<usize>() * 8) as u32,
        cpu_brand: system
            .cpus()
            .first()
            .map(|cpu| cpu.brand().to_string())
            .unwrap_or_default(),
        cpu_vendor: system
            .cpus()
            .first()
            .map(|cpu| cpu.vendor_id().to_string())
            .unwrap_or_default(),
        cpu_frequency: system
            .cpus()
            .iter()
            .map(|cpu| cpu.frequency())
            .max()
            .unwrap_or(0),
        gpu_name: gpu_details().0.unwrap_or_default(),
        gpu_temperature: gpu_details().1,
        cpu_temperature: cpu_temperature(),
    }
}

#[cfg(target_os = "linux")]
fn battery_metrics() -> Vec<BatteryMetric> {
    let Ok(entries) = std::fs::read_dir("/sys/class/power_supply") else {
        return Vec::new();
    };
    entries
        .flatten()
        .filter_map(|entry| {
            let path = entry.path();
            let kind = std::fs::read_to_string(path.join("type")).ok()?;
            if !kind.trim().eq_ignore_ascii_case("battery") {
                return None;
            }
            let name = entry.file_name().to_string_lossy().to_string();
            let status = std::fs::read_to_string(path.join("status"))
                .unwrap_or_else(|_| "Unknown".to_string())
                .trim()
                .to_string();
            let percent = std::fs::read_to_string(path.join("capacity"))
                .ok()
                .and_then(|value| value.trim().parse::<f32>().ok());
            Some(BatteryMetric {
                name,
                status,
                percent,
            })
        })
        .collect()
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn battery_metrics() -> Vec<BatteryMetric> {
    Vec::new()
}

#[cfg(target_os = "linux")]
fn peripheral_metrics() -> Vec<PeripheralMetric> {
    let Ok(entries) = std::fs::read_dir("/sys/bus/usb/devices") else {
        return Vec::new();
    };
    entries
        .flatten()
        .filter_map(|entry| {
            let path = entry.path();
            let product = std::fs::read_to_string(path.join("product")).ok()?;
            let manufacturer =
                std::fs::read_to_string(path.join("manufacturer")).unwrap_or_default();
            let vendor = std::fs::read_to_string(path.join("idVendor")).unwrap_or_default();
            let device = std::fs::read_to_string(path.join("idProduct")).unwrap_or_default();
            Some(PeripheralMetric {
                name: product.trim().to_string(),
                kind: "USB".to_string(),
                detail: format!("{} {}{}", manufacturer.trim(), vendor.trim(), device.trim())
                    .trim()
                    .to_string(),
            })
        })
        .collect()
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn peripheral_metrics() -> Vec<PeripheralMetric> {
    Vec::new()
}

fn dmi_value(name: &str) -> String {
    std::fs::read_to_string(format!("/sys/class/dmi/id/{name}"))
        .unwrap_or_default()
        .trim()
        .to_string()
}

#[cfg(target_os = "linux")]
fn dmi_info() -> (String, String, String, String, String, String, String) {
    (
        dmi_value("board_vendor"),
        dmi_value("board_name"),
        dmi_value("bios_vendor"),
        dmi_value("bios_version"),
        dmi_value("bios_date"),
        dmi_value("product_name"),
        dmi_value("product_serial"),
    )
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn dmi_info() -> (String, String, String, String, String, String, String) {
    (
        String::new(),
        String::new(),
        String::new(),
        String::new(),
        String::new(),
        String::new(),
        String::new(),
    )
}

#[tauri::command]
fn system_details() -> SystemDetails {
    let dmi = dmi_info();
    SystemDetails {
        memory: memory_modules(),
        volumes: volume_layout(),
        disks: disk_health(),
        board_vendor: dmi.0,
        board_name: dmi.1,
        bios_vendor: dmi.2,
        bios_version: dmi.3,
        bios_date: dmi.4,
        product_name: dmi.5,
        serial: dmi.6,
    }
}

#[cfg(target_os = "linux")]
fn memory_modules() -> Vec<MemoryModule> {
    let output = Command::new("dmidecode")
        .args(["-t", "17"])
        .output()
        .ok()
        .or_else(|| {
            Command::new("sudo")
                .args(["-n", "dmidecode", "-t", "17"])
                .output()
                .ok()
        });
    let Some(output) = output else {
        return Vec::new();
    };
    if !output.status.success() {
        return Vec::new();
    }
    let text = String::from_utf8_lossy(&output.stdout);
    let mut result = Vec::new();
    let mut module: Option<MemoryModule> = None;
    let mut fields: std::collections::HashMap<String, String> = std::collections::HashMap::new();
    let flush = |fields: &mut std::collections::HashMap<String, String>,
                 result: &mut Vec<MemoryModule>| {
        let size = fields.get("Size").cloned().unwrap_or_default();
        if !size.is_empty() && !size.contains("No Module") {
            result.push(MemoryModule {
                locator: fields.get("Locator").cloned().unwrap_or_default(),
                bank: fields.get("Bank Locator").cloned().unwrap_or_default(),
                size,
                kind: fields.get("Type").cloned().unwrap_or_default(),
                speed: fields.get("Speed").cloned().unwrap_or_default(),
                manufacturer: fields.get("Manufacturer").cloned().unwrap_or_default(),
                part_number: fields.get("Part Number").cloned().unwrap_or_default(),
            });
        }
        fields.clear();
    };
    for line in text.lines() {
        let line = line.trim();
        if line == "Memory Device" {
            if module.is_some() {
                flush(&mut fields, &mut result);
            }
            module = Some(MemoryModule {
                locator: String::new(),
                bank: String::new(),
                size: String::new(),
                kind: String::new(),
                speed: String::new(),
                manufacturer: String::new(),
                part_number: String::new(),
            });
            continue;
        }
        if let Some((key, value)) = line.split_once(':') {
            let key = key.trim();
            if matches!(
                key,
                "Size"
                    | "Type"
                    | "Speed"
                    | "Manufacturer"
                    | "Part Number"
                    | "Locator"
                    | "Bank Locator"
            ) {
                fields.insert(key.to_string(), value.trim().to_string());
            }
        }
    }
    if module.is_some() {
        flush(&mut fields, &mut result);
    }
    result
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn memory_modules() -> Vec<MemoryModule> {
    Vec::new()
}

#[cfg(target_os = "linux")]
fn volume_layout() -> Vec<VolumeMetric> {
    let output = Command::new("lsblk")
        .args([
            "-J",
            "-b",
            "-o",
            "NAME,PATH,TYPE,SIZE,FSTYPE,MOUNTPOINT,MODEL,SERIAL,PKNAME,TRAN,ROTA,REV",
        ])
        .output();
    let Ok(output) = output else {
        return Vec::new();
    };
    if !output.status.success() {
        return Vec::new();
    }
    let Ok(json) = serde_json::from_slice::<serde_json::Value>(&output.stdout) else {
        return Vec::new();
    };
    let mut result = Vec::new();
    fn walk(items: &[serde_json::Value], parent: &str, result: &mut Vec<VolumeMetric>) {
        for item in items {
            let name = item["name"].as_str().unwrap_or_default().to_string();
            let kind = item["type"].as_str().unwrap_or_default().to_string();
            let path = item["path"].as_str().unwrap_or_default().to_string();
            let size = item["size"].as_u64().unwrap_or_else(|| {
                item["size"]
                    .as_str()
                    .and_then(|value| value.parse().ok())
                    .unwrap_or(0)
            });
            if !name.is_empty() {
                result.push(VolumeMetric {
                    name,
                    path,
                    kind,
                    size,
                    file_system: item["fstype"].as_str().unwrap_or_default().to_string(),
                    mount: item["mountpoint"].as_str().unwrap_or_default().to_string(),
                    model: item["model"]
                        .as_str()
                        .unwrap_or_default()
                        .trim()
                        .to_string(),
                    serial: item["serial"]
                        .as_str()
                        .unwrap_or_default()
                        .trim()
                        .to_string(),
                    parent: parent.to_string(),
                    transport: item["tran"].as_str().unwrap_or_default().to_string(),
                    rotational: item["rota"]
                        .as_bool()
                        .or_else(|| {
                            item["rota"]
                                .as_str()
                                .map(|value| value == "1" || value == "true")
                        })
                        .unwrap_or(false),
                    revision: item["rev"].as_str().unwrap_or_default().to_string(),
                });
            }
            if let Some(children) = item["children"].as_array() {
                walk(children, item["path"].as_str().unwrap_or_default(), result);
            }
        }
    }
    if let Some(items) = json["blockdevices"].as_array() {
        walk(items, "", &mut result);
    }
    result
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn volume_layout() -> Vec<VolumeMetric> {
    Vec::new()
}

fn disk_type_label(transport: &str, rotational: bool, model: &str) -> String {
    let lower = model.to_lowercase();
    if transport.eq_ignore_ascii_case("nvme") || lower.contains("nvme") {
        return "M.2 NVMe".to_string();
    }
    if lower.contains("msata") {
        return "mSATA".to_string();
    }
    if transport.eq_ignore_ascii_case("usb") {
        return "USB".to_string();
    }
    if transport.eq_ignore_ascii_case("sata") {
        return if rotational {
            "SATA HDD".to_string()
        } else {
            "SATA SSD".to_string()
        };
    }
    if rotational {
        "HDD".to_string()
    } else {
        "SSD".to_string()
    }
}

#[cfg(target_os = "linux")]
fn disk_health() -> Vec<DiskHealth> {
    let disks = volume_layout();
    let mut result = Vec::new();
    for disk in disks.iter().filter(|item| item.kind == "disk") {
        let output = Command::new("smartctl")
            .args(["-j", "-a", &disk.path])
            .output();
        let Ok(output) = output else {
            result.push(DiskHealth {
                device: disk.path.clone(),
                model: disk.model.clone(),
                serial: disk.serial.clone(),
                firmware: String::new(),
                health: "smartctl не установлен".to_string(),
                temperature_c: None,
                power_on_hours: None,
                reallocated_sectors: None,
                pending_sectors: None,
                uncorrectable_sectors: None,
                wear_percent: None,
                data_written_bytes: None,
                data_read_bytes: None,
                media_errors: None,
                note: "Установите smartmontools".to_string(),
                transport: disk.transport.clone(),
                rotational: disk.rotational,
                type_label: disk_type_label(&disk.transport, disk.rotational, &disk.model),
                attributes: Vec::new(),
            });
            continue;
        };
        let Ok(json) = serde_json::from_slice::<serde_json::Value>(&output.stdout) else {
            continue;
        };
        let passed = json["smart_status"]["passed"].as_bool();
        let health = match passed {
            Some(true) => "OK".to_string(),
            Some(false) => "FAILED".to_string(),
            None => "UNKNOWN".to_string(),
        };
        let mut reallocated = None;
        let mut pending = None;
        let mut uncorrectable = None;
        if let Some(table) = json["ata_smart_attributes"]["table"].as_array() {
            for attr in table {
                let id = attr["id"].as_u64().unwrap_or(0);
                let raw = attr["raw"]["value"].as_u64();
                match id {
                    5 => reallocated = raw,
                    197 => pending = raw,
                    198 => uncorrectable = raw,
                    _ => {}
                }
            }
        }
        let nvme = &json["nvme_smart_health_information_log"];
        let data_written = nvme["data_units_written"]
            .as_u64()
            .map(|value| value * 512_000);
        let data_read = nvme["data_units_read"]
            .as_u64()
            .map(|value| value * 512_000);
        let mut attributes = Vec::new();
        if let Some(table) = json["ata_smart_attributes"]["table"].as_array() {
            for attr in table {
                let id = attr["id"].as_u64().unwrap_or(0);
                let raw = attr["raw"]["string"]
                    .as_str()
                    .unwrap_or_default()
                    .to_string();
                attributes.push(SmartAttribute {
                    id,
                    name: attr["name"].as_str().unwrap_or_default().to_string(),
                    value: attr["value"].as_u64().unwrap_or(0),
                    worst: attr["worst"].as_u64().unwrap_or(0),
                    threshold: attr["thresh"].as_u64().unwrap_or(0),
                    raw,
                });
            }
        }
        result.push(DiskHealth {
            device: disk.path.clone(),
            model: json["model_name"]
                .as_str()
                .unwrap_or(&disk.model)
                .to_string(),
            serial: json["serial_number"]
                .as_str()
                .unwrap_or(&disk.serial)
                .to_string(),
            firmware: json["firmware_version"]
                .as_str()
                .unwrap_or_default()
                .to_string(),
            health,
            temperature_c: json["temperature"]["current"]
                .as_i64()
                .or_else(|| nvme["temperature"].as_i64()),
            power_on_hours: json["power_on_time"]["hours"]
                .as_u64()
                .or_else(|| nvme["power_on_hours"].as_u64()),
            reallocated_sectors: reallocated,
            pending_sectors: pending,
            uncorrectable_sectors: uncorrectable,
            wear_percent: nvme["percentage_used"].as_u64(),
            data_written_bytes: data_written,
            data_read_bytes: data_read,
            media_errors: nvme["media_errors"].as_u64(),
            note: String::new(),
            transport: disk.transport.clone(),
            rotational: disk.rotational,
            type_label: disk_type_label(&disk.transport, disk.rotational, &disk.model),
            attributes,
        });
    }
    result
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn disk_health() -> Vec<DiskHealth> {
    Vec::new()
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
    #[serde(rename = "sessionToken")]
    session_token: Option<String>,
    #[serde(rename = "bridgeCode")]
    bridge_code: String,
}

#[derive(Deserialize)]
struct ResumeResponse {
    #[serde(rename = "sessionToken")]
    session_token: Option<String>,
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

    let response = reqwest::blocking::Client::builder()
        .timeout(std::time::Duration::from_secs(12))
        .build()
        .map_err(|error| error.to_string())?
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
    if let Some(session_token) = &resume.session_token {
        let _ = entry()?.set_password(session_token);
    }
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

fn resume_or_login(app: AppHandle) {
    thread::spawn(move || {
        for _ in 0..10 {
            if resume_session(app.clone()).unwrap_or(false) {
                return;
            }

            thread::sleep(std::time::Duration::from_millis(500));
        }

        let _ = start_desktop_login(app);
    });
}

fn navigate_login(app: &AppHandle) {
    if let Some(window) = app.get_webview_window("main") {
        let _ = window.navigate(
            "https://streamhata.rdpctd.dev/login"
                .parse()
                .expect("valid login url"),
        );
    }
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
    navigate_login(&app);

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
            navigate_login(&app);
            return;
        };

        let response = reqwest::blocking::Client::new()
            .post("https://streamhata.rdpctd.dev/rgg-sync/desktop/exchange")
            .json(&serde_json::json!({ "code": code }))
            .send()
            .and_then(|response| response.error_for_status())
            .and_then(|response| response.json::<ExchangeResponse>());

        let Ok(exchange) = response else {
            navigate_login(&app);
            return;
        };

        let session_token = exchange.session_token.unwrap_or(exchange.refresh_token);
        if entry()
            .and_then(|entry| {
                entry
                    .set_password(&session_token)
                    .map_err(|error| error.to_string())
            })
            .is_err()
        {
            navigate_login(&app);
            return;
        }

        let bridge = format!(
            "https://streamhata.rdpctd.dev/rgg-sync/desktop/login?code={}",
            exchange.bridge_code
        );

        if let Some(window) = app.get_webview_window("main") {
            let _ = window.navigate(bridge.parse().expect("valid bridge url"));
            let _ = window.show();
            let _ = window.set_focus();
        }
    });

    Ok(())
}

async fn fetch_available_update(app: &AppHandle) -> Result<Option<Update>, String> {
    let update = app
        .updater()
        .map_err(|error| error.to_string())?
        .check()
        .await
        .map_err(|error| error.to_string())?;

    let Some(update) = update else {
        return Ok(None);
    };

    let response = reqwest::Client::new()
        .get(update.download_url.as_str())
        .header(reqwest::header::RANGE, "bytes=0-0")
        .timeout(std::time::Duration::from_secs(20))
        .send()
        .await;

    if !response
        .map(|response| response.status().is_success())
        .unwrap_or(false)
    {
        tracing::warn!(url = %update.download_url, "update artifact is not downloadable");
        return Ok(None);
    }

    Ok(Some(update))
}

#[derive(Clone, serde::Serialize)]
struct UpdateUiState {
    phase: String,
    version: Option<String>,
    downloaded: u64,
    total: u64,
    error: Option<String>,
}

fn set_update_ui(
    app: &AppHandle,
    phase: &str,
    version: Option<String>,
    downloaded: u64,
    total: u64,
    error: Option<String>,
) {
    let state = UpdateUiState {
        phase: phase.to_owned(),
        version: version.clone(),
        downloaded,
        total,
        error,
    };

    if let Ok(mut current) = UPDATE_UI_STATE.lock() {
        *current = state.clone();
    }

    let _ = app.emit("update-state", state);

    if let Ok(guard) = UPDATE_MENU_ITEM.lock() {
        if let Some(item) = guard.as_ref() {
            let (label, enabled) = match phase {
                "checking" => ("Проверяем обновление…".to_string(), false),
                "available" => (
                    format!("Доступно обновление {}", version.as_deref().unwrap_or("")),
                    true,
                ),
                "downloading" => ("Скачиваем обновление…".to_string(), false),
                "installing" => ("Установка обновления…".to_string(), false),
                "restarting" => ("Перезапуск…".to_string(), false),
                "error" => ("Ошибка обновления".to_string(), true),
                _ => ("Проверить обновление".to_string(), true),
            };
            let _ = item.set_text(label);
            let _ = item.set_enabled(enabled);
        }
    }
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
fn set_cat_tray(app: AppHandle, active: bool) {
    let Some(tray) = app.tray_by_id("main") else {
        return;
    };

    let icon = if active {
        image::load_from_memory(include_bytes!("../icons/cat.png"))
            .ok()
            .map(|image| {
                let image = image.to_rgba8();
                let (width, height) = image.dimensions();
                tauri::image::Image::new_owned(image.into_raw(), width, height)
            })
    } else {
        image::load_from_memory(include_bytes!("../icons/128x128.png"))
            .ok()
            .map(|image| {
                let image = image.to_rgba8();
                let (width, height) = image.dimensions();
                tauri::image::Image::new_owned(image.into_raw(), width, height)
            })
    };

    if let Some(icon) = icon {
        let _ = tray.set_icon(Some(icon));
    }
}

#[tauri::command]
fn notify_cat(app: AppHandle, stage: u8) {
    let hint = match stage {
        1 => "Кот заглянул: стрим всё ещё не запущен.",
        2 => "Кот уже приготовил лапу для кнопки «Начать стрим».",
        _ => "Кот состарился, ожидая стрим. Аудитория тоже.",
    };

    let _ = app
        .notification()
        .builder()
        .title("Кот StreamHata")
        .body(hint)
        .show();
}

#[tauri::command]
async fn save_text_file(name: String, text: String) -> Result<bool, String> {
    let path = tauri::async_runtime::spawn_blocking(move || {
        rfd::FileDialog::new().set_file_name(&name).save_file()
    })
    .await
    .map_err(|error| error.to_string())?;

    let Some(path) = path else {
        return Ok(false);
    };

    std::fs::write(path, text).map_err(|error| error.to_string())?;
    Ok(true)
}

#[tauri::command]
async fn obs_connect(url: String, password: String) -> Result<serde_json::Value, String> {
    obs::connect(url, password).await
}

#[tauri::command]
async fn obs_status() -> Result<serde_json::Value, String> {
    obs::status().await
}

#[tauri::command]
async fn obs_disconnect() {
    obs::disconnect().await;
}

#[tauri::command]
async fn obs_create_scene(scene: String) -> Result<serde_json::Value, String> {
    obs::create_scene(scene).await
}

#[tauri::command]
async fn obs_reorder_scene(scene: String, index: i64) -> Result<serde_json::Value, String> {
    obs::reorder_scene(scene, index).await
}

#[tauri::command]
async fn obs_scene(scene: String) -> Result<serde_json::Value, String> {
    obs::scene(scene).await
}

#[tauri::command]
async fn obs_mute(input: String) -> Result<serde_json::Value, String> {
    obs::mute(input).await
}

#[tauri::command]
async fn obs_output(output: String, action: String) -> Result<serde_json::Value, String> {
    obs::output(output, action).await
}

#[tauri::command]
fn update_ui_state() -> UpdateUiState {
    UPDATE_UI_STATE
        .lock()
        .map(|state| state.clone())
        .unwrap_or(UpdateUiState {
            phase: String::new(),
            version: None,
            downloaded: 0,
            total: 0,
            error: None,
        })
}

#[tauri::command]
fn app_version() -> String {
    APP_VERSION.to_owned()
}

fn show_update_notification(app: &AppHandle, version: &str) {
    let _ = UPDATE_NOTIFIED
        .lock()
        .map(|mut value| *value = Some(version.to_owned()));
    let _ = app
        .notification()
        .builder()
        .title(format!("Доступно обновление StreamHata {version}"))
        .body("Нажмите «Обновить», чтобы установить обновление.")
        .action_type_id("update-available")
        .show();
}

async fn download_update_bytes(app: &AppHandle, update: &Update) -> Result<Vec<u8>, String> {
    let primary = update.download_url.as_str().to_owned();
    let fallback = update
        .download_url
        .path_segments()
        .and_then(|mut segments| segments.next_back())
        .map(|name| format!("https://streamhata.rdpctd.dev/desktop/{name}"));

    let mut urls = vec![primary];

    if let Some(fallback) = fallback {
        urls.push(fallback);
    }

    let mut last_error = String::new();

    for (index, url) in urls.iter().enumerate() {
        let response = reqwest::Client::new()
            .get(url)
            .header(reqwest::header::ACCEPT, "application/octet-stream")
            .timeout(std::time::Duration::from_secs(180))
            .send()
            .await;

        let Ok(mut response) = response else {
            last_error = format!("{url}: request failed");
            continue;
        };

        if !response.status().is_success() {
            last_error = format!("{url}: HTTP {}", response.status());
            continue;
        }

        let total = response.content_length();
        let mut bytes = Vec::with_capacity(total.unwrap_or(0) as usize);

        loop {
            match response.chunk().await {
                Ok(Some(chunk)) => {
                    bytes.extend_from_slice(&chunk);
                    let _ = app.emit("update-progress", (bytes.len(), total));
                }
                Ok(None) => break,
                Err(error) => {
                    last_error = format!("{url}: {error}");
                    bytes.clear();
                    break;
                }
            }
        }

        if !bytes.is_empty() {
            if index > 0 {
                tracing::warn!(url, "downloaded update from fallback mirror");
            }

            return Ok(bytes);
        }
    }

    Err(last_error)
}

async fn install_update_now(app: AppHandle) -> Result<(), String> {
    if UPDATE_INSTALLING.swap(true, Ordering::SeqCst) {
        return Err("Установка уже выполняется".to_string());
    }

    let result = async {
        let update = fetch_available_update(&app)
            .await?
            .ok_or_else(|| "Обновлений нет".to_string())?;

        set_update_ui(&app, "downloading", None, 0, 0, None);
        let mut last_error = String::new();

        for attempt in 1..=3 {
            match download_update_bytes(&app, &update).await {
                Ok(bytes) => {
                    set_update_ui(&app, "installing", None, 0, 0, None);
                    update.install(bytes).map_err(|error| error.to_string())?;
                    set_update_ui(&app, "restarting", None, 0, 0, None);

                    return Ok(());
                }
                Err(error) => {
                    last_error = error;
                    tracing::warn!(attempt, error = %last_error, "update download failed");
                    if attempt < 3 {
                        std::thread::sleep(std::time::Duration::from_secs(2));
                    }
                }
            }
        }

        set_update_ui(&app, "error", None, 0, 0, Some(last_error.clone()));
        Err(format!("Не удалось скачать обновление: {last_error}"))
    }
    .await;

    if result.is_err() {
        UPDATE_INSTALLING.store(false, Ordering::SeqCst);
    }

    result
}

#[cfg(target_os = "linux")]
fn native_update_confirm(version: &str) -> bool {
    use gtk::prelude::*;

    let text =
        format!("Установить обновление StreamHata {version}? Приложение будет перезапущено.");
    let dialog = gtk::MessageDialog::new(
        None::<&gtk::Window>,
        gtk::DialogFlags::MODAL,
        gtk::MessageType::Question,
        gtk::ButtonsType::None,
        &text,
    );
    dialog.set_title("Обновление StreamHata");
    dialog.add_button("Установить", gtk::ResponseType::Accept);
    dialog.add_button("Отмена", gtk::ResponseType::Reject);
    dialog.show_all();
    dialog.present();
    let response = dialog.run();
    dialog.close();

    response == gtk::ResponseType::Accept
}

#[cfg(target_os = "windows")]
fn native_update_confirm(version: &str) -> bool {
    use windows::core::w;
    use windows::Win32::UI::Controls::{
        TaskDialogIndirect, TASKDIALOGCONFIG, TASKDIALOG_BUTTON, TDF_ALLOW_DIALOG_CANCELLATION,
        TDF_SIZE_TO_CONTENT,
    };

    let buttons = [
        TASKDIALOG_BUTTON {
            nButtonID: 300,
            pszButtonText: w!("Установить"),
        },
        TASKDIALOG_BUTTON {
            nButtonID: 301,
            pszButtonText: w!("Отмена"),
        },
    ];
    let text = HSTRING::from(format!(
        "Установить обновление StreamHata {version}? Приложение будет перезапущено."
    ));
    let config = TASKDIALOGCONFIG {
        cbSize: std::mem::size_of::<TASKDIALOGCONFIG>() as u32,
        dwFlags: TDF_ALLOW_DIALOG_CANCELLATION | TDF_SIZE_TO_CONTENT,
        pszWindowTitle: w!("Обновление StreamHata"),
        pszMainInstruction: w!("Установить обновление?"),
        pszContent: PCWSTR::from_raw(text.as_ptr()),
        cButtons: buttons.len() as u32,
        pButtons: buttons.as_ptr(),
        ..Default::default()
    };
    let mut button = 0;
    let _ = unsafe { TaskDialogIndirect(&config, Some(&mut button), None, None) };

    button == 300
}

#[cfg(not(any(target_os = "linux", target_os = "windows")))]
fn native_update_confirm(_version: &str) -> bool {
    false
}

fn start_update_poller(app: AppHandle) {
    thread::spawn(move || {
        thread::sleep(std::time::Duration::from_secs(15));

        loop {
            let handle = app.clone();

            tauri::async_runtime::block_on(async move {
                let _ = check_update(handle).await;
            });

            thread::sleep(std::time::Duration::from_secs(30 * 60));
        }
    });
}

fn register_update_actions(app: &AppHandle) {
    let action_type = ActionType::builder("update-available")
        .actions(vec![Action::builder("update", "Обновить").build()])
        .build();
    let _ = app.notification().register_action_types(vec![action_type]);

    let handle = app.clone();
    let _ = app.notification().on_action(move |action| {
        let app = handle.clone();
        let version = UPDATE_NOTIFIED
            .lock()
            .ok()
            .and_then(|value| value.clone())
            .unwrap_or_default();

        if action.action_id() == "update" {
            let dialog_app = app.clone();

            let _ = app.run_on_main_thread(move || {
                if native_update_confirm(&version) {
                    tauri::async_runtime::spawn(async move {
                        let _ = install_update_now(dialog_app).await;
                    });
                }
            });

            return;
        }

        if action.action_id() == "tap" {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
                let _ = window.unminimize();
                let _ = window.set_focus();
            }

            let _ = app.emit("update-available", version);
        }
    });
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
        show_update_notification(&app, &update.version);
    }

    Ok(Some(UpdateInfo {
        version: update.version,
        notes: update.body,
        date: update.date.map(|value| value.to_string()),
    }))
}

#[tauri::command]
async fn check_update_manual(app: AppHandle) -> Result<Option<UpdateInfo>, String> {
    let _ = app
        .notification()
        .builder()
        .title("Проверяем обновления StreamHata")
        .body("Проверяем наличие новой версии…")
        .show();

    set_update_ui(&app, "checking", None, 0, 0, None);
    let update = fetch_available_update(&app).await;

    let update = match update {
        Ok(update) => update,
        Err(error) => {
            set_update_ui(&app, "error", None, 0, 0, Some(error.clone()));
            let _ = app
                .notification()
                .builder()
                .title("Не удалось проверить обновление")
                .body(error.to_string())
                .show();

            return Err(error.to_string());
        }
    };

    let Some(update) = update else {
        set_update_ui(&app, "idle", None, 0, 0, None);
        let _ = app
            .notification()
            .builder()
            .title("Обновлений нет")
            .body("Установлена последняя версия StreamHata.")
            .show();

        return Ok(None);
    };

    set_update_ui(&app, "available", Some(update.version.clone()), 0, 0, None);
    show_update_notification(&app, &update.version);

    Ok(Some(UpdateInfo {
        version: update.version,
        notes: update.body,
        date: update.date.map(|value| value.to_string()),
    }))
}

#[tauri::command]
async fn install_update(app: AppHandle) -> Result<(), String> {
    install_update_now(app.clone()).await?;
    app.restart();
}

async fn tray_check_update(app: AppHandle) {
    set_update_ui(&app, "checking", None, 0, 0, None);
    let update = match fetch_available_update(&app).await {
        Ok(Some(update)) => update,
        Ok(None) => {
            set_update_ui(&app, "idle", None, 0, 0, None);
            let _ = app
                .notification()
                .builder()
                .title("Обновлений нет")
                .body("Установлена последняя версия StreamHata.")
                .show();
            return;
        }
        Err(error) => {
            set_update_ui(&app, "error", None, 0, 0, Some(error.clone()));
            let _ = app
                .notification()
                .builder()
                .title("Не удалось проверить обновление")
                .body(error)
                .show();
            return;
        }
    };

    let version = update.version.clone();
    set_update_ui(&app, "available", Some(version.clone()), 0, 0, None);
    show_update_notification(&app, &version);
    let _ = app.emit("update-available", version);

    if let Some(window) = app.get_webview_window("main") {
        let _ = window.show();
        let _ = window.unminimize();
        let _ = window.set_focus();
    }
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

            register_update_actions(app.handle());
            start_update_poller(app.handle().clone());
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

            resume_or_login(app.handle().clone());

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
            let cat = MenuItem::with_id(app, "cat", "Позвать кота", true, None::<&str>)?;
            let update = MenuItem::with_id(app, "update", "Проверить обновление", true, None::<&str>)?;
            let quit = MenuItem::with_id(app, "quit", "Выход", true, None::<&str>)?;
            let menu = Menu::with_items(app, &[&show, &system, &top, &hide, &cat, &update, &quit])?;
            *UPDATE_MENU_ITEM.lock().unwrap() = Some(update.clone());

            TrayIconBuilder::with_id("main")
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
                    "cat" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                        let _ = app.emit("cat-summon", ());
                    }
                    "update" => {
                        let app = app.clone();
                        tauri::async_runtime::spawn(async move {
                            tray_check_update(app).await;
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
            system_details,
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
            save_text_file,
            app_version,
            update_ui_state,
            set_cat_tray,
            notify_cat,
            hide_to_tray,
            check_update,
            check_update_manual,
            install_update,
            obs_connect,
            obs_status,
            obs_create_scene,
            obs_reorder_scene,
            obs_disconnect,
            obs_scene,
            obs_mute,
            obs_output
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
