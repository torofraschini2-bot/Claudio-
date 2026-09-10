# Etiquetas de cuero — Rancho Doble

Mockups de la etiqueta grabada de la marca en los **tres cueros de la muestra de
colores**, uno por imagen.

## Las imágenes

| Archivo | Color | Cuero (HEX) | Grabado (HEX) |
|---|---|---|---|
| `salida/etiqueta-1-crudo.png` | 1 · crudo / hueso | `#E2D2AB` | `#6B4F27` |
| `salida/etiqueta-2-camel.png` | 2 · camel | `#C08B54` | `#4E2F13` |
| `salida/etiqueta-3-suela.png` | 3 · suela / terracota | `#B45327` | `#3E1809` |

Cada PNG mide 2400 × 2400 px (1200 css px a 2×), sirve para catálogo, redes y
para mandarle la referencia al proveedor del grabado láser.

Los HEX de la tabla son el color medido del cuero en el render. En la plantilla
la variable `--cuero` lleva un valor un poco más saturado, porque las capas de
grano y veteado aclaran el tono al mezclarse.

## El logotipo

- **Marca**: el arco con patas, la cruz centrada y la barra de base, calcados de
  la etiqueta de la bolsa (`../tipografia/referencia-bordado.jpg` y la foto del
  neceser azul). Está dibujada como SVG dentro de `etiqueta.html`, así que se
  puede escalar o exportar sin pérdida.
- **Tipografía**: **Cormorant Garamond** (SIL OFL 1.1, en `fuentes/`), en caja
  alta y baja como en la etiqueta original. Ojo: no es la Cinzel de
  `../tipografia/`, que es una fuente de versales y se usa para el logotipo
  bordado en versales; acá hace falta un serif con minúsculas reales.

## Regenerar las imágenes

```bash
cd etiquetas
npm install playwright   # una sola vez
node generar.mjs
```

`generar.mjs` abre `etiqueta.html` en Chromium, le pasa cada color y guarda los
PNG en `salida/`.

## Cambiar cosas

Todo está en `etiqueta.html`:

- **Colores**: las variables `--cuero`, `--quemado` y `--canto` en `:root`
  (color 1) y en los bloques `body[data-color="2"]` y `body[data-color="3"]`.
- **Tamaño del logotipo**: `.marca { width }` para el símbolo y
  `.palabra { font-size }` para el texto.
- **Textura del cuero**: los filtros SVG `#grano` (flor picada) y `#veta`
  (manchas grandes del curtido) al final del archivo.
- **Formato de la etiqueta**: `.etiqueta { width, height, border-radius }`.
  Para una etiqueta rectangular como la del neceser, cambiar el alto y poner el
  logotipo en una sola línea (`flex-direction: row`).

## Licencia de la fuente

Cormorant Garamond se distribuye bajo la SIL Open Font License 1.1
(`fuentes/OFL-CormorantGaramond.txt`): uso comercial libre, se puede incrustar y
modificar, no se puede vender la fuente por sí sola.
