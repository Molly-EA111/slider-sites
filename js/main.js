var mainSlider = new Swiper('.main-slider', {
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 6000, // ⏱️ MÁS TIEMPO POR SLIDE
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

var navSlider = new Swiper('.nav-slider', {
  direction: 'vertical',
  slidesPerView: 12,
  spaceBetween: 2,
  centeredSlides: false,
  slideToClickedSlide: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});

mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
