$(document).ready(function() {
  //Button-menu
  $(function() {
    $('.icon').on('click', function() {
      $(this).closest('.header-nav').toggleClass('menu_state_open');
    });
  });

  //Scroll
  $('#slider').on('click', function (events) {
  	events.preventDefault();
  	var top = $('#our-work').offset().top;
  	$('html, body').animate({
  		scrollTop: top
  	},1500);
   });

  $('#slider-menu1').on('click', function (events) {
  	events.preventDefault();
  	var top = $('#our-work').offset().top;
  	$('html, body').animate({
  		scrollTop: top
  	},1500);
   });

  $('#slider-menu2').on('click', function (events) {
  	events.preventDefault();
  	var top = $('#our-team').offset().top;
  	$('html, body').animate({
  		scrollTop: top
  	},1500);
   });

  $('#slider-menu3').on('click', function (events) {
  	events.preventDefault();
  	var top = $('#contact').offset().top;
  	$('html, body').animate({
  		scrollTop: top
  	},1500);
   });

});

