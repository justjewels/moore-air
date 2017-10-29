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
$('a.scrollTo').on('click',function(e) {

	var target = this.hash;
	var $target = $(target);
	var targetname = target.slice(1, target.length);
	console.log($('.logo-nav').height());
	if(document.getElementById(targetname) != null) {
		e.preventDefault();
		target_offset = $target.offset() ? $target.offset().top : 0;

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
})

	// Window Resize Orientation Change
	$(window).bind('resize orientationchange',function(){
		wwwh();
	})
})