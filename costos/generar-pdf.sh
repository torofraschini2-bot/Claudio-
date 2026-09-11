#!/usr/bin/env bash
# Genera Rancho_Doble_Costos_y_precios.pdf a partir de informe-costos.html.
# Requiere Chromium (o Google Chrome) y Python 3.
#
# Se imprime a través de un servidor HTTP local en vez de abrir el archivo
# directo: Chromium bloquea las fuentes @font-face cargadas desde file:// (las
# trata como de origen opaco), y sin eso el informe sale con la serif de
# sistema en lugar de Cinzel, la tipografía de la marca.
set -euo pipefail

AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RAIZ="$(dirname "$AQUI")"
SALIDA="$AQUI/Rancho_Doble_Costos_y_precios.pdf"
PUERTO="${PUERTO:-8731}"

CHROME=""
for c in "${CHROME_BIN:-}" \
         /opt/pw-browsers/chromium-*/chrome-linux/chrome \
         "$(command -v chromium || true)" \
         "$(command -v chromium-browser || true)" \
         "$(command -v google-chrome || true)"; do
  [ -n "$c" ] && [ -x "$c" ] && { CHROME="$c"; break; }
done
[ -n "$CHROME" ] || { echo "No se encontró Chromium/Chrome (probá CHROME_BIN=...)" >&2; exit 1; }

python3 -m http.server "$PUERTO" --bind 127.0.0.1 --directory "$RAIZ" >/dev/null 2>&1 &
SERVIDOR=$!
trap 'kill "$SERVIDOR" 2>/dev/null || true' EXIT

for _ in $(seq 1 50); do
  if python3 -c "import socket,sys; s=socket.socket(); sys.exit(s.connect_ex(('127.0.0.1',$PUERTO)))" 2>/dev/null; then
    break
  fi
  sleep 0.1
done

"$CHROME" --headless --disable-gpu --no-sandbox \
  --virtual-time-budget=15000 \
  --no-pdf-header-footer \
  --print-to-pdf="$SALIDA" \
  "http://127.0.0.1:$PUERTO/costos/informe-costos.html" 2>/dev/null

echo "PDF generado: $SALIDA"
