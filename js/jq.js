//@koala-prepend "language.js" 
$(document).ready(function() { 
	  pull = $('#pull');
 menu = $('.menu');

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
    $(this).toggleClass("cross");
  });
	$('input').on('focus', function(e) { 
		console.log('hi');
		$(this).parents('.header-right').find('.cart').addClass('focus');
		$(this).parents('.header-right').find('.social').addClass('focus');
	});
		$('input').on('blur', function(e) { 
		console.log('bay');
		$(this).parents('.header-right').find('.cart').removeClass('focus');
		$(this).parents('.header-right').find('.social').removeClass('focus');
	});
});

$(window).resize(function(){

  w = $(window).width();
  if(w > 992) {
    menu.attr('style', 'none');
    pull.removeClass("cross");
  
  };

});