# Rancho Doble — Costos y precios

Informe de costos, precios de venta y márgenes de los productos publicados en la
tienda. Actualizado al 11 de septiembre de 2026, con los costos nuevos y los
precios de venta nuevos.

| Archivo | Qué es |
|---|---|
| `Rancho_Doble_Costos_y_precios.pdf` | El informe listo para leer o mandar (5 páginas, A4) |
| `informe-costos.html` | La fuente del informe: acá se editan los números |
| `generar-pdf.sh` | Regenera el PDF a partir del HTML |

## Estado actual

| Producto | Costo | Precio | Margen $ | Margen % |
|---|---|---|---|---|
| Yerbera de Cuero de Chancho | $320 | $1.490 | $1.170 | **78,5%** |
| Mate Ranchero | $830 | $2.390 | $1.560 | **65,3%** |
| Bombilla de Alpaca | $380 | $890 | $510 | **57,3%** |
| Kit Matero Ranchero | $1.530 | $2.990 | $1.460 | **48,8%** |
| Bombacha de Campo (pack de 3) | $1.983 | $3.490 | $1.507 | **43,2%** |
| Boina de Hilo Pesada | sin cargar | $1.890 | — | — |

Margen bruto promedio ponderado: **55,2%** sobre los 5 productos con costo
conocido.

### Qué cambió respecto del informe original

**Costos** (primera actualización): mate $890 → $830, bombilla $480 → $380,
yerbera $390 → $320, bombacha pack de 3 sin cargar → $1.983 ($661 por unidad).
El kit se recalculó solo como la suma de sus tres piezas: $1.760 → $1.530.

**Precios de venta** (segunda actualización): kit $4.990 → $2.990,
bombilla $1.590 → $890, boina $2.490 → $1.890, mate $2.490 → $2.390. La yerbera
y la bombacha no se tocaron.

### Pendientes principales

- **Ni los costos ni los precios nuevos están cargados en Shopify.** Este informe
  los aplica, pero los reportes de Shopify siguen mostrando los valores viejos.
- **El Kit Matero Ranchero deja menos que el mate solo** ($1.460 contra $1.560),
  y regala $1.780 contra sus tres piezas sueltas.
- **Los packs de 2 y 3 quedaron desfasados.** Están armados como precio total
  fijo ($4.290 y $5.190) calculado sobre $2.490. Con la boina a $1.890, el pack
  de 2 cobra $510 más que dos boinas sueltas.
- **La boina sigue sin costo cargado**: es el único producto del que no se puede
  calcular el margen.

## Regenerar el PDF

```sh
./costos/generar-pdf.sh
```

Necesita Chromium (o Google Chrome) y Python 3. Si el navegador no está en una
ruta conocida, se le pasa a mano:

```sh
CHROME_BIN=/ruta/a/chrome ./costos/generar-pdf.sh
```

El script levanta un servidor HTTP local y le pide a Chromium que imprima desde
ahí en vez de abrir el archivo directo. No es un rodeo caprichoso: Chromium
bloquea las fuentes `@font-face` cargadas desde `file://` y, sin eso, el informe
sale con la serif del sistema en lugar de Cinzel, la tipografía de la marca
(ver [`../tipografia/`](../tipografia/)).

## Cambiar los números

Todo está en `informe-costos.html`, escrito a mano. **Los márgenes no se calculan
solos**: si se cambia un costo o un precio hay que actualizar también el margen
en pesos, el margen %, el markup, los escalones de descuento del producto, la
tabla resumen de la página 5 y el promedio ponderado de la portada.

Las fórmulas son:

- Margen bruto `$` = precio − costo
- Margen bruto `%` = (precio − costo) ÷ precio
- Markup = precio ÷ costo
- Promedio ponderado = suma de márgenes ÷ suma de precios, sobre los productos
  con costo conocido

**Los packs de 2 y 3 son precio total fijo**, no un descuento porcentual: si
cambia el precio unitario, el descuento en pesos cambia solo (y puede quedar
negativo, como pasó con el pack de 2 de la boina). El descuento se calcula como
precio unitario × cantidad − precio del pack.

Los importes son pesos uruguayos, tal como se cobran en el checkout: los seis
productos están marcados `taxable = false`, así que no se les suma ni se les
resta IVA.
