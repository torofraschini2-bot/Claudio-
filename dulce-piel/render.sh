#!/usr/bin/env bash
# Renderiza cada pieza a PNG en su medida nativa de Instagram.
set -euo pipefail
CHROME=${CHROME:-/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell}
BASE="$(cd "$(dirname "$0")" && pwd)"
render() { # archivo ancho alto
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 --default-background-color=00000000 \
    --virtual-time-budget=6000 --window-size="$2,$3" \
    --screenshot="$BASE/salida/${1%.html}.png" \
    "file://$BASE/piezas/$1" >/dev/null 2>&1
  echo "  salida/${1%.html}.png  (${2}x${3})"
}
mkdir -p "$BASE/salida"
render 01-como-comprar.html            1080 1920
render 02-compra-en-la-web.html        1080 1080
render 03-destacada-envios.html        1080 1920
render 04-destacada-web.html           1080 1920
render 05-envios-a-todo-el-pais.html   1080 1920
