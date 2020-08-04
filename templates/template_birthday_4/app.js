// ============Navbar Mobile===============
$(document).ready(function() {
  AOS.init({
       duration: 1200
      });
  $('nav .fa-bars').click(function() {
    $(".side-nav").addClass("active");
  })
  $('.close-div .fa-times, .side-nav li').click(function() {
    $(".side-nav").removeClass("active");
  })
  // Add smooth scrolling to all links
  // $("nav a").on('click', function(event) {
  //   if (this.hash !== "") {
  //     event.preventDefault();
  //     var hash = this.hash;
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 1000, function(){
  //       window.location.hash = hash;
  //     });
  //   }
  // });
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