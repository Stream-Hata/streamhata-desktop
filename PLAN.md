# Desktop implementation plan

## Stage 0 — Tauri shell (done)

- Tauri 2 workspace in `src-tauri/`.
- Window opens the existing StreamHata panel.
- Keychain commands: `session_status`, `save_session`, `clear_session`.
- Placeholder local `web/index.html` for Tauri build.
- RGBA icons and default capability set.
- `cargo build` passes.

## Stage 1 — Desktop auth

1. Add backend `POST /rgg-sync/desktop/code`:
   - requires the normal Twitch session cookie;
   - creates a one-time code with 60–120 s TTL;
   - returns `{ code }`.
2. Add backend `POST /rgg-sync/desktop/exchange`:
   - accepts `{ code }`;
   - returns short-lived access token + refresh token for the desktop device;
   - stores a hashed refresh token and device metadata.
3. Add Angular public page `/desktop-auth`:
   - after web OAuth, calls `/desktop/code`;
   - opens `streamhata://auth?code=...`.
4. Tauri deep link handler:
   - receives `streamhata://auth?code=...`;
   - exchanges code via Rust `reqwest`;
   - stores refresh token in OS keychain;
   - never writes tokens to files/localStorage.
5. Revoke device endpoint + UI list.

## Stage 2 — Local bundle

- Build Angular into Tauri `frontendDist`.
- Add API base interceptor for `tauri://` origin.
- Replace cookie auth with bearer access token in Tauri.
- Keep public pages and OBS overlays remote.
- Add CSP and capability allowlist.

## Stage 3 — Feature migration

Order: dashboard → profile/Steam → games → hotbar → widgets → OBS → chat/jury → points → roulette/wheel → music → donations → admin links.

Each feature is a separate Rust command/module or Angular feature behind a flag. The web panel stays available until parity.

## Stage 4 — Release

- Updater plugin and signing key are wired (`check_updates` command, pubkey in
  `tauri.conf.json`); publish `/desktop/latest.json` after the first signed build.
- Signed auto-updater and rollback.
- Windows/macOS/Linux packaging and code signing.
- Crash/log collection opt-in.
- Security review: no secrets in client, no remote-content IPC, keychain only.

## Non-goals

- Rewriting the Go backend.
- Replacing OBS overlays with native windows.
- Hardcoding API keys or OAuth secrets.
