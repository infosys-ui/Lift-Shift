$(document).ready(function() {

	/********************************************************
	 Hero carousel color selections
	********************************************************/
	$('.color-switch').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
		var selectedOption = $(this).data('options');
		$('#options').find('img').each(function() {
			var newColor = $(this).attr('src').replace(/(-gold|-silver|-white|-black|-gray|-red|-green|-blue|-yellow|-brown|-orange)/, '-'+selectedOption);
			$(this).attr('src', newColor);
		});
	});


	$('#myTab a').click(function() {
		e.preventDefault();
		$(this).tab('show');

	});



	/***** Create the camera popover **************/

	var cameraT = $('#camera').html();
	var options = {
		content: '<div class="camera_content">' + cameraT + '</div>',
		html: true,
		placement: 'right'
	};

	$('.gallery-pin1').popover(options);

	/***** Dismiss all popovers by clicking outside, don't dismiss if clicking inside the popover content  **************/

	$('html').on('click', function(e) {
		if (typeof $(e.target).data('original-title') === 'undefined' &&
			!$(e.target).parents().is('.popover.in')) {
			$('[data-original-title]').popover('hide');
		}

	});


	/***** Create the monitor popover **************/

	var monitorT = $('#monitor').html();
	$('.gallery-pin2').popover({
		content: '<div class="monitor_content">' + monitorT + '</div>',
		html: true,
		placement: 'right'
	});

	/***** Dismiss all popovers by clicking outside, don't dismiss if clicking inside the popover content  **************/

	$('html').on('click', function(e) {
		if (typeof $(e.target).data('original-title') === 'undefined' &&
			!$(e.target).parents().is('.popover.in')) {
			$('[data-original-title]').popover('hide');
		}
	});


	/***** Create the durability popover **************/

	var durabilityT = $('#durability').html();
	$('.gallery-pin3').popover({
		content: '<div class="durability_content">' + durabilityT + '</div>',
		html: true,
		placement: 'right'
	});

	/***** Dismiss all popovers by clicking outside, don't dismiss if clicking inside the popover content  **************/

	$('html').on('click', function(e) {
		if (typeof $(e.target).data('original-title') === 'undefined' &&
			!$(e.target).parents().is('.popover.in')) {
			$('[data-original-title]').popover('hide');
		}
	});

	/***** Create the disply popover **************/

	var displayT = $('#display').html();
	$('.gallery-pin4').popover({
		content: '<div class="display_content">' + displayT + '</div>',
		html: true,
		placement: 'bottom'
	});

	/***** Dismiss all popovers by clicking outside, don't dismiss if clicking inside the popover content  **************/

	$('html').on('click', function(e) {
		if (typeof $(e.target).data('original-title') === 'undefined' &&
			!$(e.target).parents().is('.popover.in')) {
			$('[data-original-title]').popover('hide');
		}
	});

	/***** Create the scanner popover **************/

	var scannerT = $('#scanner').html();
	$('.gallery-pin5').popover({
		content: '<div class="scanner_content">' + scannerT + '</div>',
		html: true,
		placement: 'top'
	});

	/***** Dismiss all popovers by clicking outside, don't dismiss if clicking inside the popover content  **************/

	$('html').on('click', function(e) {
		if (typeof $(e.target).data('original-title1') === 'undefined' &&
			!$(e.target).parents().is('.popover1 .in')) {
			$('[data-original-title1]').popover('hide');
		}
	});

	/***** Open & collapse functionality **************/

	$('.gallery_plus').on('show.bs.popover', function() {
		$('.popover').removeClass('in');
	});

	$('.feature-gallery-image > a').click(function() {

		if ($(this).hasClass('gallery_plus')) {
			$(this).addClass('gallery_minus').removeClass('gallery_plus');
			$(this).siblings('a').removeClass('gallery_minus').addClass('gallery_plus');
		} else {
			$(this).toggleClass('gallery_plus').removeClass('gallery_minus');
		}

	});

	$('li[data-type*="#pin1"] > a').click(function() {
		$('.gallery-pin4').addClass('current');
		$('.gallery-pin4').siblings('a').removeClass('current');
	});
	$('li[data-type*="#pin2"] > a').click(function() {
		$('.gallery-pin1').addClass('current');
		$('.gallery-pin1').siblings('a').removeClass('current');
	});
	$('li[data-type*="#pin3"] > a').click(function() {
		$('.gallery-pin2').addClass('current');
		$('.gallery-pin2').siblings('a').removeClass('current');
	});
	$('li[data-type*="#pin4"] > a').click(function() {
		$('.gallery-pin5').addClass('current');
		$('.gallery-pin5').siblings('a').removeClass('current');
	});
	$('li[data-type*="#pin5"] > a').click(function() {
		$('.gallery-pin3').addClass('current');
		$('.gallery-pin3').siblings('a').removeClass('current');
	});


	//selected-plan-float
	
	function affixFeature() {
		var docHeight = $(document).height();
		if ($('footer').css('position') === 'fixed') {
			docHeight = $(document).height() + $('footer').outerHeight();
		}
		
		var topReferenceContent = $('.float-div');
		var botReferenceContent = $('.float-div');
		var topLine = topReferenceContent.offset().top;
		var bottomOffLine = docHeight - botReferenceContent.offset().top - botReferenceContent.outerHeight();
		//bottomOffLine = 2568;
		
		$('.container_float-nav.affix').affix({
			offset: {
				top: topLine,
				bottom: function(){
					return (this.bottom = bottomOffLine);
				}
			}
		});
	}
	
	window.setTimeout(function() {
		docHeight = $(document).height();
		affixFeature();
	},1000);
	
	if ($('.affix').length) {
		$(window).resize(_.debounce(function(){
				window.location.reload();
		}, 500));
	}
	//selected-plan-float

	//play video
	$('.video1').click(function() {
		var video1 = document.getElementById("ui_learn-about-account");
		video1.play();
	});
	

	/* promo-carousel */
	$('#promo-carousel').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		arrows: true,
		infinite: false,
		pauseOnHover: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: true,
					autoplay: true,
					infinite: false,
					swipe: true,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					arrows: true,
					autoplay: true,
					infinite: false,
					swipe: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	/* cell-phone carousel */
	$('#cell-phone-carousel').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 750,
		dots: true,
		arrows: true,
		infinite: true,
		pauseOnHover: true,
		swipe: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
	
	/* Accessories Selection */
	
});
