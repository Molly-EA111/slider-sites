const totalSlides = 12;
const startIndex = 2;
const wrapper = document.querySelector('.swiper-wrapper');

/* GENERAR SLIDES AUTOMÁTICAMENTE */
for (let i = startIndex; i < startIndex + totalSlides; i++) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <div class="slide-bgimg"
         style='background-image:url("images/img(${i}).png")'></div>
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
    delay: 9000,              // ⏱️ tiempo ideal para Ken Burns
    disableOnInteraction: false
  },
  allowTouchMove: true
});
