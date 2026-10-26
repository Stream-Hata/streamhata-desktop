#!/usr/bin/env python3
import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote

parser = argparse.ArgumentParser()
parser.add_argument('--version', required=True)
parser.add_argument('--tag', required=True)
parser.add_argument('--repo', required=True)
parser.add_argument('--platform', required=True)
parser.add_argument('--artifact', required=True)
parser.add_argument('--signature', required=True)
parser.add_argument('--output', default='latest.json')
args = parser.parse_args()

artifact = Path(args.artifact)
signature = Path(args.signature).read_text().strip()
if not artifact.is_file():
    sys.exit(f'artifact not found: {artifact}')
if not signature:
    sys.exit('empty signature')

asset = quote(artifact.name)
url = f'https://github.com/{args.repo}/releases/download/{quote(args.tag)}/{asset}'
manifest = {
    'version': args.version,
    'notes': f'StreamHata {args.version}',
    'pub_date': datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z'),
    'platforms': {
        args.platform: {
            'signature': signature,
            'url': url,
        }
    },
}
Path(args.output).write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print(f'wrote {args.output}: {args.platform} {args.version}')
