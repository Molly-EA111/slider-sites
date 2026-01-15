const wrapper = document.querySelector('.swiper-wrapper');

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

const moves = [
  'move-in',
  'move-out',
  'move-left',
  'move-right',
  'move-up',
  'move-down'
];

/* CREAR SLIDES */
images.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<div class="slide-bgimg" data-src="${src}"></div>`;
  wrapper.appendChild(slide);
});

/* LAZY LOADING */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.backgroundImage = `url("${el.dataset.src}")`;
      observer.unobserve(el);
    }
  });
}, { rootMargin: '300px' });

document.querySelectorAll('.slide-bgimg').forEach(img => observer.observe(img));

/* INICIALIZAR SWIPER */
const swiper = new Swiper('.main-slider', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 1200,
  autoplay: {
    delay: 5400, // 60 %
    disableOnInteraction: false
  },
  on: {
    slideChangeTransitionStart() {
      document
        .querySelectorAll('.slide-bgimg')
        .forEach(img => img.className = 'slide-bgimg');
    },
    slideChangeTransitionEnd() {
      const activeImg = document
        .querySelector('.swiper-slide-active .slide-bgimg');

      if (!activeImg) return;

      const move = moves[Math.floor(Math.random() * moves.length)];
      requestAnimationFrame(() => activeImg.classList.add(move));
    }
  }
});
