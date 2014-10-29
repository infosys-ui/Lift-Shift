$(document).ready(function() {
	
	if($('.byod-simcard-holder .product-item-container').length){
		var disclaimerHtml = $('.disclaimer-text span');
	}
	$('.select-phone-section .slick-slide').on('click',function(){
		resetAll();
		
		var thisDevice = $(this);
		var simTargeting = $(this).data('sim-device-target');	
		
		$('.product-item-container').each(function() {
			var simID = $(this).data('sim-device-id');
			var thisSimCard = $(this);
			if (simID === simTargeting) {
				thisSimCard.siblings().removeClass('active').addClass('disabled');
				thisSimCard.addClass('active').removeClass('disabled');
				thisDevice.siblings().removeClass('active');
				thisDevice.addClass('active');
				
				$('.select-phone-section .carousel-responsive').slickPause();
				
				$('.sim-card-section .unselected-text').addClass('hide');
				$('.sim-card-section .selected-text').removeClass('hide');
				
				$('.not-sure-text').addClass('ml50');
				$('.disclaimer-text').empty().html('<a class="phoneReset cta" href="javascript:void(0);">Reset</a>');
			} else {
				thisDevice.siblings().removeClass('active');
				thisDevice.addClass('active');

				$('.select-phone-section .carousel-responsive').slickPause();
			}
		});

		$("html, body").animate({ scrollTop: $('#simcard-holder').offset().top },1000);

		$('.phoneReset').click(function(){
			resetAll();
			$("html, body").scrollTop($('.select-phone-section').offset().top);
		});
	});	
	
	$('.slick-prev, .slick-next, .slick-dots').click(function() {
		resetAll();
	});
	
	function resetAll() {
		$('.slick-slide').removeClass('active');
		$('.product-item-container').removeClass('disabled active');
		$('.disclaimer-text').empty().html(disclaimerHtml);
		$('.select-phone-section .carousel-responsive').slickPlay();
		$('.sim-card-section .unselected-text').removeClass('hide');
		$('.sim-card-section .selected-text').addClass('hide');
		$('.not-sure-text').removeClass('ml50');
	}
});