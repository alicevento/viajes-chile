(function ($) {
	
	"use strict";

	// Animacion page


	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	})

	
	$(document).ready(function () {
		$(".navbar-toggler").on('click', function () {
			$('.navbar-collapse').toggleClass('show');
		});
	
		// Close mobile menu when a menu item is clicked
		$('.navbar-nav a').on('click', function () {
			$('.navbar-collapse').removeClass('show');
		});
	
		// Close mobile menu when clicking outside of it
		$(document).on('click', function (event) {
			if (!$(event.target).closest('.navbar-collapse').length && !$(event.target).is('.navbar-toggler')) {
				$('.navbar-collapse').removeClass('show');
			}
		});
	});
	






	// Menu 
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 2000);
				return false;
			}
		}
	});


	// Page animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


})(window.jQuery);