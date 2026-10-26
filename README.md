# Nameless StreamHata Desktop

Desktop-клиент StreamHata на Tauri 2. Загружает панель в системном WebView и добавляет нативные функции: трей, keychain, уведомления, splash, нативные диалоги, системный виджет и обновления.

Репозиторий: `https://github.com/Stream-Hata/streamhata-desktop`

## Возможности

- Вход через системный браузер с одноразовым кодом.
- Токен сессии хранится в OS keychain.
- Закрытие окна сворачивает приложение в трей.
- Окно «Что нового» и пользовательское соглашение перед запуском.
- Системные уведомления Twitch-событий.
- Локальный виджет CPU/GPU/памяти/сети и OBS-оверлей.
- OTA-обновления.
- Windows/Linux сборка.

## Сборка

Требуется Rust и зависимости Tauri.

```bash
cargo build --release
```

Linux: WebKitGTK 4.1. Windows: WebView2 и MSVC.

## Подпись и обновления

Публичный ключ updater — в `src-tauri/tauri.conf.json`. Приватный ключ хранится вне репозитория:

```text
~/.config/nameless-streamhata/updater.key
```

Переменные для сборки обновления:

```bash
export TAURI_SIGNING_PRIVATE_KEY_PATH="$HOME/.config/nameless-streamhata/updater.key"
export TAURI_SIGNING_PRIVATE_KEY_PASSWORD=""
```

Windows Authenticode-подпись настраивается отдельно (SignPath/Azure Trusted Signing) и не заменяет updater-ключ.

## CI

- `.github/workflows/build-windows.yml` — сборка MSI/NSIS и updater-артефактов.
- Для подписи добавьте GitHub Secrets:
  - `TAURI_SIGNING_PRIVATE_KEY`
  - `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`

## Структура

```text
src-tauri/src/lib.rs   # окно, трей, keychain, уведомления, системные метрики
src-tauri/tauri.conf.json
web/index.html         # локальная страница входа
web/changelog.html     # changelog
web/terms.txt          # пользовательское соглашение
web/system-overlay.html
```
