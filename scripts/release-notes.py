#!/usr/bin/env python3
import json
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

if len(sys.argv) != 2:
    sys.exit('usage: release-notes.py <tag>')

tag = sys.argv[1].removeprefix('v')
data = json.loads(Path('web/changelog.json').read_text(encoding='utf-8'))
entry = next((item for item in data if item.get('version') == tag), None)

if not entry:
    print(f'## StreamHata {tag}\n\nРелиз {tag}.')
    sys.exit(0)

print(f'## StreamHata {entry["version"]}')
print()
if entry.get('date'):
    print(f'_{entry["date"]}_')
    print()
for section in entry.get('sections', []):
    print(f'### {section.get("title", "")}')
    print()
    for item in section.get('items', []):
        line = f'- {item.get("text", "")}'
        if item.get('url'):
            line += f' ([{item.get("linkLabel", "commit")}]({item["url"]}))'
        print(line)
    print()
