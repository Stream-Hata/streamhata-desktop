#!/usr/bin/env python3
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote

if len(sys.argv) != 4:
    sys.exit('usage: merge-latest.py <version> <tag> <artifact-directory>')

version, tag, artifact_dir = sys.argv[1:]
repo = os.environ.get('GITHUB_REPOSITORY', '').strip()
if not repo or '/' not in repo:
    sys.exit('GITHUB_REPOSITORY is missing or invalid')

root = Path(artifact_dir)
def make_platform(platform: str, pattern: str) -> dict:
    artifacts = sorted(root.glob(pattern))
    if len(artifacts) != 1:
        sys.exit(f'expected exactly one {pattern}, found {len(artifacts)}')
    artifact = artifacts[0]
    signature_file = Path(f'{artifact}.sig')
    if not signature_file.is_file():
        sys.exit(f'missing updater signature: {signature_file}')
    signature = signature_file.read_text(encoding='utf-8').strip()
    if not signature:
        sys.exit(f'empty updater signature: {signature_file}')
    url = f'https://github.com/{repo}/releases/download/{quote(tag)}/{quote(artifact.name)}'
    return platform, {'signature': signature, 'url': url}

platforms = dict([
    make_platform('linux-x86_64', '*.AppImage'),
    make_platform('windows-x86_64', '*-setup.exe'),
])
manifest = {
    'version': version,
    'notes': f'StreamHata {version}',
    'pub_date': datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z'),
    'platforms': platforms,
}
Path('latest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print('generated updater manifest for: ' + ', '.join(platforms))
