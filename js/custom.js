$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();


	// Window Width/Height
	wwwh = function(){
		ww = $(window).width();
		wh = $(window).height();
	}
	wwwh();

// Scroll to Respective Section between Pages
var headerHeight = $('.logo-nav').height();
$(document).on('click','a.scrollTo',function(e) {

	var target = this.hash;
	var $target = $(target);
	var targetname = target.slice(1, target.length);

	if(document.getElementById(targetname) != null) {

		e.preventDefault();
		target_offset = $target.offset() ? $target.offset().top : 0;

		$('.offcanvas').removeClass('show-offcanvas');
		$('.body-inactive').fadeOut(350);

		$('html, body').stop().animate({
			'scrollTop': target_offset - headerHeight
		});
	}
	else{
		window.location.hash = target ;
	}

});

$(window).load(function(){
	hash = window.location.hash;
	$('html, body').stop().animate({
		'scrollTop': $(hash).offset().top - headerHeight
	},500);	
})



// Header Color on Scroll
logoNavDivHeight = $('.logo-nav').height();
$(window).scroll(function(){
	scrollTop = $(window).scrollTop();
	if(scrollTop > logoNavDivHeight){
		$('.logo-nav').addClass('sticky-logo-nav');
	}
	else{
		$('.logo-nav').removeClass('sticky-logo-nav');
	}
});


// Mobile Menu

	// cloning menu items in mobile
	$mobileNav = $('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content');
	$mobileNav.append($('.header ul.mainNav').clone());

	// offcanvas toggle
	$('.toggle a').click(function(e){
		$('.offcanvas').addClass('show-offcanvas');
		$('body').addClass('pushed');
		$('.body-inactive').fadeIn(350);
		e.preventDefault();
	});

	// closing ups clicking on the screen
	$('.body-inactive, .coff a').click(function(e){
		$('.offcanvas').removeClass('show-offcanvas');
		$('.body-inactive').fadeOut(350);
		e.preventDefault();
	});

	// Window Resize Orientation Change
	$(window).bind('resize orientationchange',function(){
		wwwh();
	})
})