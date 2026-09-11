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

render45() { # archivo — misma pieza, lienzo vertical 4:5
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 --default-background-color=00000000 \
    --virtual-time-budget=6000 --window-size="1080,1350" \
    --screenshot="$BASE/salida/${1%.html}-4x5.png" \
    "file://$BASE/piezas/$1?f=45" >/dev/null 2>&1
  echo "  salida/${1%.html}-4x5.png  (1080x1350)"
}
mkdir -p "$BASE/salida"
render 01-como-comprar.html            1080 1920
render 02-compra-en-la-web.html        1080 1080
render 03-destacada-envios.html        1080 1920
render 04-destacada-web.html           1080 1920
render 05-envios-a-todo-el-pais.html   1080 1920
render 06-destacada-pagos.html         1080 1920
render 07-compra-por-mensaje.html      1080 1080
render 08-te-lo-llevamos.html          1080 1080

# Los tres posteos de feed, también en 4:5
render45 02-compra-en-la-web.html
render45 07-compra-por-mensaje.html
render45 08-te-lo-llevamos.html
