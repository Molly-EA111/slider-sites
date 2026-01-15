// SELECTORES
var mainSliderSelector = '.main-slider';
var navSliderSelector = '.nav-slider';
var interleaveOffset = 0.5;

// SLIDER PRINCIPAL
var mainSlider = new Swiper(mainSliderSelector, {
  loop: true,
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  on: {
    init: function () {
      // Forzar autoplay seguro en iframe
      var swiper = this;
      setTimeout(function () {
        swiper.autoplay.start();
      }, 500);
    },

    slideChangeTransitionEnd: function () {
      var swiper = this;
      var captions = swiper.el.querySelectorAll('.caption');

      captions.forEach(function (el) {
        el.classList.remove('show');
      });

      var activeCaption = swiper.slides[swiper.activeIndex].querySelector('.caption');
      if (activeCaption) {
        activeCaption.classList.add('show');
      }
    },

    progress: function () {
      var swiper = this;

      swiper.slides.forEach(function (slide) {
        var slideProgress = slide.progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;

        var bg = slide.querySelector('.slide-bgimg');
        if (bg) {
          bg.style.transform = 'translateX(' + innerTranslate + 'px)';
        }
      });
    },

    touchStart: function () {
      this.slides.forEach(function (slide) {
        slide.style.transition = '';
      });
    },

    setTransition: function (speed) {
      this.slides.forEach(function (slide) {
        slide.style.transition = speed + 'ms';

        var bg = slide.querySelector('.slide-bgimg');
        if (bg) {
          bg.style.transition = speed + 'ms';
        }
      });
    }
  }
});

// SLIDER DE NAVEGACIÓN
var navSlider = new Swiper(navSliderSelector, {
  loop: true,
  speed: 1000,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: true,
  slideToClickedSlide: true,
  direction: 'vertical',
  watchSlidesProgress: true
});

// SINCRONIZAR SLIDERS
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
