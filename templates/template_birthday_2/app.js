$('.carousel-gallery').addClass('owl-carousel owl-theme').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive:{
      0: {
        margin: 40,
        items: 2,
        dots: false,
        nav: true
      },
      600: {
        items: 1,
        dots: true,
        nav: false
      },
      1000: {
        margin: 70,
        items: 3,
        dots: false,
        nav: true,
      }
    }
  })