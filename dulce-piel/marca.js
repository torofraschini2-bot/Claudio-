/* ==========================================================================
   DULCE PIEL — Iconografía
   --------------------------------------------------------------------------
   Un solo lugar para los iconos: cada pieza los pide con
   <i data-dp="camion"></i> y este script los dibuja.
   El logotipo es sólo tipográfico (la palabra DULCE PIEL, clase .dp-marca en
   marca.css): no lleva isotipo.
   ========================================================================== */
(function () {
  var ICONOS = {
    /* Globo terráqueo con cursor: "entrá a la web" */
    globo: `
      <svg viewBox="0 0 72 72" fill="none" stroke="currentColor"
           stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="33" cy="33" r="25"/>
        <ellipse cx="33" cy="33" rx="11" ry="25"/>
        <path d="M8 33h50M13 19h40M13 47h34"/>
        <path d="M44 44l22 9-9.5 3.3L53 66z" fill="currentColor" stroke-width="6"
              stroke="var(--dp-cursor-borde, #2E1E19)"/>
      </svg>`,

    /* Globo simple para portada de destacada */
    globoSimple: `
      <svg viewBox="0 0 72 72" fill="none" stroke="currentColor"
           stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="36" cy="36" r="26"/>
        <ellipse cx="36" cy="36" rx="11.5" ry="26"/>
        <path d="M10 36h52"/>
      </svg>`,

    /* Camión con líneas de velocidad: envíos */
    camion: `
      <svg viewBox="0 0 78 50" fill="none" stroke="currentColor"
           stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 15h9M2 24.5h16M2 34h9"/>
        <rect x="22" y="9" width="27" height="26" rx="2.5"/>
        <path d="M49 18h10.5L69 27.5V35H49z"/>
        <circle cx="32" cy="41" r="5.2"/>
        <circle cx="58" cy="41" r="5.2"/>
      </svg>`,

    /* Tarjeta: medios de pago */
    tarjeta: `
      <svg viewBox="0 0 68 48" fill="none" stroke="currentColor"
           stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="6" width="62" height="38" rx="6"/>
        <path d="M3 18h62"/>
        <path d="M13 33h13"/>
        <circle cx="53" cy="33" r="5"/>
      </svg>`,

    /* Escudo con tilde: compra confiable */
    escudo: `
      <svg viewBox="0 0 58 66" fill="none" stroke="currentColor"
           stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M29 3 5 12.5v20C5 47 15 57.5 29 63c14-5.5 24-16 24-30.5v-20L29 3z"/>
        <path d="M18.5 32.5 26 40.5 40 25.5"/>
      </svg>`,

    /* Candado: pago protegido */
    candado: `
      <svg viewBox="0 0 56 66" fill="none" stroke="currentColor"
           stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="28" width="44" height="34" rx="7"/>
        <path d="M16.5 28v-8.5a11.5 11.5 0 0 1 23 0V28"/>
        <circle cx="28" cy="42" r="3.6"/>
        <path d="M28 45.6V51"/>
      </svg>`,

    /* WhatsApp */
    whatsapp: `
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor"
           stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M32 6C17.6 6 6 17.6 6 32c0 4.6 1.2 8.9 3.4 12.7L6 58l13.7-3.3A25.9 25.9 0 0 0 32 58c14.4 0 26-11.6 26-26S46.4 6 32 6z"/>
        <path d="M24.3 21.6c-.5-1.2-1-1.2-1.5-1.2h-1.3c-.5 0-1.3.2-2 1-.7.8-2.6 2.6-2.6 6.2 0 3.7 2.7 7.2 3 7.7.4.5 5.2 8.3 12.8 11.3 6.3 2.5 7.6 2 9 1.9 1.3-.1 4.3-1.8 5-3.5.6-1.7.6-3.2.4-3.5-.2-.3-.7-.5-1.5-.9-.7-.4-4.3-2.2-5-2.4-.7-.3-1.2-.4-1.7.4-.5.7-1.9 2.4-2.3 2.9-.4.5-.8.5-1.6.2-.7-.4-3.2-1.2-6-3.7-2.2-2-3.7-4.4-4.2-5.2-.4-.7 0-1.1.3-1.5.3-.3.7-.8 1-1.2.3-.4.5-.7.7-1.2.2-.5.1-.9 0-1.2-.2-.4-1.7-4-2.4-5.5z"
              fill="currentColor" stroke="none"/>
      </svg>`,

    /* Anillo dibujado a mano para las portadas de destacadas */
    anillo: `
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor"
           stroke-width="3.2" stroke-linecap="round">
        <path d="M100 6c52 0 94 42 94 94 0 50-40 92-92 94-53 2-96-41-96-94C6 48 47 6 100 6z"/>
        <path d="M14 128c-4-10-6-20-6-31C8 46 49 5 100 4"/>
      </svg>`
  };

  function pintar() {
    document.querySelectorAll('[data-dp]').forEach(function (nodo) {
      var clave = nodo.getAttribute('data-dp');
      nodo.innerHTML = ICONOS[clave] || '';
      nodo.style.display = 'block';
      var svg = nodo.querySelector('svg');
      if (svg) { svg.style.width = '100%'; svg.style.height = '100%'; }
    });
    document.documentElement.setAttribute('data-dp-listo', '1');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pintar);
  } else { pintar(); }
})();
