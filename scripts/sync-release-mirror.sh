#!/usr/bin/env bash
set -euo pipefail

repo="${STREAMHATA_REPO:-Stream-Hata/streamhata-desktop}"
target="${STREAMHATA_MIRROR_DIR:-/var/www/streamhata/desktop}"
manifest_url="https://github.com/${repo}/releases/latest/download/latest.json"

mkdir -p "$target"
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

curl -fsSL --retry 4 --retry-delay 3 --max-time 60 "$manifest_url" -o "$work/latest.json"

read -r version artifact_url < <(python3 - "$work/latest.json" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
platforms = data.get("platforms") or {}
if not platforms:
    raise SystemExit("manifest has no platforms")
platform = next(iter(platforms.values()))
version = str(data.get("version") or "").strip()
url = str(platform.get("url") or "").strip()
if not version or not url:
    raise SystemExit("manifest has no version or url")
print(version, url)
PY
)

file=$(basename "${artifact_url%%\?*}")
case "$file" in
  *.AppImage|*.deb) ;;
  *) echo "unexpected artifact name: $file" >&2; exit 1 ;;
esac

if [[ ! -s "$target/$file" ]]; then
  echo "downloading $file"
  curl -fsSL --retry 6 --retry-delay 5 --retry-all-errors --max-time 1800 "$artifact_url" -o "$work/$file"
  size=$(stat -c %s "$work/$file")
  if (( size < 1000000 )); then
    echo "artifact too small: $size bytes" >&2
    exit 1
  fi
  install -m 644 "$work/$file" "$target/$file"
fi

install -m 644 "$work/latest.json" "$target/latest.json"
echo "mirror ready: $version ($file)"
