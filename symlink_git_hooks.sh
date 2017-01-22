#/bin/bash
set -e

ln -s -f .hooks/* .git/hooks/
chmod +x .git/hooks/*