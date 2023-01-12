$('.slider_component').each(function (index) {
  let loopMode = false;
  if ($(this).attr('loop-mode') === 'true') {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr('slider-duration') !== undefined) {
    sliderDuration = +$(this).attr('slider-duration');
  }

  const swiper = new Swiper($(this).find('.swiper')[0], {
    slidesPerView: '1',
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true,
    },
    freemode: true,
    spaceBetween: '5%',
    grabCursor: true,
    breakpoints: {
      // mobile portrait
      320: {
        slidesPerView: '1',
        spaceBetween: '4%',
      },
      // mobile landscape
      480: {
        slidesPerView: '2',
        spaceBetween: '4%',
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: '3%',
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: '2%',
      },
    },
    pagination: {
      el: $(this).find('.swiper-bullet-wrapper')[0],
      bulletActiveClass: 'is-active',
      bulletClass: 'swiper-bullet',
      bulletElement: 'button',
      clickable: true,
    },
    navigation: {
      nextEl: $(this).find('.swiper-next')[0],
      prevEl: $(this).find('.swiper-prev')[0],
      disabledClass: 'is-disabled',
    },
    scrollbar: {
      el: $(this).find('.swiper-drag-wrapper')[0],
      draggable: true,
      dragClass: 'swiper-drag',
      snapOnRelease: true,
    },
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
  });
});