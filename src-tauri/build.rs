fn main() {
    tauri_build::try_build(tauri_build::Attributes::new().app_manifest(
        tauri_build::AppManifest::new().commands(&[
            "session_status",
            "save_session",
            "clear_session",
            "system_metrics",
            "system_widget_enabled",
            "set_system_widget_enabled",
            "system_overlay_url",
            "open_system_window",
            "resume_session",
            "start_desktop_login",
            "show_splash",
            "open_changelog",
            "finish_changelog",
            "get_onboarding_state",
            "clear_virus_mode",
            "restart_app",
            "app_version",
            "hide_to_tray",
            "check_update",
            "check_update_manual",
            "install_update",
        ]),
    ))
    .expect("failed to run tauri-build");
}
