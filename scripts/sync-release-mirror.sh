#!/usr/bin/env bash
set -euo pipefail

repo="${STREAMHATA_REPO:-Stream-Hata/streamhata-desktop}"
target="${STREAMHATA_MIRROR_DIR:-/var/www/streamhata/desktop}"
release_api="https://api.github.com/repos/${repo}/releases/latest"

mkdir -p "$target"
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

curl -fsSL --retry 4 --retry-delay 3 --max-time 60 "$release_api" -o "$work/release.json"
manifest_url=$(python3 - "$work/release.json" "$repo" <<'PY'
import json, sys
release = json.load(open(sys.argv[1], encoding='utf-8'))
tag = str(release.get('tag_name') or '').strip()
assets = release.get('assets') or []
manifest = next((asset.get('browser_download_url') for asset in assets if asset.get('name') == 'latest.json'), '')
if not tag or not manifest:
    raise SystemExit('latest GitHub release has no tag or latest.json asset')
expected = f"https://github.com/{sys.argv[2]}/releases/download/{tag}/latest.json"
if manifest != expected:
    raise SystemExit(f'unexpected latest.json URL: {manifest}')
print(manifest)
PY
)
curl -fsSL --retry 4 --retry-delay 3 --max-time 60 "$manifest_url" -o "$work/latest.json"

python3 - "$work/latest.json" "$target" "$work" <<'PY'
import json
import os
import subprocess
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse

manifest_path, target_path, work_path = map(Path, sys.argv[1:])
target = target_path
work = work_path
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
version = str(manifest.get('version') or '').strip()
platforms = manifest.get('platforms') or {}
if not version or not platforms:
    raise SystemExit('manifest has no version or platforms')

allowed = ('.AppImage', '-setup.exe')
for platform, entry in platforms.items():
    url = str(entry.get('url') or '').strip()
    parsed = urlparse(url)
    filename = unquote(Path(parsed.path).name)
    if parsed.scheme != 'https' or not filename.endswith(allowed):
        raise SystemExit(f'unexpected updater artifact for {platform}: {url}')
    local_url = f'https://ru.streamhata.rdpctd.dev/desktop/{filename}'
    if not (target / filename).is_file():
        print(f'downloading {platform}: {filename}', flush=True)
        temp = work / filename
        subprocess.run([
            'curl', '-fsSL', '--retry', '6', '--retry-delay', '5',
            '--retry-all-errors', '--max-time', '1800', url, '-o', str(temp)
        ], check=True)
        if temp.stat().st_size < 1_000_000:
            raise SystemExit(f'artifact too small: {filename}')
        os.chmod(temp, 0o644)
        temp.replace(target / filename)
    entry['url'] = local_url

output = work / 'latest.mirror.json'
output.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
os.chmod(output, 0o644)
output.replace(target / 'latest.json')
print(f'mirror ready: {version} ({len(platforms)} platforms)')
PY
