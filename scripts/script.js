$(document).ready(function() {
// Burger Menu 
	$('.burger-nav').on('click tap', function(){
		$('.nav-links-wrap').toggleClass('burger');
	});
// Fixed Nav Bar On Scroll
	$(window).scroll(function() {
		if ($(window).scrollTop() > 50 && $(window).width() > 940) {
			$('.header-nav').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 51) {
			$('.header-nav').removeClass('navbar-fixed');
		}
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 50 && $(window).width() < 940) {
			$('.header-nav').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 51) {
			$('.header-nav').removeClass('navbar-fixed');
		}
	});
// Smooth Scroll
	$('.header-mouse').click(function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top},
			'slow');
	});

	$('.toTop').click(function() {
		console.log('toTop');
		$('html, body').animate({
			scrollTop: $('header').offset().top},
			'slow');
	});
});