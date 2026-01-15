const totalSlides = 12;
const startIndex = 2;
const wrapper = document.querySelector('.swiper-wrapper');

/* GENERAR SLIDES CON ZOOM ALTERNADO */
for (let i = 0; i < totalSlides; i++) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide ' + (i % 2 === 0 ? 'zoom-in' : 'zoom-out');

  slide.innerHTML = `
    <div class="slide-bgimg"
         style='background-image:url("images/img(${i + startIndex}).png")'></div>
  `;

  wrapper.appendChild(slide);
}

/* INICIALIZAR SWIPER */
new Swiper('.main-slider', {
  loop: true,
  loopAdditionalSlides: totalSlides,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 2000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false
  },
  allowTouchMove: true
});
