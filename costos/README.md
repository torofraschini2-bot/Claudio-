# Rancho Doble — Costos y precios

Informe de costos, precios de venta y márgenes de los productos publicados en la
tienda. Actualizado con los costos nuevos del 11 de septiembre de 2026.

| Archivo | Qué es |
|---|---|
| `Rancho_Doble_Costos_y_precios.pdf` | El informe listo para leer o mandar (5 páginas, A4) |
| `informe-costos.html` | La fuente del informe: acá se editan los números |
| `generar-pdf.sh` | Regenera el PDF a partir del HTML |

## Costos que se actualizaron

| Producto | Costo anterior | Costo nuevo |
|---|---|---|
| Mate Ranchero | $890 | **$830** |
| Bombilla de Alpaca | $480 | **$380** |
| Yerbera de Cuero de Chancho | $390 | **$320** |
| Bombacha de Campo — pack de 3 | sin cargar | **$1.983** ($661 por unidad) |
| Kit Matero Ranchero | $1.760 | **$1.530** (recalculado: $830 + $320 + $380) |
| Boina de Hilo Pesada | sin cargar | sigue sin cargar |

Los precios de venta no se tocaron: son los que están cargados en Shopify. El
costo del kit no es un dato nuevo sino la suma de sus tres piezas, así que se
recalculó solo.

**Los costos nuevos todavía no están cargados en Shopify.** Este informe los
aplica, pero los reportes de Shopify van a seguir mostrando los márgenes viejos
hasta que se carguen.

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
solos**: si se cambia un costo hay que actualizar también el margen en pesos, el
margen %, el markup, los escalones de descuento del producto, la tabla resumen de
la página 5 y el promedio ponderado de la portada.

Las fórmulas son:

- Margen bruto `$` = precio − costo
- Margen bruto `%` = (precio − costo) ÷ precio
- Markup = precio ÷ costo
- Promedio ponderado = suma de márgenes ÷ suma de precios, sobre los productos
  con costo conocido

Los importes son pesos uruguayos, tal como se cobran en el checkout: los seis
productos están marcados `taxable = false`, así que no se les suma ni se les
resta IVA.
