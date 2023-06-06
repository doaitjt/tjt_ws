const swiper = new Swiper('.swiperPC', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  // If we need pagination
  observer: true,
  observeParents: true,
  parallax:true,
  // Navigation arrows
  navigation: {
    nextEl: '#swiper-next',
    prevEl: '#swiper-prev',
  },

  // And if we need scrollbar
});


const swiperMB = new Swiper('.swiperMB', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  // If we need pagination
  observer: true,
  observeParents: true,
  parallax:true,
  // Navigation arrows
  navigation: {
    nextEl: '#swiper-next',
    prevEl: '#swiper-prev',
  },

  // And if we need scrollbar
});
