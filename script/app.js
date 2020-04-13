// ============Function===============
// Home Banner Navigation
$(document).ready(function(){
  // show first
  $("#navigation").show();
  // fade in
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 2200) {
        $('#navigation').fadeOut();
      } else {
        $('#navigation').fadeIn();
      }
    });
  });
});
// Move Down
$('#chevron-down').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
});
// Move Top
$(document).ready(function(){
  // hide #back-top first
  $("#back-top").hide();
  // fade in #back-top
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 400) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
              $('.baloon.fixed').addClass("hide");
          }
      });
      // scroll body to 0px on click
      $('a#back-top').click(function () {
          $(".baloon").addClass("fixed");
          $('body,html').animate({
              scrollTop: 0
          }, 2000);
          return false;
      });
  });
});
// Edit Template
$(document).ready(function(){
  // hide #edit-template first
  $("#edit-template").show();
  // fade in #edit-template
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 3000) {
        $('#edit-template').fadeOut();        
      } else {
        $('#edit-template').fadeIn();
      }
    });
  });
});
// Tabs
$(function(tabs){
  /*Nav Tabs Active First*/
  $(".nav-tab:first").addClass("active");
  /*Content Active First*/
  $('.tabs').hide().first().show();
  // $('.sub-tab').hide().first().show();
  $('.nav-tab').click(function(){
    $('.tabs').hide();
    $(".nav-tab").removeClass("active");
    $(this).addClass("active");
    // $(this).addClass("active");
    var $targetTab = $('#tab-'+$(this).attr('target'));
    // $targetTab.find('.sub-tab').hide().first().show();
    $targetTab.fadeIn(200);
  });
});
// Navbar Mobile
$(document).ready(function() {
  $('.bars').click(function() {
    $(".bars").addClass("active");
    $(".fa-times").addClass("active");
    $(".sidenav").removeClass("slideOut");
    $(".sidenav").addClass("slideIn");
  })
})
$(document).ready(function() {
  $('.fa-times').click(function(){
    $(".bars").removeClass("active");
    $(".fa-times").removeClass("active");
    $(".sidenav").addClass("slideOut");
  })
})
// ======================HOMEPAGE HEADER====================================
$(document).ready(function() {
  // Detect request animation frame
  var scroll = window.requestAnimationFrame ||
      // IE Fallback
      function(callback){ window.setTimeout(callback, 1000/60)};
  var elementsToShow = document.querySelectorAll('.show-on-scroll');
  function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
  }
  // Call the loop for the first time
  loop();
  // Helper function from: http://stackoverflow.com/a/7557433/274826
  function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 900) //bottomfadeout
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
})
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


/*Animation motif*/
$(document).ready(function(){

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.1  +'px)'
    });

    $('.move-right-fast').css({
      'transform':'translateX('+(windowTop) * 0.4  +'px)'
    });

    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.1 +'px)'
    });

    $('.move-left-fast').css({
      'transform':'translateX('+(windowTop) * -0.7 +'px)'
    });

    $('.move-top').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
    $('.move-topcontact').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
  });
});
// ============Carousel===============


// PRODUCT PAGE, SYNCHRONIZE IMAGE 1
$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 1; //globaly define number of elements per page
  var syncedSecondary = true;
  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    // touchDrag  : false,
    // mouseDrag  : true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;stroke: #d6c3a7;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;stroke: #d6c3a7;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);
  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);
  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});
$(document).ready(function() {
  $('.one-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    // autoplay: true,
    // loop: true,
    responsive:{
      0: {
        items: 1,
        // navText: ["<img src='http://vasakabali.com/wp-content/themes/vasaka/images/arrow-left-white.png'>","<img src='http://vasakabali.com/wp-content/themes/vasaka/images/arrow-right-white.png'>"],
        dots: true,
        nav: true
      },
      600: {
        items: 1,
        // navText: ["<img src='http://vasakabali.com/wp-content/themes/vasaka/images/arrow-left-white.png'>","<img src='http://vasakabali.com/wp-content/themes/vasaka/images/arrow-right-white.png'>"],
        dots: true,
        nav: true
      },
      1000: {
        items: 1,
        // navText: ["<img src='http://vasakabali.com/wp-content/themes/vasaka/images/arrow-left.png'>","<img src='http://vasakabali.com/wp-content/themes/vasaka/images/arrow-right.png'>"],
        dots: false,
        nav: true
      }
    }
  })
})