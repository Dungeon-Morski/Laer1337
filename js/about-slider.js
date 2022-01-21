const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 400,
  sliderPerView:1,
  spaceBetween:30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});