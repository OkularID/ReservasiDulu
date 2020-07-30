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
// ================ACCORDION===================
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});



// Add Clas to First Everything Item
$('div#myTabContent.tab-content div.tab-pane:first').addClass('active');
$('div#myTabContent.tab-content div.tab-pane:first').addClass('show');
$('div#myTabContent2.tab-content div.tab-pane:first').addClass('active');
$('div#myTabContent2.tab-content div.tab-pane:first').addClass('show');
$('ul#myTab.nav-pills li a:first').addClass('active');
$('ul#myTab2.nav-pills li a:first').addClass('active');
$('ul#myTab .nav-link:first').addClass('active');
$('ul#myTab2 .nav-link:first').addClass('active');

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
  $('.three-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    responsive:{
      0: {
        items: 1,
        navText: ["<img src='images/arrow-07.png'>","<img src='images/arrow-08.png'>"],
        dots: false,
        nav: false
      },
      600: {
        items: 1,
        navText: ["<img src='images/arrow-07.png'>","<img src='images/arrow-08.png'>"],
        dots: false,
        nav: true
      },
      1000: {
        items: 3,
        navText: ["<img src='images/arrow-07.png'>","<img src='images/arrow-08.png'>"],
        dots: false,
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