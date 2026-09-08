# Rancho Doble — Tipografía

Archivos de la tipografía de la marca, tomados del bordado de la bolsa trasera
(`referencia-bordado.jpg`).

## Contenido

| Archivo | Qué es |
|---|---|
| `fuentes/Cinzel-VariableFont_wght.ttf` | Fuente para instalar en la computadora (Illustrator, Word, bordadora, etc.) |
| `fuentes/Cinzel-latin.woff2`, `fuentes/Cinzel-latin-ext.woff2` | Misma fuente en formato web |
| `fuentes/OFL-Cinzel.txt` | Licencia SIL Open Font License 1.1 |
| `tipografia.css` | Variables, clases y paleta listas para usar en web |
| `muestra.html` | Muestrario visual: logotipo sobre las cinco telas, escala, abecedario, paleta |
| `referencia-bordado.jpg` | Foto original de referencia |

## Identificación del tipo

El bordado usa un **serif grabado en versales (mayúsculas)**, de la familia
Copperplate / Engravers: astas de contraste suave, serifas finas y planas, e
interletrado ancho. Los tipos comerciales de ese estilo son *Engravers MT*,
*Copperplate Gothic* y *Trajan Pro*; no es posible confirmar cuál se digitalizó
para la bordadora a partir de la foto.

Como equivalente **libre y redistribuible** se incluye **Cinzel** (SIL OFL 1.1),
que reproduce el mismo carácter grabado en versales y se puede usar en web,
impresión y merchandising sin pagar licencia.

Si más adelante se consigue el archivo original de la bordadora (`.dst`, `.emb`,
`.pes`), colocarlo también en `fuentes/` para que producción y diseño trabajen
con la misma fuente.

## Rasgos del logotipo

- Siempre en **versales**: `RANCHO DOBLE`, nunca en minúsculas.
- **Interletrado ancho**: `0.14em` (`0.18em` por debajo de 14 px, para que no se
  cierre a tamaño chico).
- **Peso 600**. En bordado sobre tela oscura el hilo engorda ópticamente; en
  digital el peso 600 iguala esa presencia.
- Una sola línea. Si el espacio no da, reducir tamaño antes que partir en dos.

**Ojo:** Cinzel es una fuente de versales, no tiene minúsculas reales (las
convierte en versalitas). Sirve para el logotipo, títulos y subtítulos; el texto
corrido va en un serif de lectura (Georgia en el CSS, variable `--rd-font-texto`).

## Paleta (muestreada de las telas)

| Color | HEX | RGB |
|---|---|---|
| azul marino | `#2E2E43` | 46, 46, 67 |
| beige | `#A59486` | 165, 148, 134 |
| gris | `#46464D` | 70, 70, 77 |
| negro | `#252628` | 37, 38, 40 |
| verde | `#425249` | 66, 82, 73 |
| hilo plata | `#D9D9DE` | 217, 217, 222 |
| hilo tono sobre tono (beige) | `#8C7B6D` | 140, 123, 109 |

Sobre las cuatro telas oscuras el bordado va en hilo plata; sobre beige va tono
sobre tono.

## Uso en web

```html
<link rel="stylesheet" href="tipografia/tipografia.css">

<span class="rd-marca rd-marca--l rd-marca--hilo">Rancho Doble</span>
```

Abrir `muestra.html` en el navegador para ver todo aplicado.

## Instalar la fuente en la computadora

- **Windows**: clic derecho en `Cinzel-VariableFont_wght.ttf` → *Instalar*.
- **macOS**: doble clic en el archivo → *Instalar fuente*.
- **Linux**: copiar a `~/.local/share/fonts/` y correr `fc-cache -f`.

## Licencia

Cinzel se distribuye bajo la SIL Open Font License 1.1 (`fuentes/OFL-Cinzel.txt`):
uso libre comercial y personal, se puede incrustar y modificar; no se puede
vender la fuente por sí sola.
