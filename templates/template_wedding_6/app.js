$(document).ready(function() {
AOS.init({
       duration: 1200
      });
})
//  ============Galley============
var App = (function () {
  //=== Use Strict ===//
  'use strict';
  //=== Private Variables ===//
  var gallery = $('#js-gallery');
  //=== Gallery Object ===//
  var Gallery = {
    switch: function(trigger, imgContainer) {
      var src = trigger.attr('href'),
      thumbs = trigger.siblings(),
      img = trigger.parent().prev().children();
      // Add active class to thumb
      trigger.addClass('is-active');
      // Remove active class from thumbs
      thumbs.each(function() {
        if( $(this).hasClass('is-active') ) {
          $(this).removeClass('is-active');
        }
      });
      // Switch image source
      img.attr('src', src);
    }
  };
  //=== Public Methods ===//
  function init() {
    // Listen for clicks on anchors within gallery
    gallery.delegate('a', 'click', function(event) {
      var trigger = $(this);
      var triggerData = trigger.data("gallery");

      if ( triggerData === 'thumb') {
        var imgContainer = trigger.parent().siblings();
        Gallery.switch(trigger, imgContainer);
      } else {
        return;
      }
      event.preventDefault();
    });
  }
  //=== Make Methods Public ===//
  return {
    init: init
  };
})();
App.init();

// ============COUNTDOWN===============
$(document).ready(function() {
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
  $('nav .bars').click(function() {
    $(".side-nav").addClass("active");
  })
  $('.close-div .close-icon, .side-nav li').click(function() {
    $(".side-nav").removeClass("active");
  })
  //Add smooth scrolling to all links
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
//  ============Move Down============
$('#chevron-down').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
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
        dots: false,
        nav: true
      },
      600: {
        items: 1,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        dots: false,
        nav: true
      },
      1000: {
        items: 1,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
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