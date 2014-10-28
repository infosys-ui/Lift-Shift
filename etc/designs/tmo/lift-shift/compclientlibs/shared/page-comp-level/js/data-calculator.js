$(document).ready(function() {
		
	var photo, media, apps, gaming, directions, web, emails, totalUsage;
	
	//reset "per" selection
	function resetSelections() {
		$('.select-your-device select option').prop('selected', function() {
			return this.defaultSelected;
		});
	}	
		
		
	function setPlan(value) {	
	
		resetSelections();
		
		//set phone plan
		switch (value) {
			case 1:
			//set usage
			$('.slider-photo').slider('value', 5);
			$('.slider-media').slider('value', 0);
			$('.slider-apps').slider('value', 0);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 0);
			$('.slider-web').slider('value', 10);
			$('.slider-emails').slider('value', 15);
			break;
			
			case 3:
			//set usage
			$('.slider-photo').slider('value', 5);
			$('.slider-media').slider('value', 7);
			$('.slider-apps').slider('value', 2);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 1);
			$('.slider-web').slider('value', 10);
			$('.slider-emails').slider('value', 15);
			break;
			
			case 5:
			//set usage
			$('.slider-photo').slider('value', 10);
			$('.slider-media').slider('value', 10);
			$('.slider-apps').slider('value', 5);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 1);
			$('.slider-web').slider('value', 25);
			$('.slider-emails').slider('value', 20);
			break;
			
			case 7:
			//set usage
			$('.slider-photo').slider('value', 20);
			$('.slider-media').slider('value', 12);
			$('.slider-apps').slider('value', 5);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 2);
			$('.slider-web').slider('value', 35);
			$('.slider-emails').slider('value', 50);
			break;

			case 9:
			//set usage
			$('.slider-photo').slider('value', 20);
			$('.slider-media').slider('value', 20);
			$('.slider-apps').slider('value', 8);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 2);
			$('.slider-web').slider('value', 35);
			$('.slider-emails').slider('value', 60);
			break;

			case 11:
			//set usage
			$('.slider-photo').slider('value', 20);
			$('.slider-media').slider('value', 20);
			$('.slider-apps').slider('value', 10);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 5);
			$('.slider-web').slider('value', 50);
			$('.slider-emails').slider('value', 100);
			break;

			case 13:
			//set usage
			$('.slider-photo').slider('value', 20);
			$('.slider-media').slider('value', 25);
			$('.slider-apps').slider('value', 15);
			$('.slider-gaming').slider('value', 0);
			$('.slider-directions').slider('value', 5);
			$('.slider-web').slider('value', 60);
			$('.slider-emails').slider('value', 125);
			break;

		}		
	}
	
	function calcPlan() {
		
		//get values
		photo = $('.slider-photo').slider('value');
		media = $('.slider-media').slider('value');
		apps = $('.slider-apps').slider('value');
		gaming = $('.slider-gaming').slider('value');
		directions = $('.slider-directions').slider('value');
		web = $('.slider-web').slider('value');
		emails = $('.slider-emails').slider('value');
		
		//inject text
		$('.photo').text(photo);
		$('.media').text(media);
		$('.apps').text(apps);
		$('.gaming').text(gaming);
		$('.directions').text(directions);
		$('.web').text(web);
		$('.emails').text(emails);
		
		//get usage from each slider
		var photoUsage, mediaUsage, appsUsage, gamingUsage, directionsUsage, webUsage, emailsUsage;
		photoUsage = photo * 0.8192 * usage($('#photo'));
		mediaUsage = media * 8 * usage($('#media'));
		appsUsage = apps * 5 * usage($('#apps'));
		gamingUsage = gaming * 24 * usage($('#gaming'));
		directionsUsage = directions * 7 * usage($('#directions'));
		webUsage = web * 1.45 * usage($('#web'));
		emailsUsage = emails * 0.249 * usage($('#emails'));
					
		//get total usages
		totalUsage = Math.floor(photoUsage + mediaUsage + appsUsage + gamingUsage + directionsUsage + webUsage + emailsUsage);
		
		//set recommended data plan
		recommendedPlan();
		
		//set total usage (monthly data usage) text
		$('#total-usage').text(function() {
			if (totalUsage > 1000) {
				totalUsage = totalUsage / 1000;
			}
			return totalUsage;
		});
	}
	
	//calculate usage based on selection of "per day", "per week" or "per month"
	function usage(selection) {
		if (selection.val() === "day") {
			return 30;
		} else if (selection.val() === "week") {
			return 4;
		} else {
			return 1;
		}
	}
	
	function recommendedPlan() {
		
		switch (true) {
			case (totalUsage < 1000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.one').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;
			
			case (totalUsage < 3000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.three').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;
			
			case (totalUsage < 5000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.five').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;
			
			case (totalUsage < 7000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.seven').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;

			case (totalUsage < 9000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.nine').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;

			case (totalUsage < 11000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.eleven').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;

			case (totalUsage > 11000):
			//set 'active' class
			$('.btn.plan').removeClass('active');
			$('.btn.plan.thirteen').addClass('active');
			$('#slider-recommend').slider('value', (totalUsage + 1000));
			break;
		}
		
		if ($('.phone-plan').hasClass('active')) {
			switch (true) {				
				case (totalUsage > 7000):
				//set 'active' class
				$('.btn.plan').removeClass('active');
				$('.btn.plan.seven').addClass('active');
				$('#slider-recommend').slider('value', (totalUsage + 1000));
				break;
			}
		}
	}
	
	if ($('.data-calculator').length) {
		//initiate #slider-recommend		
		$('#slider-recommend').slider({
			animate: true,
			range: "min",
			max: 8000,
			disabled: true
		});
		
		$('.slider-photo').slider({
			animate: true,
			range: "min",
			max: $('.slider-photo').data('day-max'),
			change: calcPlan
		});
		
		$('.slider-media').slider({
			animate: true,
			range: "min",
			max: $('.slider-media').data('day-max'),
			change: calcPlan
		});
		$('.slider-apps').slider({
			animate: true,
			range: "min",
			max: $('.slider-apps').data('day-max'),
			change: calcPlan
		});
		$('.slider-gaming').slider({
			animate: true,
			range: "min",
			max: $('.slider-gaming').data('day-max'),
			change: calcPlan
		});
		$('.slider-directions').slider({
			animate: true,
			range: "min",
			max: $('.slider-directions').data('day-max'),
			change: calcPlan
		});
		$('.slider-web').slider({
			animate: true,
			range: "min",
			max: $('.slider-web').data('day-max'),
			change: calcPlan
		});
		$('.slider-emails').slider({
			animate: true,
			range: "min",
			max: $('.slider-emails').data('day-max'),
			change: calcPlan
		});
		
		
		//click event on "phone" plan buttons - set values
		//var planValue;
		$('.btn.plan').click(function() {
			var num = parseInt($(this).data('plan').substr(4));
			setPlan(num);
		});
		
		
		//set max text
		$('[id*="-max"]').text(function() {
			return $(this).prev().slider('option', 'max');
		});
		
		//initiate plan
		$('.btn.plan.seven').trigger('click');	
		
		//change "per" selection		
		$('.select-your-device select').change(function() {
			var id = $(this).attr('id');
			if ($(this).val() === 'day') {
				//set slider max
				$('.slider-'+id).slider('option', 'max', $('.slider-'+id).data('day-max'));
				//change max text
				$('#'+id+'-max').text($('.slider-'+id).slider('option', 'max'));
				
			} else if ($(this).val() === 'week') {
				//set slider max
				$('.slider-'+id).slider('option', 'max', ($('.slider-'+id).data('day-max') * 3));
				//change max text
				$('#'+id+'-max').text($('.slider-'+id).slider('option', 'max'));

			} else {
				//set slider max
				$('.slider-'+id).slider('option', 'max', ($('.slider-'+id).data('day-max') * 10));
				//change max text
				$('#'+id+'-max').text($('.slider-'+id).slider('option', 'max'));

			}
			calcPlan();
		});
					
	}
	
	//Select device event
	$('.select-devices .btn').click(function() {
		//set active class to button
		$('.select-devices .btn').removeClass('active');
		$(this).addClass('active');
		
		if ($(this).hasClass('select-phone')) {
			
			//click on "phone" button
			$('.recommended-plan .phone-plan').addClass('active');
			$('.recommended-plan .tablet-plan').removeClass('active');
			$('.btn.plan.seven').trigger('click');
			$('#slider-recommend').slider({max: 8000});
			
		}
		else {
			$('.recommended-plan .phone-plan').removeClass('active');
			$('.recommended-plan .tablet-plan').addClass('active');
			$('#slider-recommend').slider({max: 14000});
			
			//click on "tablet" button
			if ($(this).hasClass('select-tablet')) {
				
				$('.btn.plan.one').trigger('click');
			} else {
				
				//click on "hotspot" button
				$('.btn.plan.five').trigger('click');
			}
		}
	});
	
	
	//make the recommended data plan fixed position
	if ($('.recommended-plan').length) {
		
		window.setTimeout(function() {
			var dataTop = $('.recommended-plan');
			var atTop = dataTop.find('.btn-group').offset().top;
			var topPos = dataTop.offset().top - atTop;
			
			var dataSpace = $('.recommended-plan').outerHeight() + 45 + 'px';							
			$(window).scroll(function() {			
				if ($(window).scrollTop() > atTop) {
					dataTop.css({'position':'fixed', top: topPos});
					$('.data-calculator .box-holder').css('margin-top', dataSpace);
				} else {
					dataTop.css({'position':'relative', top: 0});
					$('.data-calculator .box-holder').css('margin-top', 0);
				}
			});
		},1500);
	}
	
	
});