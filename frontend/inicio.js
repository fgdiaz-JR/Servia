// Banner slider y puntos
const banners = [
  './img/banner1.jpg',
  './img/banner2.jpg',
  './img/banner3.jpg'
];
let activeIndex = 0;

function showBanner(index) {
  const img = document.getElementById('banner-img');
  if (img) {
    img.src = banners[index];
    img.alt = `Banner ${index + 1}`;
  }
  // Actualiza puntos
  const indicadores = document.getElementById('banner-indicadores');
  if (indicadores) {
    indicadores.innerHTML = banners.map((_, i) =>
      `<span class="punto${i === index ? ' activo' : ''}" onclick="setBanner(${i})"></span>`
    ).join('');
  }
}

function setBanner(index) {
  activeIndex = index;
  showBanner(activeIndex);
}

// Auto-slide
setInterval(() => {
  activeIndex = (activeIndex + 1) % banners.length;
  showBanner(activeIndex);
}, 6000);

document.addEventListener('DOMContentLoaded', () => {
  showBanner(activeIndex);
});
