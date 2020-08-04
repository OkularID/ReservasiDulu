// ============COUNTDOWN===============
$(document).ready(function() {
   AOS.init({
       duration: 1200
      });
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date('May 27, 2021 00:00:00').getTime(),
      x = setInterval(function() {    
        let now = new Date().getTime(),
        distance = countDown - now;
        if (distance > 0) {
          document.getElementById('days').innerText = ("0" + Math.floor(distance / (day))).slice(-2),
          document.getElementById('hours').innerText = ("0" + Math.floor((distance % (day)) / (hour))).slice(-2),
          document.getElementById('minutes').innerText = ("0" + Math.floor((distance % (hour)) / (minute))).slice(-2),
          document.getElementById('seconds').innerText = ("0" + Math.floor((distance % (minute)) / second)).slice(-2);
        } else {
          clearInterval(x); 
        }
      }, second)
});
// ============Navbar Mobile===============
$(document).ready(function() {
  $('#mobile-menu').click(function() {
    $(".side-nav").addClass("active");
    $("#dateandplace-wrap").addClass("active");
  })
  $('.close-div .fa-times, .side-nav li').click(function() {
    $(".side-nav").removeClass("active");
    $("#dateandplace-wrap").removeClass("active");
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

