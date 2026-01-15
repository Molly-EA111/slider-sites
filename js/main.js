var mainSlider = new Swiper('.main-slider', {
  loop: true,
  loopAdditionalSlides: 12,
  speed: 1200,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

var navSlider = new Swiper('.nav-slider', {
  loop: true,                     // 🔁 LOOP ACTIVADO
  loopAdditionalSlides: 12,        // 🔁 REPLICA THUMBNAILS
  direction: 'vertical',
  slidesPerView: 12,
  spaceBetween: 2,
  centeredSlides: true,
  slideToClickedSlide: true,
  watchSlidesProgress: true,
  allowTouchMove: true
});

mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
