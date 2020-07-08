// ============Navbar Mobile===============
$(document).ready(function() {
  $('#mobile-menu').click(function() {
    $(".side-nav").addClass("active");
  })
  $('.close-div .fa-times, .side-nav li').click(function() {
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
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: true,
        nav: true
      },
      600: {
        items: 1,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: true,
        nav: true
      },
      1000: {
        items: 1,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: true,
        nav: true
      }
    }
  })
  $('.three-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    // loop: true,
    // autoplay: true,
    responsive:{
      0: {
        items: 1,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: true,
        nav: true
      },
      600: {
        items: 1,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: true,
        nav: true
      },
      1000: {
        items: 3,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: true,
        nav: true
      }
    }
  })
})

//// ============Input number incrementer / stepper===============
  $(".btn").on("click tap", function() {
    var $button = $(this);
    var oldValue = $('#spinner').val();
    if ($button.attr("id") == "step-increment") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    };
    $('#spinner').val(newVal);
  });
  $("#step-decrement").on("click tap", function() {
    if ( $('#spinner').val() === '0' ) {
      $(this).attr("disabled", true);
      $(this).attr("aria-disabled", true);
    }
  });
  $("#step-increment").on("click tap", function() {
    $("#step-decrement").removeAttr("disabled");
    $("#step-decrement").removeAttr("aria-disabled");
  });