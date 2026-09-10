// Renderiza etiqueta.html en los tres cueros de la muestra y guarda los PNG.
// Uso: node generar.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const plantilla = 'file://' + path.join(aqui, 'etiqueta.html');

const colores = [
  { n: '1', nombre: 'crudo' },
  { n: '2', nombre: 'camel' },
  { n: '3', nombre: 'suela' },
];

const navegador = await chromium.launch();
const pagina = await navegador.newPage({
  viewport: { width: 1200, height: 1200 },
  deviceScaleFactor: 2,
});

for (const { n, nombre } of colores) {
  await pagina.goto(plantilla);
  await pagina.evaluate((c) => document.body.dataset.color = c, n);
  await pagina.evaluate(() => document.fonts.ready);
  const destino = path.join(aqui, 'salida', `etiqueta-${n}-${nombre}.png`);
  await pagina.screenshot({ path: destino });
  console.log('✓', path.relative(aqui, destino));
}

await navegador.close();
