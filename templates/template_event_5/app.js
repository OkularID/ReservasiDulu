$(document).ready(function(){
$('.nav-event .menu-icon').click(function() {
    $(".side-menu").addClass("active");
  })
  $('.close-div, .side-menu li.mx-4').click(function() {
    $(".side-menu").removeClass("active");
  })
  // Add smooth scrolling to all links
  $(".nav-event a").on('click', function(event) {

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