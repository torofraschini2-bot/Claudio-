# Dulce Piel — Piezas de Instagram

Las mismas cinco piezas de Rancho Doble, rehechas con identidad propia de
Dulce Piel: otro logotipo, otra paleta y otras tipografías, con la misma
estructura y jerarquía de información.

## Piezas

| Archivo | Medida | Qué es |
|---|---|---|
| `salida/01-como-comprar.png` | 1080×1920 | Historia "Cómo comprar" (web + envío + medios de pago + WhatsApp) |
| `salida/02-compra-en-la-web.png` | 1080×1080 | Posteo de feed "Comprá en la web" |
| `salida/03-destacada-envios.png` | 1080×1920 | Portada de destacada: envíos |
| `salida/04-destacada-web.png` | 1080×1920 | Portada de destacada: web |
| `salida/05-envios-a-todo-el-pais.png` | 1080×1920 | Historia "Envíos a todo el país" |

Los HTML que las generan están en `piezas/`. Para volver a exportarlas después
de tocar un texto o un color:

```bash
./render.sh
```

Usa el Chromium que ya viene instalado; si está en otra ruta:
`CHROME=/ruta/al/chrome ./render.sh`.

## Datos que aparecen en las piezas

- Web: **dulcepieluruguay.com**
- WhatsApp: **092 722 531** (`+598 92 722 531` en la historia de "Cómo comprar")
- Envíos: DAC y Correo, 24 a 48 hs, a todo el país
- Medios de pago: transferencia bancaria, Mercado Pago o depósito en red de cobranza

## Paleta

| Color | HEX | Dónde se usa |
|---|---|---|
| cacao | `#2E1E19` | texto sobre claro, píldora oscura del feed |
| cacao hondo | `#170F0D` | fondo de las portadas de destacadas |
| rosewood | `#55332C` | base de los degradados |
| rosa | `#9C5F51` | color principal: disco de las destacadas, "24 a 48 horas" |
| rosa suave | `#D9A695` | brillos del fondo, rama botánica inferior |
| nude | `#E8CBBA` | iconos y bajadas sobre fondo oscuro |
| crema | `#F7EDE5` | texto sobre oscuro |
| crema tibia | `#FBF5EF` | fondo del feed, píldoras y tarjeta |
| dorado | `#C9A87C` | anillo de las destacadas, rombos y filetes |
| salvia | `#A7B3A2` | rama botánica superior |

## Tipografías

Las tres son de Google Fonts (SIL Open Font License 1.1) y están incluidas en
`fuentes/` en `.woff2`, así que las piezas se renderizan igual sin conexión.

- **Cormorant Garamond** — logotipo `DULCE PIEL`, en versales con interletrado
  de `0.42em`.
- **Playfair Display** — títulos ("CÓMO COMPRAR", "ENVÍOS A TODO EL PAÍS" y el
  "EN LA WEB" en itálica del feed).
- **Poppins** — todo el texto de lectura, rótulos y números.

## Cómo cambiar cosas

- **Colores**: `marca.css`, bloque `:root`. Cambiar una variable cambia las
  cinco piezas.
- **Logotipo**: `marca.js`, constante `ISOTIPO`. El isotipo actual (gota sobre
  hojas con filete) es un dibujo hecho para estas piezas; si existe el archivo
  original de la marca, se pega ese SVG ahí y se propaga solo.
- **Textos y teléfono**: están escritos en cada HTML de `piezas/`, en texto
  plano.
