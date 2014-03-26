(function($) {
  'use strict';

  $('nav a').click(function() {
    var hash = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    });
  });
}(jQuery));