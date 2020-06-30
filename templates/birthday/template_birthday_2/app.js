$(document).ready(function() {
   $('.nav-birthday-2 .fa-bars').click(function() {
    $(".side-nav").addClass("active");
  })
  $('.close-div .fa-times, .side-nav li').click(function() {
    $(".side-nav").removeClass("active");
  })
$('.carousel-gallery').addClass('owl-carousel owl-theme').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive:{
      0: {
        margin: 40,
        items: 2,
        dots: true,
        nav: false
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
})
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-birthday-2 a").on('click', function(event) {

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