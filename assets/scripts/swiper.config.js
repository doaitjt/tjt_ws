const swiper = new Swiper('.swiper', {
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
