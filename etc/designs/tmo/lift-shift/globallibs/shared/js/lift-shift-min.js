
$(document).ready(function(){
	
	/*****************************************
	 add "js" class to html
	 *****************************************/
	$('html').removeClass('no-js').addClass('js');
	
	
	
	/*****************************************
	 fallback ie8 for selectpicker
	 *****************************************/
	if ($('.ua-ie-8').length) {
		$('.selectpicker').removeClass('selectpicker');
		$('link[rel=stylesheet][href~="bootstrap-select"]').remove();
	}
	
	
	
	/*****************************************
	 fallback support for ie8 striped table	
	 *****************************************/
	$('.ua-ie-8 .table-striped').find('tr:odd td, tr:odd th').css('background-color','#f2f2f2');
	
	
	
	/*****************************************
	 fix viewport issues on MSIE
	******************************************/
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style");
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}
	



	/********************************************
	 vertical positioning
	 ********************************************/
	function verticalAlignMiddle() {
		if ($('.v-align-middle').length) {
			
			$('.v-align-middle').each(function() {
				var parentEle = $(this).parent();
				if (parentEle.is('a')) {
					parentEle = $(this).parent().parent();
				}
				var middleHeight = parentEle.outerHeight()/2;
				var middleThis = $(this).outerHeight()/2;
								
				//set this element in the middle of its parent/container vertically
				parentEle.css('position','relative');
				$(this).css({'position':'absolute', 'top':middleHeight-middleThis, 'margin-top':0, 'padding-top':0});
			});
		}
	}
	verticalAlignMiddle();
	$(window).resize(function(){
		verticalAlignMiddle();
	});
	
	
	
	/*********************************************
	 swaping images src
	 *********************************************/
	function searchImg() {
		if ($('img[class*="img-"]').length) {
			$('img[class*="img-"]').each(function(){
	
				//320
				if ($(this).attr('class').indexOf('-320') !== -1) {
					swapImg($(this), 320, 600);
				}
	
				//480
				if ($(this).attr('class').indexOf('-480') !== -1) {
					swapImg($(this), 480, 600);
				}
				
				//600
				if ($(this).attr('class').indexOf('-600') !== -1) {
					swapImg($(this), 600, 768);
				}
	
				//768
				if ($(this).attr('class').indexOf('-768') !== -1) {
					swapImg($(this), 768, 930);
				}
	
				//930
				if ($(this).attr('class').indexOf('-930') !== -1) {
					swapImg($(this), 930, 1200);
				}
	
				//1200
				if ($(this).attr('class').indexOf('-1200') !== -1) {
					swapImg($(this), 1200, 3000);
				}
	
			});
		}
	}
	function swapImg(thisImg, bp, _bp) {
		if (($(window).width() >= bp) && $(window).width() < _bp) {
			var newPath = thisImg.attr('src').replace(/(\.320|\.480|\.600|\.768|\.930|\.1200)?\.(png|jpg|gif)/, '.'+bp+'.$2');		
			thisImg.attr('src', newPath);
		} else {
			var re = new RegExp('.'+bp);
			var path = thisImg.attr('src').replace(re, '');
			thisImg.attr('src', path);
		}
	}
	searchImg();
	$(window).resize(function(){
		searchImg();
	});
	
	
	
	/***************************************************
	 swaping background image
	 ***************************************************/
	function searchBackgroundImage() {
		if ($('[class*="bg-"]').length) {
			$('[class*="bg-"]').each(function(){
	
				//320
				if ($(this).attr('class').indexOf('-320') !== -1) {
					swapBackground($(this), 320, 600);
				}
	
				//480
				if ($(this).attr('class').indexOf('-480') !== -1) {
					swapBackground($(this), 480, 600);
				}
				
				//600
				if ($(this).attr('class').indexOf('-600') !== -1) {
					swapBackground($(this), 600, 768);
					//console.log($(this).data('background-src'));
				}
	
				//768
				if ($(this).attr('class').indexOf('-768') !== -1) {
					swapBackground($(this), 768, 930);
				}
	
				//930
				if ($(this).attr('class').indexOf('-930') !== -1) {
					swapBackground($(this), 930, 1200);
				}
	
				//1200
				if ($(this).attr('class').indexOf('-1200') !== -1) {
					swapBackground($(this), 1200, 3000);
				}
	
			});
		}
	}
	function swapBackground(thisElement, bp, _bp) {
		var originalPath = thisElement.data('background-src');
		var newPath;
		if (($(window).width() >= bp) && $(window).width() < _bp) {
			newPath = originalPath.replace(/(\.320|\.480|\.600|\.768|\.930|\.1200|\.dsk|\.mob)?\.(png|jpg|gif)/, '.'+bp+'.$2');		
			thisElement.css({'background-image':'url('+newPath+')', 'background-repeat':'no-repeat'});
		} else {
			
			//var re = new RegExp('.'+bp);
			//var path = thisElement.css('background-image');
			if ($(window).width() >= 600) {
				//desktop version
				
				//data-background-target="desktop"
				if (thisElement.data('background-target') === 'desktop') {
					thisElement.css({'background-image':'url('+originalPath+')', 'background-repeat':'no-repeat'});				
				}
				//data-background-target="mobile"
				if (thisElement.data('background-target') === 'mobile') {
					thisElement.css({'background-image':'url('+originalPath+')', 'background-repeat':'no-repeat'});				
				}
			} else {
				//mobile version: screen size is less than 600px
				
				thisElement.css({'background-image':'url("")'});				
			}
		}
	}
	searchBackgroundImage();	
	$(window).resize(function(){
		searchBackgroundImage();
	});
	
	
	
	/***************************************************
	 accordion component
	 ***************************************************/
	//var listing;
	
	function accordionClickEvent(listing) {
		
		listing.click(function(){
			if ($(this).parent().hasClass('active')) {
				//if the listing is active
				$(this).siblings('.detail').slideUp(function(){
					$(this).parent().removeClass('active');
				});
			} else {
				//if the listing is not active
				
				//close all listing
				listing.each(function(){
					$(this).siblings('.detail').slideUp(function(){
						$(this).parent().removeClass('active');
					});
				});
				
				//open this listing
				$(this).siblings('.detail').slideDown(function(){
					$(this).parent().addClass('active');
				});
			}
		});
	}
	accordionClickEvent($('.accordion > li > a'));
	
	function accordionToggle(listing) {
		listing.click(function() {
			
			//toggle collapse detail
			$(this).siblings('.detail').slideToggle(function() {
				//toggle class
				$(this).parent().toggleClass('active');
			});
		});
	}
	accordionToggle($('.leadership-team .accordion-leadership > li > a'));
	
	/*******************************************************
	 enable Bootstrap-select
	 *******************************************************/
	$('.selectpicker').selectpicker();
	 
	 

	/********************************************************
	 whytmo Bootstrap carousel with animation
	 *******************************************************/
	 
	//loading html page into template via ajax
	if ($('.whytmo').length) {

		$('.slide-holder').each(function() {
			$(this).empty().load($(this).data('html-target') + ' #html-slide', function(){
				searchBackgroundImage();
			});
		});
	}


	/*******************************************************
	 swap event on mobile device for Bootstrap carousel
	 *******************************************************/
	var mousePos, currentMousePos;
	
	function ieTouchPos(event) {
		currentMousePos = event.clientX + document.body.scrollLeft;
//		$('.mousemove').text(currentMousePos);
		
		//mouse is move to right
		if ((currentMousePos - mousePos) > 30) {
			$(this).stop().carousel('prev');
			document.removeEventListener("MSPointerMove", ieTouchPos, false);
		} else if ((currentMousePos - mousePos) < -30) {
		//mouse is move to left
			$(this).stop().carousel('next');
			document.removeEventListener("MSPointerMove", ieTouchPos, false);
		} else {
		//mouse is not moving
			return;
		}
	}
	 
	 if (window.navigator.msPointerEnabled) {
		
		$(document).on('vmousedown touchstart', '.carousel', function(event){
			mousePos = event.clientX + document.body.scrollLeft;
//			$('.mousedown').text(mousePos);
			
			document.addEventListener("MSPointerMove", ieTouchPos, false);
			
			$(document).on('vmouseup touchend', function(){
				document.removeEventListener("MSPointerMove", ieTouchPos, false);
			});
		});
		
				 
	 } else {
		$(document).on('vmousedown', '.carousel', function(event) {
			mousePos = event.pageX;
			
			$(document).on('vmousemove', '.carousel', function(event) {
				currentMousePos = event.pageX;
				
				//mouse is move to right
				if ((currentMousePos - mousePos) > 30) {
					$(this).stop().carousel('prev');
				} else if ((currentMousePos - mousePos) < -30) {
				//mouse is move to left
					$(this).stop().carousel('next');
				} else {
				//mouse is not moving
					return;
				}
			});
			$(document).on('vmouseup', function() {
				//cancel mousemove event
				$(this).off('vmousemove');
				return;
			});
		});
	 }


	/********************************************************
	 home page carousel control show/hide at 1st or last slide
	 *******************************************************/

	$('#carousel-main, #carousel-small').on('slid.bs.carousel', function () {
		//if 1st slide is active
		if ($(this).find('.item.active').index() === 0) {
			$(this).find('.carousel-control.left').hide();
		} else {
		//if 1st slide is not active
			$(this).find('.carousel-control.left').show();
		}
		
		//if the last slide is active
		if ($(this).find('.item.active').index() === ($(this).find('.item').length - 1)) {
			$(this).find('.carousel-control.right').hide();
		} else {
		//if the last slide is not active
			$(this).find('.carousel-control.right').show();
		}
	});


	/********************************************************
	 About T-Mobile Ajax loader
	 *******************************************************/
	if ($('.company-info').length) {
		$('.company-info').find('#overview.content-holder').empty().load("company-info-overview.html #contents", function() {
			accordionToggle($('.leadership-team .accordion-leadership > li > a'));
		});
		$('.company-info').find('#awards.content-holder').empty().load("company-info-awards.html #contents");
		$('.company-info').find('#regulatory.content-holder').empty().load("company-info-government.html #contents");
		$('.company-info').find('#jobs.content-holder').empty().load("company-info-job.html #contents");
		$('.company-info').find('#consumer.content-holder').empty().load("company-info-consumer.html #contents");
		$('.company-info').find('#safety.content-holder').empty().load("company-info-safety.html #contents");
		$('.company-info').find('#unlock.content-holder').empty().load("company-info-sim-unlockpolicy.html #contents", function(){
			window.setTimeout(function() {
				accordionClickEvent($('.accordion > li > a'));
				aboutSubNav();
			},1000);
		});
	}

	$('.company-info').find('.nav-pills li>a').click(function(){
		
		//add active to highlight the listing tag
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		
		//open relevant content
		var targetId = $(this).parent('li').data('target-content');
		$('.company-info').find('article .content-holder').removeClass('active');
		$('.company-info').find('article '+targetId+'.content-holder').addClass('active');
	});
	
	
	
	/********************************************************
	 Privacy Resources Ajax loader
	 *******************************************************/
	if ($('.privacy-resources').length) {
		
		$('.privacy-resources').find('#security.content-holder').empty().load("privacy-resources-security.html #contents");
		$('.privacy-resources').find('#customer.content-holder').empty().load("privacy-resources-customer-proprietary.html #contents");
		$('.privacy-resources').find('#identity.content-holder').empty().load("privacy-resources-identity.html #contents");
		$('.privacy-resources').find('#marketing.content-holder').empty().load("privacy-resources-marketingchoice.html #contents");
		$('.privacy-resources').find('#phishing.content-holder').empty().load("privacy-resources-phishingsmishing.html #contents");
        $('.privacy-resources').find('#device.content-holder').empty().load("privacy-resources-deviceapps.html #contents");
        $('.privacy-resources').find('#location.content-holder').empty().load("privacy-resources-locationservices.html #contents");
        $('.privacy-resources').find('#blocking.content-holder').empty().load("privacy-resources-blocking.html #contents");
        $('.privacy-resources').find('#protecting.content-holder').empty().load("privacy-resources-protectingyourprivacy.html #contents", function(){
			window.setTimeout(function() {
				accordionClickEvent($('.accordion > li > a'));
				aboutSubNav();
			},1000);
		});
	}

	$('.privacy-resources').find('.nav-pills li>a').click(function(){
		
		//add active to highlight the listing tag
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		
		//open relevant content
		var targetId = $(this).parent('li').data('target-content');
		$('.privacy-resources').find('article .content-holder').removeClass('active');
		$('.privacy-resources').find('article '+targetId+'.content-holder').addClass('active');
	});
	 
	/********************************************************
	 Legal Notices Ajax loader
	 *******************************************************/
	if ($('.legal-notices').length) {
		
		$('.legal-notices').find('#Licenses.content-holder').empty().load("tmo-notices-legal.html #contents");
        $('.legal-notices').find('#legal.content-holder').empty().load("tmo-notices-Licensesandpatents.html #contents");
        $('.legal-notices').find('#trademarks.content-holder').empty().load("tmo-notices-trademarks.html #contents", function(){
			window.setTimeout(function() {
				accordionClickEvent($('.accordion > li > a'));
				aboutSubNav();
			},1000);
		});
	}

	$('.legal-notices').find('.nav-pills li>a').click(function(){
		
		//add active to highlight the listing tag
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		
		//open relevant content
		var targetId = $(this).parent('li').data('target-content');
		$('.legal-notices').find('article .content-holder').removeClass('active');
		$('.legal-notices').find('article '+targetId+'.content-holder').addClass('active');
	});
	

	/********************************************************
	 working-tmo Ajax loader
	 *******************************************************/
	if ($('.working-tmo').length) {
		$('.working-tmo').find('#affiliate.content-holder').empty().load("working-tmo-affiliate-program.html #contents");
		$('.working-tmo').find('#procurement.content-holder').empty().load("working-tmo-procurement.html #contents");
		$('.working-tmo').find('#retailer.content-holder').empty().load("working-tmo-retailer.html #contents");
		$('.working-tmo').find('#partnerships.content-holder').empty().load("working-tmo-partnerships.html #contents", function(){
			$('.selectpicker').selectpicker();
		});
		$('.working-tmo').find('#supplier.content-holder').empty().load("working-tmo-supplier.html #contents", function(){
			window.setTimeout(function() {
				accordionClickEvent($('.accordion > li > a'));
				aboutSubNav();
			},1000);
		});
	}

	$('.working-tmo').find('.nav-pills li>a').click(function(){
		
		//add active to highlight the listing tag
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		
		//open relevant content
		var targetId = $(this).parent('li').data('target-content');
		$('.working-tmo').find('article .content-holder').removeClass('active');
		$('.working-tmo').find('article '+targetId+'.content-holder').addClass('active');
	}); 
	

	/********************************************************
    Community & Sponsorships Ajax loader
    *******************************************************/
    if ($('.community-sponsorships').length) {

		$('.community-sponsorships').find('#community.content-holder').empty().load("community-sponsorships-community.html #contents");
	    $('.community-sponsorships').find('#sponsorships.content-holder').empty().load("community-sponsorships-overview.html #contents");
	    $('.community-sponsorships').find('#phone-recycling-program.content-holder').empty().load("community-sponsorships-phone-recycling.html #contents", function(){
			window.setTimeout(function() {
				accordionClickEvent($('.accordion > li > a'));
				aboutSubNav();
			},1000);
	    });
	     
	}

	$('.community-sponsorships').find('.nav-pills li>a').click(function(){
					
		//add active to highlight the listing tag
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		
		//open relevant content
		var targetId = $(this).parent('li').data('target-content');
		$('.community-sponsorships').find('article .content-holder').removeClass('active');
		$('.community-sponsorships').find('article '+targetId+'.content-holder').addClass('active');

	});

	
	/********************************************************
	Contact us "show more/fewer questions" toggle function
	*******************************************************/
	$('.over-limit').on('shown.bs.collapse', function() {
		$('.show-toggle').empty().text('Show fewer questions').append('<span class="expanded-view"></span>');
	}).on('hide.bs.collapse', function() {
		$('.show-toggle').empty().text('View 7 more questions').append('<span class="collapsed-view"></span>');
	});

	/*******************************************************
	filter toggle for cell-phone.html
	*******************************************************/
	$('.filter, .up-arrow').click(function(){
		$('.filter_hidden').slideToggle(400);
		
		if($('.filter > a > span').hasClass('icon-expand')){
			$('.filter > a > span').toggleClass('icon-expand').addClass('icon-collapse');
		}
		else{
			$('.filter > a > span').toggleClass('icon-collapse').addClass('icon-expand');
		}
	});
	
	
	/*******************************************************
	Custom Tool Tip
	*******************************************************/
//	$('.tool-icon').hover(function(){
//		$('.tool-tip').fadeIn();
//	}, function() {
//		$('.tool-tip').fadeOut();
//	});
	$('.tool-icon').click(function(){
		$('.tool-tip').fadeToggle();
	});	 
	
//	$('*:not(.tool-icon)').click(function() {
//		console.log('got you');
//		//$('.tool-tip').fadeOut();
//	});
	 
	/********************************************************
	 About T-Mobile sub navigation
	********************************************************/
	function aboutSubNav() {
		$('#contents nav li > a').click(function(){
			var targetId = $(this).data('target-content');
			
			$('#contents li[id*="item"]').removeClass('active');
			$('#contents li[id='+targetId+']').addClass('active');
			
		});
	}
	
	
	/********************************************************
	 PHP page table events
	********************************************************/
	//show and hide description
	$('.table-jump .row1').find('.col2, .col3, .col4').click(function() {
		if ($(window).width() < 600) {
			$('.table-jump .row2').toggle('show', function() {
				$('.table-jump .row1 h3 span').toggleClass('active');
			});
		}
	});
	
	//show and hide program
	$('.jump-selection select').change(function() {
		var selectedClass = $(this).val();
		$('.table-jump .col2, .table-jump .col3, .table-jump .col4').hide();
		$('.table-jump .'+selectedClass).show();
	});
	
	//show up all column for large screen
	$(window).resize(function() {
		if ($(window).width() >= 600) {
			$('.table-jump .col2, .table-jump .col3, .table-jump .col4').show();
			$('.table-jump .row2').show(function() {
				//$('.table-jump .row1 h3 span').activeClass('active');
			});
		} else {
			$('.table-jump .col3, .table-jump .col4').hide();
			$('.table-jump .col2').show();
			$('.table-jump .row2').hide(function() {
				$('.table-jump .row1 h3 span').removeClass('active');
			});
		}
	});



	/********************************************************
	 Data Calculator sliders
	********************************************************/
	
	//$('.recommend-slider').slider('step', 4);
	
	//make sliders touchable	 
	$('#widget').draggable();

	 
	 


	/********************************************************
	 About page fix navigation bugs
	********************************************************/
	
	if (!$('.ua-firefox').length && ($('.nav-justified li + div').length || $('.ua-safari .nav-justified').length)) {
		$(window).resize(_.debounce(function(){
			window.location.reload();
		}, 500));
	}


	/********************************************************
	 home page slick carousels
	********************************************************/
	$('#home-hero-carousel, .carousel-123').slick({
		autoplay: true,
		dots: true,
		arrows: true,
		infinite: false,
		speed: 500,
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
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$('#accessories-carousel, .carousel-no-dots').slick({
		autoplay: true,
		dots: false,
		arrows: true,
		infinite: false,
		speed: 350,
		pauseOnHover: true,
		swipe: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	/********************************************************
	 General .carousel slick carosel js
	 ********************************************************/
	$('.carousel').slick({
		autoplay: true,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 800,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		swipe: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
	
	
	/********************************************************
	 .carousel-responsive slick carosel js
	 ********************************************************/
	
	$('.carousel-responsive, #promo-accessoriescarousel, #carousel-phone-deals-first, #carousel-phone-deals-second, #carousel-phone-deals-third').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		swipe: true,
		infinite: false,
		pauseOnHover: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1200, 
	
				settings: {
					arrows: true,
					dots: true,
					autoplay: true,
					slidesToShow: 3,
					slidesToScroll: 3,
	
				}
			},
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					dots: true,
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					dots: true,
					autoplay: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		
		]
	});
	
	

	/***************************************************
	 floating nav
	***************************************************/
	if ($('.fademenu-holder').length) {
		$(window).scroll(function() {
			var floatNavTop = $('.fademenu-holder').offset().top + 60;
	
			if ($(this).scrollTop() > floatNavTop) {
					$('#fademenu').fadeIn();
				} 
			else {
				$('#fademenu').fadeOut();
			}	

			/***************************************************
				Onscroll active nav
			***************************************************/

			if ($('#fademenu ul li a').length) {
				var scrollPos = $(document).scrollTop();
				$('#fademenu ul li a').each(function () {
					var currLink = $(this);
					if ($(currLink.attr("href")).length) {
						var refElement = $(currLink.attr("href"));
						var refElementTop = refElement.position().top <= scrollPos;
						var refElementBot = refElement.position().top + refElement.height() > scrollPos;
						
						if (refElementTop && refElementBot) {
							$('#menu-center ul li').removeClass("active");
							currLink.parent().addClass("active");
						}
						else{
							currLink.parent().removeClass("active");
						}
					} else {
						return;
					}
				});
			}

		});

		/***************************************************
			Onclick active nav
		***************************************************/

		$('#fademenu ul li').click(function() {
		    var target = $(this).find('a').attr('href');
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 1000);
		});

		var container_width = $('.container').width() - 2;
		$('#fademenu, #fademenu1, #fademenu2').width(container_width);
	
		$(window).resize(function() {
			var container_width = $('.container').width() - 2;
			$('#fademenu, #fademenu1, #fademenu2').width(container_width);
	
		});

	}

	/***************************************************
	 Prepaid - Page scrolling
	***************************************************/
	$('.activation-tips').click(function(){
		if($('.support-tab').length){
			$("html, body").animate({ scrollTop:"900px"});
		}
	});
	
	/***************************************************
	 cell phone page select box popup 
	***************************************************/
	if($('.credit-rating').length){
		$('.credit-rating').click(function(){
			$('.credit-rating > .dropdown-menu > ul').addClass('enable-model');
			$('.enable-model li a span').parent('a').parent('li').attr('data-toggle','modal');
			$('.enable-model li a span:contains(No Credit Check)').parent('a').parent('li').attr('data-target','#Building-Credit-modal');
			$('.enable-model li a span:contains(Building Credit)').parent('a').parent('li').attr('data-target','#no-credit-check-modal');
		});
	}


	/****************************
	* Filtering Features
	****************************/
	
	if ($('#brands').length) {
		
		var brands, categories, priceRange;
		
		$('#categories, #brands, #price-range').change(function() {
	
			//get the brands value
			if ($(this).attr('id') === "brands") {			
				if ($(this).val() === null || $(this).val().join().indexOf('reset') !== -1) {
					$(this).selectpicker('deselectAll');
					brands = null;
				} 
				else {
					brands = $(this).val();
				}
			} 
			
			//get the categories value
			if ($(this).attr('id') === "categories") {
				
				if ($(this).val() === null || $(this).val().join().indexOf('reset') !== -1) {
					$(this).selectpicker('deselectAll');
					categories = null;
				} else {
					categories = $(this).val();
				}
			}
			
			//get the price range value
			if ($(this).attr('id') === "price-range") {
				
				if ($(this).val() === null || $(this).val().join().indexOf('reset') !== -1) {
					$(this).selectpicker('deselectAll');
					priceRange = null;
				} else {
					priceRange = $(this).val();
				}
			}
			
			showProducts();
		});
	}

	
	//show selected products
	function showProducts() {
		
		$('.product-item').each(function() {
			var prodInfo = $(this).find('.product-info').text().toLowerCase();
			var priceInfo = parseInt($(this).find('.price-info').text().match(/\$?\d{1,6}/)[0].substr(1));
			if ($(this).find('sup').length) {
				priceInfo = priceInfo / 100;
			}
			var filterScore = 0, priceRangeScore = 0;
						
			//check if match selectedBrands value
			if (brands) {
				
				//convert selectedBrands to string with one space, and convert back to array
				brands = brands.join(" ").toLowerCase().split(" ");
				
				//check if there is any matching brands
				for (var i=0; i<brands.length; i++) {
					if (prodInfo.indexOf(brands[i]) !== -1) {
						filterScore++;
					}
				}
			}
			
			//check if match selectedCategories value
			if (categories) {
				
				//convert selectedCategories to string with one space, and convert back to array
				categories = categories.join(" ").toLowerCase().split(" ");
				
				//check if there is any matching categories			
				for (var j=0; j<categories.length; j++) {
					if (prodInfo.indexOf((categories[j]).toString() + " ") !== -1) {
						filterScore++;
					}
				}
			}
			
			//check price range
			if (priceRange) {
				
				//check price reange matching items
				for (var k=0; k<priceRange.length; k++) {
					if (priceRange.join().indexOf("0-15") !== -1 && priceInfo >= 0 && priceInfo < 15) {
						priceRangeScore++;
					}
					if (priceRange.join().indexOf("15-30") !== -1 && priceInfo >= 15 && priceInfo < 30) {
						priceRangeScore++;
					}
					if (priceRange.join().indexOf("30-50") !== -1 && priceInfo >= 30 && priceInfo < 50) {
						priceRangeScore++;
					}
					if (priceRange.join().indexOf("50-80") !== -1 && priceInfo >= 50 && priceInfo < 80) {
						priceRangeScore++;
					}
					if (priceRange.join().indexOf("80+") !== -1 && priceInfo >= 80) {
						priceRangeScore++;
					}
				}
			}

			//show or hide products
			
			//eighter fliters (brands or categories) or price ranges selected, they should work on selected items
			if (($('#brands').val() !== null || $('#categories').val() !== null) && $('#price-range').val() !== null) {
				if (filterScore > 0 && priceRangeScore > 0) {
					$(this).show();
				} else { 
					$(this).hide();
				}
			} 
			//otherwise, it should be considered as a single selection
			else if ($('#price-range').val() === null) {
				if (filterScore > 0) {
					$(this).show();
				} else {
					$(this).hide();
				}
			}
			else {
				if (filterScore > 0 || priceRangeScore > 0) {
					$(this).show();
				} else {
					$(this).hide();
				}
			}	
			
		});
		
		//Reset all - if all selections have "Reset"
		if ($('#brands').val() === null && $('#categories').val() === null && $('#price-range').val() === null) {
			$('.product-item').show();
		}
			
	}
	

	/****************************
	* Sorint Prices Features
	****************************/
	
	if ($('#price-sorting').length) {
		//consolidate the pricing div with <sup>
		$('.product-item').each(function() {
			if (!$(this).find('sup').length) {
				$(this).find('.price-info').append('<sup>00</sup>');
			}
		});
		
		//deselect the price sorting at page refresh
		$('#price-sorting').selectpicker("deselectAll").selectpicker("refresh");
		$('#price-sorting').val(null);
		
		//get the price sorting value
		$('#price-sorting').change(function() {
			sortPrices();
		});
	}
	
	//sorting prices
	function sortPrices() {
		//setup an array
		var visibleItemHTMLArray = [];
		
		//make a visible items into an array
		$('.product-item:visible').each(function() {
			visibleItemHTMLArray.push($(this).html());
		});
		
		//sorting the visible item array
		visibleItemHTMLArray.sort(numericalSort);
		
		if ($('#price-sorting').val() == "high-to-low") {
			$('.product-item').each(function() {
				$(this).html(visibleItemHTMLArray.pop());
			});
		} 
		else {
			$('.product-item').each(function() {
				$(this).html(visibleItemHTMLArray.shift());
			});
		}
	}
	
	//sorting numeral function
	function numericalSort(a, b) {
		var aPrice = parseInt($(a).find('.price-info').text().match(/\$?\d{1,6}/)[0].substr(1));
		var bPrice = parseInt($(b).find('.price-info').text().match(/\$?\d{1,6}/)[0].substr(1));

		return (aPrice - bPrice);
	}
	
	
	/****************************
	* Searching Products Features
	****************************/
	
	if ($('#search-products').length) {
		
		//setup an array
		var productsInfoArray = [];
		
		$('.product-item').each(function() {
			var info = $.trim($(this).find('.product-info').text().toLowerCase());
			productsInfoArray.push(info);
		});
			
		//auto complete function
		$('#search-products').autocomplete({
			source: productsInfoArray,
			response: function() {
				getSearchResult();
			},
			close: function() {
				getSearchResult();
			}
		});
		
		//searching products display
		$('#search-form').submit(function() {
			getSearchResult();
		});
		
	}

	function getSearchResult() {
		var searchedVal = $('#search-products').val().toLowerCase();
		
		$('.product-item').each(function() {
			var thisInfo = $(this).find('>div>div:first').text().toLowerCase();
			
			if (thisInfo.indexOf(searchedVal) !== -1) {
				$(this).show();
			} else {
				$(this).hide();
			}
			
		});
	}
	
	//clearup the search field
	$('#search-products').focus(function() {
		$(this).val("");
	});
	
	if ($('#show-all').length) {
		//show all products
		$('#show-all').click(function() {
			$('.selectpicker:not("#price-sorting")').selectpicker("deselectAll").selectpicker("refresh");
			$('.selectpicker:not("#price-sorting")').val(null);
			
			$('.product-item').show();
		});
	}
	
	/******************************************
	 iPad popover debugging
	******************************************/
	
	$('.ua-mobile-ipad .popover-ipad-left').popover({placement:"left"});
	$('.ua-mobile-ipad .popover-ipad-right').popover({placement:"right"});
	$('.ua-mobile-ipad .popover-ipad-top').popover({placement:"top"});
	$('.ua-mobile-ipad .popover-ipad-bottom').popover({placement:"bottom"});
	$('.ua-mobile-ipad .popover-ipad-auto').popover({placement:"auto"});
	
	//fixing slow excution on popover/tooltip
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="tooltip"]').tooltip();


});







/********************************************************
 Avoid `console` errors in browsers that lack a console.
 ********************************************************/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



