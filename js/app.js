// ============================================================
// QUINCECEROUNO — app.js
// ============================================================

const projects = [
  {
    name: 'Apartamento Tres Ríos', year: '2023', type: 'Apartamentos',
    location: 'San Diego, Cartago, Costa Rica', area: '280 m²', status: 'Construido',
    photo: 'Roberto D\'Ambrosio',
    thumbnail: 'assets/casa-tresrios/casa-tresrios-1.png',
    images: Array.from({length: 14}, (_, i) => `assets/casa-tresrios/casa-tresrios-${i+1}.png`),
    tagline: 'VACÍO COMO LO COMÚN, LLENO COMO LO PRIVADO',
    description: 'El proyecto se establece en un sitio que cuenta con dos frentes, ambos afectados por normas urbanísticas de retiros que no son aprovechables en términos de construcción, por lo que planteamos los parqueos vehiculares en ambos. Desde ese momento detectamos que la condición de tener dos frentes presentaba el problema de tener dos ingresos independientes o separados, lo que podía ocasionar que los habitantes no tuvieran el contacto que desearíamos en un proyecto que busca generar comunidad entre los vecinos, desde ahí fue que partimos para ordenar el proyecto.',
    concept: 'Establecer el espacio común —la circulación— como un elemento principal. Tomando como referencia los patios internos de las casonas de la zona, establecimos un vacío central en el lote que articula ambos bloques de apartamentos, de esta forma forzamos a los residentes a circular por ese patio propiciando la convivencia entre ellos. A su vez, este patio de doble altura resuelve la ventilación e iluminación de los apartamentos, por lo que las fachadas principales de cada bloque se vuelven hacia el centro del lote, mostrando una apertura hacia el patio interno. Las fachadas que dan hacia las aceras se tornan más cerradas y ensimismadas para ser consecuentes con la idea original del proyecto: darle prioridad a lo que está pasando adentro.'
  },
  {
    name: 'Casa Linde', year: '2024', type: ' Casa Residencial',
    location: 'Cartago Oriental, Costa Rica', area: '540 m²', status: 'Construido',
    photo: 'Roberto D\'Ambrosio',
    thumbnail: 'assets/casa-linde/casa-linde-1.png',
    images: Array.from({length: 21}, (_, i) => `assets/casa-linde/casa-linde-${i+1}.png`),
    tagline: 'PENSAR DESDE EL LINDERO',
    description: 'La condición de estrechez del lote nos obliga a pensar desde el lindero o perímetro, y no desde el objeto arquitectónico. Las condiciones espaciales son distintas pues el lindero es el que determina el espacio y no el objeto impuesto por el arquitecto. Desde este punto de vista, nos desprendemos de la búsqueda formal, y nos concentramos en lo elemental del oficio: la búsqueda del espacio y las condiciones pertinentes para la vida dentro del lindero.',
    concept: 'Uno de los retos de diseño era el contexto citadino cerca del centro de la provincia, donde se presentan patologías urbanas marcadas como la creciente inseguridad. Sin embargo decidimos no dejarnos doblegar y hacer una casa que intenta aportar al entorno inmediato. Retraer cada nivel hacia atrás conforme aumentaba la altura era parte de las invariantes del proyecto, logrando que los niveles coincidieran con sus vecinos. El borde se manejó con plantas para suavizarlo, y una malla de metal expandido establece una conexión con el afuera manteniendo la seguridad necesaria. El poste del tendido eléctrico frente a la casa fue asumido como parte del proyecto, funcionando como vestibulador del acceso peatonal. Su ubicación definió además el módulo del tercer nivel, evitando que obstaculizara la visual hacia las montañas del Norte de Cartago, el Volcán Irazú y la Basílica de Nuestra Señora de los Ángeles. Pensar en una casa dentro de una ciudad que cada vez está menos habitada constituye un acto de resistencia: no abandonar la ciudad e intentar repoblarla para lograr su sostenibilidad.'
  },
  {
    name: 'Plaza Gastronómica Ruta 224', year: '2024', type: 'Restaurante',
    location: 'Paraíso, Cartago. Sobre Ruta Nacional 224', area: '448 m²', status: 'Construido',
    photo: 'Roberto D\'Ambrosio',
    thumbnail: 'assets/ruta-paraiso/quince_cero_uno_cartago_alta-3.jpg',
    images: [
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-3.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-8.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-9.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-11.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-12.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-13.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-14.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-15.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-16.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-17.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-18.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-29.jpg',
      'assets/ruta-paraiso/quince_cero_uno_cartago_alta-32.jpg'
    ],
    tagline: 'LA SECCIÓN COMO INSTRUMENTO, LA CUBIERTA COMO GESTO',
    description: 'Como idea original establecimos que nuestro proyecto debía de responder al paisaje que comienza a asomarse cuando descendemos hacia el valle de Orosí, con montañas que se yuxtaponen y dan resguardo. Entendimos que el proyecto, por su carácter comercial, debía de tener un gesto que fuera particular entre su contexto para atraer a potenciales clientes que se dirigen al valle. De esta forma comprendemos la totalidad del proyecto como una gran cubierta, que resguarda a los comensales.',
    concept: 'Como estrategia de diseño exploramos diferentes variaciones de esta, abstrayendo su forma con ejercicios geométricos, y resolviendo el proyecto a partir de la sección como un instrumento indispensable para solucionar espacio y aspectos técnicos que implica la forma. De esta manera el orden lo establece la sección, y los contenedores previamente adquiridos por los propietarios simplemente se adaptan a ese orden, dejándolos libres para posibles cambios posteriores.'
  },
  {
    name: 'Casa Viento', year: '2024', type: 'Casa Residencial',
    location: 'Oreamuno,Cartago,Costa Rica', area: '174m²', status: 'Construido',
    photo: "Roberto D'Ambrosio",
    thumbnail: 'assets/casa-viento/quince_cero_uno_casa_arriba_alta-13.jpg',
    images: [
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-13.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-19.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-29.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-31.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-33.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-41.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-47.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-48.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-50.jpg',
      'assets/casa-viento/quince_cero_uno_casa_arriba_alta-55.jpg'
    ],
    tagline: 'LA FORMA RESPONDE AL VIENTO, EL DISEÑO AL TERRENO',
    description: 'Existen dos elementos principales en el sitio -situación-. El viento y la superficie -topografía-. La superficie es estable y constante como una preexistencia, en cambio el viento, por el contrario, a pesar de su persistencia es inconstante y variable.',
    concept: 'Desde ese acercamiento el proyecto comienza a entenderse como un elemento unificador de ambos: de lo constante y lo inconstante. Por lo tanto, entendemos que la forma responde al viento y el diseño al terreno como síntesis del proyecto.'
  },
  {
    name: 'Casa Peraz', year: '2024', type: 'Casa Residencial',
    location: ' Tres Ríos,Cartago,Costa Rica', area: '', status: 'Construido',
    photo: "Roberto D'Ambrosio",
    thumbnail: 'assets/casa-peraz/casa_3_rios_alta-4.jpg',
    images: [
      'assets/casa-peraz/casa_3_rios_alta-4.jpg',
      'assets/casa-peraz/casa_3_rios_alta-6.jpg',
      'assets/casa-peraz/casa_3_rios_alta-11.jpg',
      'assets/casa-peraz/casa_3_rios_alta-13.jpg',
      'assets/casa-peraz/casa_3_rios_alta-16.jpg',
      'assets/casa-peraz/casa_3_rios_alta-19.jpg',
      'assets/casa-peraz/casa_3_rios_alta-22.jpg',
      'assets/casa-peraz/casa_3_rios_alta-25.jpg',
      'assets/casa-peraz/casa_3_rios_alta-26.jpg',
      'assets/casa-peraz/casa_3_rios_alta-32.jpg',
      'assets/casa-peraz/casa_3_rios_alta-44.jpg'
    ],
    tagline: 'EL VACÍO COMO ESPACIO, LO LLENO COMO MATERIA',
    description: 'En un contexto en donde la privacidad prevalece, la búsqueda del espacio empieza a partir de las operaciones estereotómicas dentro del mismo. El espacio se entiende como un lleno y la búsqueda del vacío permite la generación de los distintos aposentos.',
    concept: 'El vacío es donde se experimenta y vivencia en su máxima totalidad el espacio, administrando la relación con el exterior y prevaleciendo la experiencia desde su interior.'
  },
  {
    name: 'Casa La Cabriola', year: '2020', type: 'Casa Residencial',
    location: 'Ciudad Colón, Mora, San José', area: '138 m²', status: 'Construido',
    photo: 'Roberto D\'Ambrosio',
    thumbnail: 'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-1.jpg',
    images: [
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-1.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-5.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-7.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-8.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-12.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-13.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-15.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-16.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-18.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-20.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-24.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-52.jpg',
      'assets/casa-cabriola/quince_cero_uno_ciudad_colon_alta-54.jpg'
    ],
    tagline: 'EL SITIO COMO MOTOR, LA CASA COMO CONSECUENCIA',
    description: 'La casa es, ante todo, una apuesta por concebir el sitio —la situación concreta del terreno— como el verdadero motor del proyecto arquitectónico. No se trata de imponer una forma preconcebida sobre el lugar, sino de dejar que la vivienda exista únicamente en función de las condiciones que el propio terreno ofrece. En este sentido, la arquitectura se entiende como un proceso recíproco, donde la relación con el entorno se convierte en el fundamento mismo de la propuesta. Nuestro abordaje se distancia de la estrategia del campo geométrico tradicionalmente empleada para articular proyectos en terrenos de topografía homogénea. En este caso, son las particularidades del lote, con su geografía accidentada y su vegetación existente, las que se convierten en generadoras del proyecto. La casa surge, entonces, de la oportunidad de hacer evidente el programa arquitectónico mediante la expresión formal y volumétrica que dichas condiciones sugieren.',
    concept: 'Aquí, el campo geométrico no nace de una imposición abstracta, sino de una lógica interna semejante a la que organiza el crecimiento de los árboles que habitan el lugar. Se conservan aquellos árboles más relevantes y otros se reubican estratégicamente, con el fin de establecer un equilibrio entre la arquitectura y la naturaleza, evitando que una domine a la otra. El programa se fragmenta en piezas independientes que se disponen de manera dispersa a lo largo del terreno. Estas unidades, aunque separadas, mantienen entre sí un diálogo continuo gracias a una circulación que las conecta, funcionando como columna vertebral del proyecto. Esta forma de ordenar responde a una lógica que remite tanto a la arquitectura metabólica como a geometrías azarosas, donde la aparente irregularidad se convierte en un recurso de integración. En última instancia, la casa se entiende como un medio para experimentar el lugar, del mismo modo que el lugar se convierte en un medio para experimentar la arquitectura.'
  }
];

// ============================================================
// SVG DRAWINGS — fallback para proyectos sin thumbnail
// ============================================================

const svgTresRios = `
<svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="348" x2="310" y2="348" stroke="#111" stroke-width="1.2"/>
  <rect x="20" y="200" width="118" height="148" stroke="#111" stroke-width="0.9"/>
  <line x1="20" y1="220" x2="138" y2="220" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="20" y1="240" x2="138" y2="240" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="20" y1="260" x2="138" y2="260" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="20" y1="280" x2="138" y2="280" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="20" y1="300" x2="138" y2="300" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="20" y1="320" x2="138" y2="320" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <rect x="48" y="230" width="62" height="72" stroke="#111" stroke-width="0.8"/>
  <line x1="68" y1="230" x2="68" y2="302" stroke="#111" stroke-width="0.5"/>
  <line x1="88" y1="230" x2="88" y2="302" stroke="#111" stroke-width="0.5"/>
  <line x1="48" y1="254" x2="110" y2="254" stroke="#111" stroke-width="0.5"/>
  <line x1="48" y1="278" x2="110" y2="278" stroke="#111" stroke-width="0.5"/>
  <rect x="26" y="210" width="106" height="14" stroke="#111" stroke-width="0.7"/>
  <line x1="52" y1="210" x2="52" y2="224" stroke="#111" stroke-width="0.4"/>
  <line x1="78" y1="210" x2="78" y2="224" stroke="#111" stroke-width="0.4"/>
  <line x1="104" y1="210" x2="104" y2="224" stroke="#111" stroke-width="0.4"/>
  <rect x="26" y="228" width="18" height="12" stroke="#111" stroke-width="0.5"/>
  <line x1="26" y1="231" x2="44" y2="231" stroke="#111" stroke-width="0.3"/>
  <line x1="26" y1="234" x2="44" y2="234" stroke="#111" stroke-width="0.3"/>
  <line x1="26" y1="237" x2="44" y2="237" stroke="#111" stroke-width="0.3"/>
  <rect x="182" y="120" width="118" height="228" stroke="#111" stroke-width="0.9"/>
  <line x1="182" y1="200" x2="300" y2="200" stroke="#111" stroke-width="0.6" stroke-dasharray="5 3"/>
  <line x1="182" y1="220" x2="300" y2="220" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="182" y1="240" x2="300" y2="240" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="182" y1="260" x2="300" y2="260" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="182" y1="280" x2="300" y2="280" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="182" y1="300" x2="300" y2="300" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <line x1="182" y1="320" x2="300" y2="320" stroke="#111" stroke-width="0.3" opacity="0.4"/>
  <rect x="188" y="130" width="106" height="14" stroke="#111" stroke-width="0.7"/>
  <line x1="214" y1="130" x2="214" y2="144" stroke="#111" stroke-width="0.4"/>
  <line x1="240" y1="130" x2="240" y2="144" stroke="#111" stroke-width="0.4"/>
  <line x1="266" y1="130" x2="266" y2="144" stroke="#111" stroke-width="0.4"/>
  <rect x="188" y="155" width="106" height="14" stroke="#111" stroke-width="0.7"/>
  <line x1="214" y1="155" x2="214" y2="169" stroke="#111" stroke-width="0.4"/>
  <line x1="240" y1="155" x2="240" y2="169" stroke="#111" stroke-width="0.4"/>
  <line x1="266" y1="155" x2="266" y2="169" stroke="#111" stroke-width="0.4"/>
  <rect x="192" y="208" width="38" height="40" stroke="#111" stroke-width="0.6"/>
  <rect x="238" y="208" width="38" height="40" stroke="#111" stroke-width="0.6"/>
  <rect x="192" y="255" width="38" height="36" stroke="#111" stroke-width="0.6"/>
  <rect x="238" y="255" width="38" height="36" stroke="#111" stroke-width="0.6"/>
  <rect x="192" y="298" width="38" height="30" stroke="#111" stroke-width="0.6"/>
  <rect x="238" y="298" width="38" height="30" stroke="#111" stroke-width="0.6"/>
  <rect x="138" y="200" width="44" height="148" stroke="#111" stroke-width="0.5" stroke-dasharray="5 3"/>
  <line x1="160" y1="215" x2="160" y2="335" stroke="#111" stroke-width="0.4" stroke-dasharray="2 3"/>
  <polygon points="157,332 160,340 163,332" fill="#111" opacity="0.4"/>
  <text x="162" y="278" font-size="5.5" fill="#999" font-family="'Space Mono',monospace" transform="rotate(90,162,278)">VACÍO</text>
  <rect x="10" y="330" width="30" height="18" stroke="#111" stroke-width="0.4" opacity="0.5"/>
  <line x1="25" y1="330" x2="25" y2="348" stroke="#111" stroke-width="0.3" opacity="0.5"/>
  <rect x="280" y="330" width="30" height="18" stroke="#111" stroke-width="0.4" opacity="0.5"/>
  <line x1="295" y1="330" x2="295" y2="348" stroke="#111" stroke-width="0.3" opacity="0.5"/>
</svg>`;

const svgCasaLinde = `
<svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="310" x2="280" y2="310" stroke="#111" stroke-width="1.5"/>
  <rect x="80" y="230" width="140" height="80" stroke="#111" stroke-width="1"/>
  <rect x="95" y="160" width="110" height="72" stroke="#111" stroke-width="1"/>
  <rect x="110" y="100" width="80" height="62" stroke="#111" stroke-width="1"/>
  <line x1="110" y1="100" x2="190" y2="100" stroke="#111" stroke-width="0.5"/>
  <line x1="115" y1="94" x2="115" y2="100" stroke="#111" stroke-width="0.5"/>
  <line x1="130" y1="94" x2="130" y2="100" stroke="#111" stroke-width="0.5"/>
  <line x1="145" y1="94" x2="145" y2="100" stroke="#111" stroke-width="0.5"/>
  <line x1="160" y1="94" x2="160" y2="100" stroke="#111" stroke-width="0.5"/>
  <line x1="175" y1="94" x2="175" y2="100" stroke="#111" stroke-width="0.5"/>
  <line x1="185" y1="94" x2="185" y2="100" stroke="#111" stroke-width="0.5"/>
  <rect x="80" y="280" width="15" height="30" stroke="#111" stroke-width="0.5"/>
  <line x1="83" y1="280" x2="83" y2="310" stroke="#111" stroke-width="0.3"/>
  <line x1="86" y1="280" x2="86" y2="310" stroke="#111" stroke-width="0.3"/>
  <line x1="89" y1="280" x2="89" y2="310" stroke="#111" stroke-width="0.3"/>
  <line x1="92" y1="280" x2="92" y2="310" stroke="#111" stroke-width="0.3"/>
  <rect x="140" y="272" width="24" height="38" stroke="#111" stroke-width="0.7"/>
  <rect x="98" y="248" width="22" height="28" stroke="#111" stroke-width="0.6"/>
  <rect x="182" y="248" width="22" height="28" stroke="#111" stroke-width="0.6"/>
  <rect x="108" y="175" width="22" height="22" stroke="#111" stroke-width="0.6"/>
  <rect x="170" y="175" width="22" height="22" stroke="#111" stroke-width="0.6"/>
  <rect x="120" y="115" width="60" height="18" stroke="#111" stroke-width="0.6"/>
  <line x1="55" y1="60" x2="55" y2="310" stroke="#111" stroke-width="1.2"/>
  <line x1="38" y1="78" x2="72" y2="78" stroke="#111" stroke-width="0.7"/>
  <line x1="40" y1="86" x2="70" y2="86" stroke="#111" stroke-width="0.5"/>
  <line x1="55" y1="82" x2="130" y2="100" stroke="#111" stroke-width="0.4" stroke-dasharray="3 2"/>
  <ellipse cx="75" cy="302" rx="8" ry="10" stroke="#111" stroke-width="0.5"/>
  <ellipse cx="228" cy="304" rx="6" ry="8" stroke="#111" stroke-width="0.5"/>
  <polyline points="0,80 40,45 80,60 120,30 160,50 200,35 240,55 280,40 300,55" stroke="#111" stroke-width="0.4" opacity="0.2"/>
</svg>`;

const cardSvgs = [svgTresRios, svgCasaLinde, null, null, null, null];

// ============================================================
// INIT
// ============================================================

let touchStartX = 0;

document.addEventListener('DOMContentLoaded', () => {

  // Inyectar thumbnail o SVG en tarjetas
  document.querySelectorAll('.project-card[data-index]').forEach(card => {
    const idx = +card.dataset.index;
    const p   = projects[idx];
    const div = card.querySelector('.project-card__drawing');
    if (!div || !p) return;

    if (p.thumbnail) {
      div.style.padding  = '0';
      div.style.overflow = 'hidden';
      div.innerHTML = `<img src="${p.thumbnail}" alt="${p.name}"
        style="width:100%;height:100%;object-fit:cover;display:block;">`;
    } else if (cardSvgs[idx]) {
      div.innerHTML = cardSvgs[idx];
    }
  });

  // Referencias al DOM
  const modal          = document.getElementById('modal');
  const modalBackdrop  = document.getElementById('modalBackdrop');
  const modalClose     = document.getElementById('modalClose');
  const modalImage     = document.getElementById('modalImage');
  const modalContent   = document.getElementById('modalContent');
  const galleryNav     = document.getElementById('galleryNav');
  const galleryPrev    = document.getElementById('galleryPrev');
  const galleryNext    = document.getElementById('galleryNext');
  const galleryCounter = document.getElementById('galleryCounter');

  let currentImages     = [];
  let currentPhotoIndex = 0;

  function renderPhoto(index) {
    currentPhotoIndex = index;
    modalImage.innerHTML = `<img src="${currentImages[index]}" alt="Foto ${index + 1}"
      style="width:100%;height:100%;object-fit:cover;display:block;">`;
    galleryCounter.textContent = `${index + 1} / ${currentImages.length}`;
    galleryPrev.disabled = index === 0;
    galleryNext.disabled = index === currentImages.length - 1;
  }

  window.openModal = function(index) {
    const p = projects[index];
    if (!p.name) return;

    if (p.images && p.images.length > 0) {
      currentImages = p.images;
      galleryNav.style.display = 'flex';
      renderPhoto(0);
    } else {
      currentImages = [];
      galleryNav.style.display = 'none';
      modalImage.innerHTML = cardSvgs[index]
        ? cardSvgs[index]
        : `<span class="modal__image-placeholder">IMAGEN DEL PROYECTO</span>`;
    }

    modalContent.innerHTML = `
      <p class="modal__eyebrow">0${index + 1} — ${p.type}</p>
      <h2 class="modal__title">${p.name}</h2>
      ${p.tagline ? `<p class="modal__tagline">${p.tagline}</p>` : ''}
      <p class="modal__body">${p.description}</p>
      ${p.concept ? `<p class="modal__concept-label">CONCEPTO</p><p class="modal__body">${p.concept}</p>` : ''}
      <div class="modal__details">
        <div class="modal__detail">
          <span class="modal__detail-label">AÑO</span>
          <span class="modal__detail-val">${p.year}</span>
        </div>
        <div class="modal__detail">
          <span class="modal__detail-label">UBICACIÓN</span>
          <span class="modal__detail-val">${p.location}</span>
        </div>
        <div class="modal__detail">
          <span class="modal__detail-label">SUPERFICIE</span>
          <span class="modal__detail-val">${p.area}</span>
        </div>
        <div class="modal__detail">
          <span class="modal__detail-label">ESTADO</span>
          <span class="modal__detail-val">${p.status}</span>
        </div>
        ${p.photo ? `
        <div class="modal__detail">
          <span class="modal__detail-label">FOTOGRAFÍA</span>
          <span class="modal__detail-val">${p.photo}</span>
        </div>` : ''}
      </div>`;

    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentImages     = [];
    currentPhotoIndex = 0;
  }

  galleryPrev.addEventListener('click', () => {
    if (currentPhotoIndex > 0) renderPhoto(currentPhotoIndex - 1);
  });

  galleryNext.addEventListener('click', () => {
    if (currentPhotoIndex < currentImages.length - 1) renderPhoto(currentPhotoIndex + 1);
  });

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft'  && currentImages.length > 0 && currentPhotoIndex > 0)
      renderPhoto(currentPhotoIndex - 1);
    if (e.key === 'ArrowRight' && currentImages.length > 0 && currentPhotoIndex < currentImages.length - 1)
      renderPhoto(currentPhotoIndex + 1);
  });

  modalImage.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  modalImage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40 || currentImages.length === 0) return;
    if (dx < 0 && currentPhotoIndex < currentImages.length - 1) renderPhoto(currentPhotoIndex + 1);
    if (dx > 0 && currentPhotoIndex > 0) renderPhoto(currentPhotoIndex - 1);
  }, { passive: true });

  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

});