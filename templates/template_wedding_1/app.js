$(document).ready(function() {
  $('.nav-wedding .fa-bars').click(function() {
    $(".side-nav").addClass("active");
  })
  $('.close-div .fa-times, .side-nav li.mx-4').click(function() {
    $(".side-nav").removeClass("active");
  })
  $('.carousel-gallery').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 50,
    loop: true,
    responsiveClass: true,
    responsive:{
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      600: {
        items: 1,
        dots: true,
        nav: false
      },
      1000: {
        items: 2,
        dots: true,
        nav: false,
        stagePadding: 300,
      }
    }
  })
  const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('May 19, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;
        document.getElementById('days').innerText = ("0" + Math.floor(distance / (day))).slice(-2),
        document.getElementById('hours').innerText = ("0" + Math.floor((distance % (day)) / (hour))).slice(-2),
        document.getElementById('minutes').innerText = ("0" + Math.floor((distance % (hour)) / (minute))).slice(-2),
        document.getElementById('seconds').innerText = ("0" + Math.floor((distance % (minute)) / second)).slice(-2);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)

})
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-wedding a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});