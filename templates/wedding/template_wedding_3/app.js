// ============Form===============
$(document).ready(function(){
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
      button.classList.toggle('added');
    });
  });
});
// ============Navbar Desktop===============
$(document).ready(function(){
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $("nav").addClass('bg-white');
      } else {
        $("nav").removeClass('bg-white');
      }
    });
  });
});
// ============Navbar Mobile===============
$(document).ready(function() {
  $('nav .bars').click(function() {
    $(".side-nav").addClass("active");
  })
  $('.close-div .close-icon, .side-nav li').click(function() {
    $(".side-nav").removeClass("active");
  })
  // Add smooth scrolling to all links
  $("nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});
// ============Animation===============
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimX").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideX");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimLeft").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideLeft");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimLeftTour").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideLeftTour");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimImage1").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideImage1");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimImage2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideImage2");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimImage3").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideImage3");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimImage4").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideImage4");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimImage5").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideImage5");
        }
    });
  });
  $(window).scroll(function() {
    $(".slideanimImage6").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slideImage6");
        }
    });
  });
  $(document).ready(function() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml4');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
      .add({
        targets: '.ml4 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 10 * (i+1)
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  });
// ============Carousel===============
$(document).ready(function() {
  $('.one-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    responsive:{
      0: {
        items: 1,
        navText: ["<h2 class='text-blue'><i class='fa fa-chevron-circle-left'></i></h2>","<h2 class='text-blue'><i class='fa fa-chevron-circle-right'></i></h2>"],
        dots: true,
        nav: false
      },
      600: {
        items: 1,
        navText: ["<h2 class='text-blue'><i class='fa fa-chevron-circle-left'></i></h2>","<h2 class='text-blue'><i class='fa fa-chevron-circle-right'></i></h2>"],
        dots: true,
        nav: false
      },
      1000: {
        items: 1,
        navText: ["<h2 class='text-blue'><i class='fa fa-chevron-circle-left'></i></h2>","<h2 class='text-blue'><i class='fa fa-chevron-circle-right'></i></h2>"],
        dots: true,
        nav: false
      }
    }
  })
})