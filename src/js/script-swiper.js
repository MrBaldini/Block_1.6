export {swiper, swiper1, swiper2};

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 16,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    mousewheel: true,
    keyboard: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

const swiper1 = new Swiper('.swiper-devices', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 16,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    mousewheel: true,
    keyboard: true,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.type-of-devices___swiper-pagination',
      clickable: true,
    },
});

const swiper2 = new Swiper('.swiper-price', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 16,
    slidesPerView: 'auto',
    mousewheel: true,
    keyboard: true,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.div-of-services__swiper-pagination',
      clickable: true,
    },
});