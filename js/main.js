const wrapper = document.querySelector('.swiper-wrapper');

/* 🔢 LISTA DE IMÁGENES (CONTROL TOTAL) */
const images = [
  'images/img(2).png',
  'images/img(3).png',
  'images/img(4).png',
  'images/img(5).png',
  'images/img(6).png',
  'images/img(7).png',
  'images/img(8).png',
  'images/img(9).png',
  'images/img(10).png',
  'images/img(11).png',
  'images/img(12).png',
  'images/img(13).png'
];

/* 🎥 MODOS DE PAN */
const panModes = [
  'pan-x-in',
  'pan-x-out',
  'pan-y-in',
  'pan-y-out'
];

/* CREAR SLIDES */
images.forEach(src => {
  const slide = document.createElement('div');
  const panClass = panModes[Math.floor(Math.random() * panModes.length)];

  slide.className = `swiper-slide ${panClass}`;
  slide.innerHTML = `
    <div class="slide-bgimg" data-src="${src}"></div>
  `;

  wrapper.appendChild(slide);
});

/* ⚡ LAZY LOADING REAL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.backgroundImage = `url("${el.dataset.src}")`;
      observer.unobserve(el);
    }
  });
}, { rootMargin: '200px' });

document.querySelectorAll('.slide-bgimg').forEach(img => observer.observe(img));

/* 🚀 INICIALIZAR SWIPER */
new Swiper('.main-slider', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 1200,
  autoplay: {
    delay: 5400,   // ⏱️ 60 % del tiempo original
    disableOnInteraction: false
  },
  allowTouchMove: true
});
