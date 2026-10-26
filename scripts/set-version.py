#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

if len(sys.argv) != 2:
    sys.exit('usage: set-version.py <version>')

version = sys.argv[1].strip().removeprefix('v')
if not version:
    sys.exit('empty version')

config = Path('src-tauri/tauri.conf.json')
data = json.loads(config.read_text())
data['version'] = version
config.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')

cargo = Path('src-tauri/Cargo.toml')
text = cargo.read_text()
text, count = re.subn(r'(?m)^version\s*=\s*"[^"]+"', f'version = "{version}"', text, count=1)
if count != 1:
    sys.exit('could not update src-tauri/Cargo.toml version')
cargo.write_text(text)
print(f'desktop version set to {version}')
