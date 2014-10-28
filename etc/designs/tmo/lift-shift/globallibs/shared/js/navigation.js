$(document).ready(function() {
	
		
    /******************************************************
	 global advanced header navigation
	******************************************************/
    var activeNav;

    //hover on nav function
    function hoverOnNav() {
        if ($(window).width() >= 768 && cssua.ua.desktop && !cssua.ua.tablet_pc) {
            //hover nav event
            $('.nav-icon, .left-menu').hover(function () {
                activeNav = $(this);
                openSubNav($(this));
            }, function () {
                closeSubNav();
            });
            //hover on sub nav
            $('.sub-nav-list').hover(function (event) {
                if(!$(event.target).hasClass('search-input')) {
                    activeNav.addClass('active');
                    $(this).stop(true,true).show();
                }
				
				hoverOnSubNav();
				
            }, function () {
                closeSubNav();
            });
        } else {
            //small window size
            $('.nav-icon, .left-menu, .sub-nav-list').unbind('mouseenter mouseleave');
        }
    }

    //click on nav function
    function clickOnNav() {
        //click nav event
        $('.nav-icon, .left-menu').click(function () {
            //when menu is open
            if ($(this).hasClass('active')) {
                closeSubNav();
            } else {
                //when menu is closed		
                openSubNav($(this));
            }
        });
    }
	
	//click on sub nav tabs
	function linkTo() {
		$('#myTab > li, .sub-listing').click(function() {
			if ($(this).find('>a').attr('href').indexOf('/') != -1) {
				var url = $(this).find('>a').attr('href');
				window.location = url;
			}
		});
	}

    //open sub nav
    function openSubNav(targetedEle) {
		var subNav;
        if ($(window).width() < 768 && !targetedEle.hasClass('search-icon')) {
            subNav = ".mytmob-list, .shop-list, .coverage-list";
        } else {
			subNav = targetedEle.data('sub-target');
		}
        $('.nav-icon, .left-menu').removeClass('active');
        targetedEle.addClass('active');
        $('.sub-nav-list').hide();
        $(subNav).stop().show();
    }

    //close sub nav
    function closeSubNav() {
        $('.nav-icon, .left-menu').removeClass('active');
        $('.sub-nav-list').stop().hide();
    }

    if ($('header.header').length) {
        clickOnNav();
        hoverOnNav();
        var height = $(window).height(); 
        var width = $(window).width();
        $(window).resize(function () {
	        var newHeight = $(window).height();
            var newWidth = $(window).width();
	        if(width !== newWidth) {
				hoverOnNav();
	            closeSubNav();
	        }
	    	height = newHeight; 
            width = newWidth;
        });
    }

    //close nav on mobile
    /*
	$('main, div, footer, p, section, span, a, ul, ol, li').not('.sub-nav-list, .left-menu').on('mousedown touchstart', function (event) {
    	console.log("mousedown");
		closeSubNav();
    });*/
	

    $('main, div, footer, p, section, span, a, ul, ol, li').on('mousedown touchstart', function (event) {
        var id = $(event.target).attr('id');
        if(id === 'shop' || id === "plans") {
        	return;
        }
		var isHumb = $(event.target).hasClass('nav-humb');
        var mytmo = $(event.target).hasClass('my-tmo');
        var isSearchIcon = $(event.target).hasClass('search-icon');
        if(isHumb || mytmo || isSearchIcon) {
        	return;
        }

        //var isFlyOut = $(event.target).hasClass('sub-nav-list') || $(event.target).parents().hasClass('sub-nav-list');
        var isFlyOut = $(event.target).parents().hasClass('sub-nav-group');
        //var isAnchor = $(event.target).is('a');
        //var isSubListElement = $(event.target).parents('.sub-nav-group');
        if(isFlyOut) {
        //if(!isAnchor && isSubListElement) {
            return;
        }
		closeSubNav();
    });
	
	//make the Bootstrap tab work on hover event
	function hoverOnSubNav() {
		$('a[data-toggle]').hover(function() {
			if ($(window).width() >= 768) {
				$(this).tab('show');
			}
		});
	}
	
	/*******************************************************
	 loading header to each page
	 *******************************************************/
	$('#header_body').empty().load("../header-footer/header-adv.html #header-adv", function(){
		clickOnNav();
		hoverOnNav();
		if ($('.ua-desktop').length) {
			linkTo();
		}
	});
	
	
	/*******************************************************
	 Search function 
	*******************************************************/
	
	function redirectToThanksMedia() {
		var searchURL = $('#tmo_header_search_url').val() || "";
        var searchString = $('header .nav-form .search-input').val() || "";
        searchString = encodeURIComponent(searchString);
		if(searchURL.length > 0 && searchString.length > 0) {
        	var isHoverable = ($(window).width() >= 768 && cssua.ua.desktop && !cssua.ua.tablet_pc);
			if(!isHoverable) {
				closeSubNav();
            }
            searchURL = searchURL.replace("$$", searchString);
            window.open(searchURL, "_self");
        }
    }
	$('header .nav-form .search-button').click(redirectToThanksMedia);
    $('header .nav-form').submit(function() {
		redirectToThanksMedia();
        return false;
    }); 
	


	/***************************************************
	 accordion component
	 ***************************************************/
	//var listing;
	
	function accordionClickEvent(listing) {
		
		listing.click(function(){
			if ($(this).parents('li').hasClass('active')) {
				//if the listing is active
				$(this).siblings('.detail').slideUp(function(){
					$(this).parents('li').removeClass('active');
				});
			} else {
				//if the listing is not active
				
				//close all listing
				listing.each(function(){
					$(this).siblings('.detail').slideUp(function(){
						$(this).parents('li').removeClass('active');
					});
				});
				
				//open this listing
				$(this).siblings('.detail').slideDown(function(){
					$(this).parents('li').addClass('active');
				});
			}
		});
	}

	
	
	/***************************************************
	 footer accordion
	 ***************************************************/
	function footerAccordion(listing) {
		//listing = $('footer .accordion > .title > .container > a');
		listing.unbind('click');
		accordionClickEvent(listing);
		
		//disable click event on desktop version
		if ($(window).width() >= 768) {
			listing.unbind('click');
		}
	}
	footerAccordion($('footer .accordion > .title > .container > a'));
	$(window).resize(function(){
		footerAccordion($('footer .accordion > .title > .container > a'));
		fixedFooter();
	});	



	/*******************************************************
	 loading footer to each page
	 *******************************************************/
	$('footer:not("#template")').empty().load("../header-footer/footer.html #footer", function(){
		footerAccordion($('footer .accordion > .title > .container > a'));
		
		window.setTimeout(function() {
			fixedFooter();
		},1000);
		
	});
	
	
	/*******************************************************
	 fixed footer on desktop version
	*******************************************************/
	function fixedFooter() {
		var footerHeight = $('main:not(".container")').siblings('footer').outerHeight() || 0;
		if ($(window).width() < 768) {
			footerHeight = 0;
		}
		$('main').css({'margin-bottom':footerHeight});
	}


});