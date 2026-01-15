var slider = new Swiper('.main-slider', {
  loop: true,
  loopAdditionalSlides: 12,
  speed: 1500,
  autoplay: {
    delay: 7000, // ⏱️ más tiempo por slide
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
