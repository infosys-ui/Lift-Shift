$(document).ready(function(){function e(){$(".v-align-middle").length&&$(".v-align-middle").each(function(){var e=$(this).parent();e.is("a")&&(e=$(this).parent().parent());var t=e.outerHeight()/2,o=$(this).outerHeight()/2;e.css("position","relative"),$(this).css({position:"absolute",top:t-o,"margin-top":0,"padding-top":0})})}function t(){$('img[class*="img-"]').length&&$('img[class*="img-"]').each(function(){-1!==$(this).attr("class").indexOf("-320")&&o($(this),320,600),-1!==$(this).attr("class").indexOf("-480")&&o($(this),480,600),-1!==$(this).attr("class").indexOf("-600")&&o($(this),600,768),-1!==$(this).attr("class").indexOf("-768")&&o($(this),768,930),-1!==$(this).attr("class").indexOf("-930")&&o($(this),930,1200),-1!==$(this).attr("class").indexOf("-1200")&&o($(this),1200,3e3)})}function o(e,t,o){if($(window).width()>=t&&$(window).width()<o){var i=e.attr("src").replace(/(\.320|\.480|\.600|\.768|\.930|\.1200)?\.(png|jpg|gif)/,"."+t+".$2");e.attr("src",i)}else{var n=new RegExp("."+t),s=e.attr("src").replace(n,"");e.attr("src",s)}}function i(){$('[class*="bg-"]').length&&$('[class*="bg-"]').each(function(){-1!==$(this).attr("class").indexOf("-320")&&n($(this),320,600),-1!==$(this).attr("class").indexOf("-480")&&n($(this),480,600),-1!==$(this).attr("class").indexOf("-600")&&n($(this),600,768),-1!==$(this).attr("class").indexOf("-768")&&n($(this),768,930),-1!==$(this).attr("class").indexOf("-930")&&n($(this),930,1200),-1!==$(this).attr("class").indexOf("-1200")&&n($(this),1200,3e3)})}function n(e,t,o){var i=e.data("background-src"),n;$(window).width()>=t&&$(window).width()<o?(n=i.replace(/(\.320|\.480|\.600|\.768|\.930|\.1200|\.dsk|\.mob)?\.(png|jpg|gif)/,"."+t+".$2"),e.css({"background-image":"url("+n+")","background-repeat":"no-repeat"})):$(window).width()>=600?("desktop"===e.data("background-target")&&e.css({"background-image":"url("+i+")","background-repeat":"no-repeat"}),"mobile"===e.data("background-target")&&e.css({"background-image":"url("+i+")","background-repeat":"no-repeat"})):e.css({"background-image":'url("")'})}function s(e){e.click(function(){$(this).parent().hasClass("active")?$(this).siblings(".detail").slideUp(function(){$(this).parent().removeClass("active")}):(e.each(function(){$(this).siblings(".detail").slideUp(function(){$(this).parent().removeClass("active")})}),$(this).siblings(".detail").slideDown(function(){$(this).parent().addClass("active")}))})}function a(e){e.click(function(){$(this).siblings(".detail").slideToggle(function(){$(this).parent().toggleClass("active")})})}function l(e){if(f=e.clientX+document.body.scrollLeft,f-m>30)$(this).stop().carousel("prev"),document.removeEventListener("MSPointerMove",l,!1);else{if(!(-30>f-m))return;$(this).stop().carousel("next"),document.removeEventListener("MSPointerMove",l,!1)}}function r(){$("#contents nav li > a").click(function(){var e=$(this).data("target-content");$('#contents li[id*="item"]').removeClass("active"),$("#contents li[id="+e+"]").addClass("active")})}function c(){$(".product-item").each(function(){var e=$(this).find(".product-info").text().toLowerCase(),t=parseInt($(this).find(".price-info").text().match(/\$?\d{1,6}/)[0].substr(1));$(this).find("sup").length&&(t/=100);var o=0,i=0;if(g){g=g.join(" ").toLowerCase().split(" ");for(var n=0;n<g.length;n++)-1!==e.indexOf(g[n])&&o++}if(w){w=w.join(" ").toLowerCase().split(" ");for(var s=0;s<w.length;s++)-1!==e.indexOf(w[s].toString()+" ")&&o++}if(y)for(var a=0;a<y.length;a++)-1!==y.join().indexOf("0-15")&&t>=0&&15>t&&i++,-1!==y.join().indexOf("15-30")&&t>=15&&30>t&&i++,-1!==y.join().indexOf("30-50")&&t>=30&&50>t&&i++,-1!==y.join().indexOf("50-80")&&t>=50&&80>t&&i++,-1!==y.join().indexOf("80+")&&t>=80&&i++;null===$("#brands").val()&&null===$("#categories").val()||null===$("#price-range").val()?null===$("#price-range").val()?o>0?$(this).show():$(this).hide():o>0||i>0?$(this).show():$(this).hide():o>0&&i>0?$(this).show():$(this).hide()}),null===$("#brands").val()&&null===$("#categories").val()&&null===$("#price-range").val()&&$(".product-item").show()}function d(){var e=[];$(".product-item:visible").each(function(){e.push($(this).html())}),e.sort(p),$(".product-item").each("high-to-low"==$("#price-sorting").val()?function(){$(this).html(e.pop())}:function(){$(this).html(e.shift())})}function p(e,t){var o=parseInt($(e).find(".price-info").text().match(/\$?\d{1,6}/)[0].substr(1)),i=parseInt($(t).find(".price-info").text().match(/\$?\d{1,6}/)[0].substr(1));return o-i}function h(){var e=$("#search-products").val().toLowerCase();$(".product-item").each(function(){var t=$(this).find(">div>div:first").text().toLowerCase();-1!==t.indexOf(e)?$(this).show():$(this).hide()})}if($("html").removeClass("no-js").addClass("js"),$(".ua-ie-8").length&&($(".selectpicker").removeClass("selectpicker"),$('link[rel=stylesheet][href~="bootstrap-select"]').remove()),$(".ua-ie-8 .table-striped").find("tr:odd td, tr:odd th").css("background-color","#f2f2f2"),navigator.userAgent.match(/IEMobile\/10\.0/)){var u=document.createElement("style");u.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(u)}e(),$(window).resize(function(){e()}),t(),$(window).resize(function(){t()}),i(),$(window).resize(function(){i()}),s($(".accordion > li > a")),a($(".leadership-team .accordion-leadership > li > a")),$(".selectpicker").selectpicker(),$(".whytmo").length&&$(".slide-holder").each(function(){$(this).empty().load($(this).data("html-target")+" #html-slide",function(){i()})});var m,f;if(window.navigator.msPointerEnabled?$(document).on("vmousedown touchstart",".carousel",function(e){m=e.clientX+document.body.scrollLeft,document.addEventListener("MSPointerMove",l,!1),$(document).on("vmouseup touchend",function(){document.removeEventListener("MSPointerMove",l,!1)})}):$(document).on("vmousedown",".carousel",function(e){m=e.pageX,$(document).on("vmousemove",".carousel",function(e){if(f=e.pageX,f-m>30)$(this).stop().carousel("prev");else{if(!(-30>f-m))return;$(this).stop().carousel("next")}}),$(document).on("vmouseup",function(){$(this).off("vmousemove")})}),$("#carousel-main, #carousel-small").on("slid.bs.carousel",function(){0===$(this).find(".item.active").index()?$(this).find(".carousel-control.left").hide():$(this).find(".carousel-control.left").show(),$(this).find(".item.active").index()===$(this).find(".item").length-1?$(this).find(".carousel-control.right").hide():$(this).find(".carousel-control.right").show()}),$(".company-info").length&&($(".company-info").find("#overview.content-holder").empty().load("company-info-overview.html #contents",function(){a($(".leadership-team .accordion-leadership > li > a"))}),$(".company-info").find("#awards.content-holder").empty().load("company-info-awards.html #contents"),$(".company-info").find("#regulatory.content-holder").empty().load("company-info-government.html #contents"),$(".company-info").find("#jobs.content-holder").empty().load("company-info-job.html #contents"),$(".company-info").find("#consumer.content-holder").empty().load("company-info-consumer.html #contents"),$(".company-info").find("#safety.content-holder").empty().load("company-info-safety.html #contents"),$(".company-info").find("#unlock.content-holder").empty().load("company-info-sim-unlockpolicy.html #contents",function(){window.setTimeout(function(){s($(".accordion > li > a")),r()},1e3)})),$(".company-info").find(".nav-pills li>a").click(function(){$(this).parent("li").siblings("li").removeClass("active"),$(this).parent("li").addClass("active");var e=$(this).parent("li").data("target-content");$(".company-info").find("article .content-holder").removeClass("active"),$(".company-info").find("article "+e+".content-holder").addClass("active")}),$(".privacy-resources").length&&($(".privacy-resources").find("#security.content-holder").empty().load("privacy-resources-security.html #contents"),$(".privacy-resources").find("#customer.content-holder").empty().load("privacy-resources-customer-proprietary.html #contents"),$(".privacy-resources").find("#identity.content-holder").empty().load("privacy-resources-identity.html #contents"),$(".privacy-resources").find("#marketing.content-holder").empty().load("privacy-resources-marketingchoice.html #contents"),$(".privacy-resources").find("#phishing.content-holder").empty().load("privacy-resources-phishingsmishing.html #contents"),$(".privacy-resources").find("#device.content-holder").empty().load("privacy-resources-deviceapps.html #contents"),$(".privacy-resources").find("#location.content-holder").empty().load("privacy-resources-locationservices.html #contents"),$(".privacy-resources").find("#blocking.content-holder").empty().load("privacy-resources-blocking.html #contents"),$(".privacy-resources").find("#protecting.content-holder").empty().load("privacy-resources-protectingyourprivacy.html #contents",function(){window.setTimeout(function(){s($(".accordion > li > a")),r()},1e3)})),$(".privacy-resources").find(".nav-pills li>a").click(function(){$(this).parent("li").siblings("li").removeClass("active"),$(this).parent("li").addClass("active");var e=$(this).parent("li").data("target-content");$(".privacy-resources").find("article .content-holder").removeClass("active"),$(".privacy-resources").find("article "+e+".content-holder").addClass("active")}),$(".legal-notices").length&&($(".legal-notices").find("#Licenses.content-holder").empty().load("tmo-notices-legal.html #contents"),$(".legal-notices").find("#legal.content-holder").empty().load("tmo-notices-Licensesandpatents.html #contents"),$(".legal-notices").find("#trademarks.content-holder").empty().load("tmo-notices-trademarks.html #contents",function(){window.setTimeout(function(){s($(".accordion > li > a")),r()},1e3)})),$(".legal-notices").find(".nav-pills li>a").click(function(){$(this).parent("li").siblings("li").removeClass("active"),$(this).parent("li").addClass("active");var e=$(this).parent("li").data("target-content");$(".legal-notices").find("article .content-holder").removeClass("active"),$(".legal-notices").find("article "+e+".content-holder").addClass("active")}),$(".working-tmo").length&&($(".working-tmo").find("#affiliate.content-holder").empty().load("working-tmo-affiliate-program.html #contents"),$(".working-tmo").find("#procurement.content-holder").empty().load("working-tmo-procurement.html #contents"),$(".working-tmo").find("#retailer.content-holder").empty().load("working-tmo-retailer.html #contents"),$(".working-tmo").find("#partnerships.content-holder").empty().load("working-tmo-partnerships.html #contents",function(){$(".selectpicker").selectpicker()}),$(".working-tmo").find("#supplier.content-holder").empty().load("working-tmo-supplier.html #contents",function(){window.setTimeout(function(){s($(".accordion > li > a")),r()},1e3)})),$(".working-tmo").find(".nav-pills li>a").click(function(){$(this).parent("li").siblings("li").removeClass("active"),$(this).parent("li").addClass("active");var e=$(this).parent("li").data("target-content");$(".working-tmo").find("article .content-holder").removeClass("active"),$(".working-tmo").find("article "+e+".content-holder").addClass("active")}),$(".community-sponsorships").length&&($(".community-sponsorships").find("#community.content-holder").empty().load("community-sponsorships-community.html #contents"),$(".community-sponsorships").find("#sponsorships.content-holder").empty().load("community-sponsorships-overview.html #contents"),$(".community-sponsorships").find("#phone-recycling-program.content-holder").empty().load("community-sponsorships-phone-recycling.html #contents",function(){window.setTimeout(function(){s($(".accordion > li > a")),r()},1e3)})),$(".community-sponsorships").find(".nav-pills li>a").click(function(){$(this).parent("li").siblings("li").removeClass("active"),$(this).parent("li").addClass("active");var e=$(this).parent("li").data("target-content");$(".community-sponsorships").find("article .content-holder").removeClass("active"),$(".community-sponsorships").find("article "+e+".content-holder").addClass("active")}),$(".over-limit").on("shown.bs.collapse",function(){$(".show-toggle").empty().text("Show fewer questions").append('<span class="expanded-view"></span>')}).on("hide.bs.collapse",function(){$(".show-toggle").empty().text("View 7 more questions").append('<span class="collapsed-view"></span>')}),$(".filter, .up-arrow").click(function(){$(".filter_hidden").slideToggle(400),$(".filter > a > span").hasClass("icon-expand")?$(".filter > a > span").toggleClass("icon-expand").addClass("icon-collapse"):$(".filter > a > span").toggleClass("icon-collapse").addClass("icon-expand")}),$(".tool-icon").click(function(){$(".tool-tip").fadeToggle()}),$(".table-jump .row1").find(".col2, .col3, .col4").click(function(){$(window).width()<600&&$(".table-jump .row2").toggle("show",function(){$(".table-jump .row1 h3 span").toggleClass("active")})}),$(".jump-selection select").change(function(){var e=$(this).val();$(".table-jump .col2, .table-jump .col3, .table-jump .col4").hide(),$(".table-jump ."+e).show()}),$(window).resize(function(){$(window).width()>=600?($(".table-jump .col2, .table-jump .col3, .table-jump .col4").show(),$(".table-jump .row2").show(function(){})):($(".table-jump .col3, .table-jump .col4").hide(),$(".table-jump .col2").show(),$(".table-jump .row2").hide(function(){$(".table-jump .row1 h3 span").removeClass("active")}))}),$("#widget").draggable(),$(".ua-firefox").length||!$(".nav-justified li + div").length&&!$(".ua-safari .nav-justified").length||$(window).resize(_.debounce(function(){window.location.reload()},500)),$("#home-hero-carousel, .carousel-123").slick({autoplay:!0,dots:!0,arrows:!0,infinite:!1,speed:500,pauseOnHover:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{dots:!0,arrows:!0,autoplay:!0,slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{dots:!0,arrows:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1}}]}),$("#accessories-carousel, .carousel-no-dots").slick({autoplay:!0,dots:!1,arrows:!0,infinite:!1,speed:350,pauseOnHover:!0,swipe:!0,slidesToShow:1,slidesToScroll:1}),$(".carousel").slick({autoplay:!0,dots:!0,arrows:!0,infinite:!0,speed:800,autoplaySpeed:4e3,pauseOnHover:!0,swipe:!0,slidesToShow:1,slidesToScroll:1}),$(".carousel-responsive, #promo-accessoriescarousel, #carousel-phone-deals-first, #carousel-phone-deals-second, #carousel-phone-deals-third").slick({arrows:!0,dots:!0,autoplay:!0,autoplaySpeed:3e3,speed:500,swipe:!0,infinite:!1,pauseOnHover:!0,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{arrows:!0,dots:!0,autoplay:!0,slidesToShow:3,slidesToScroll:3}},{breakpoint:992,settings:{arrows:!0,dots:!0,autoplay:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{arrows:!0,dots:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1}}]}),$(".fademenu-holder").length){$(window).scroll(function(){var e=$(".fademenu-holder").offset().top+60;if($(this).scrollTop()>e?$("#fademenu").fadeIn():$("#fademenu").fadeOut(),$("#fademenu ul li a").length){var t=$(document).scrollTop();$("#fademenu ul li a").each(function(){var e=$(this);if($(e.attr("href")).length){var o=$(e.attr("href")),i=o.position().top<=t,n=o.position().top+o.height()>t;i&&n?($("#menu-center ul li").removeClass("active"),e.parent().addClass("active")):e.parent().removeClass("active")}})}}),$("#fademenu ul li").click(function(){var e=$(this).find("a").attr("href");$("html, body").animate({scrollTop:$(e).offset().top},1e3)});var v=$(".container").width()-2;$("#fademenu, #fademenu1, #fademenu2").width(v),$(window).resize(function(){var e=$(".container").width()-2;$("#fademenu, #fademenu1, #fademenu2").width(e)})}if($(".activation-tips").click(function(){$(".support-tab").length&&$("html, body").animate({scrollTop:"900px"})}),$(".credit-rating").length&&$(".credit-rating").click(function(){$(".credit-rating > .dropdown-menu > ul").addClass("enable-model"),$(".enable-model li a span").parent("a").parent("li").attr("data-toggle","modal"),$(".enable-model li a span:contains(No Credit Check)").parent("a").parent("li").attr("data-target","#Building-Credit-modal"),$(".enable-model li a span:contains(Building Credit)").parent("a").parent("li").attr("data-target","#no-credit-check-modal")}),$("#brands").length){var g,w,y;$("#categories, #brands, #price-range").change(function(){"brands"===$(this).attr("id")&&(null===$(this).val()||-1!==$(this).val().join().indexOf("reset")?($(this).selectpicker("deselectAll"),g=null):g=$(this).val()),"categories"===$(this).attr("id")&&(null===$(this).val()||-1!==$(this).val().join().indexOf("reset")?($(this).selectpicker("deselectAll"),w=null):w=$(this).val()),"price-range"===$(this).attr("id")&&(null===$(this).val()||-1!==$(this).val().join().indexOf("reset")?($(this).selectpicker("deselectAll"),y=null):y=$(this).val()),c()})}if($("#price-sorting").length&&($(".product-item").each(function(){$(this).find("sup").length||$(this).find(".price-info").append("<sup>00</sup>")}),$("#price-sorting").selectpicker("deselectAll").selectpicker("refresh"),$("#price-sorting").val(null),$("#price-sorting").change(function(){d()})),$("#search-products").length){var b=[];$(".product-item").each(function(){var e=$.trim($(this).find(".product-info").text().toLowerCase());b.push(e)}),$("#search-products").autocomplete({source:b,response:function(){h()},close:function(){h()}}),$("#search-form").submit(function(){h()})}$("#search-products").focus(function(){$(this).val("")}),$("#show-all").length&&$("#show-all").click(function(){$('.selectpicker:not("#price-sorting")').selectpicker("deselectAll").selectpicker("refresh"),$('.selectpicker:not("#price-sorting")').val(null),$(".product-item").show()}),$(".ua-mobile-ipad .popover-ipad-left").popover({placement:"left"}),$(".ua-mobile-ipad .popover-ipad-right").popover({placement:"right"}),$(".ua-mobile-ipad .popover-ipad-top").popover({placement:"top"}),$(".ua-mobile-ipad .popover-ipad-bottom").popover({placement:"bottom"}),$(".ua-mobile-ipad .popover-ipad-auto").popover({placement:"auto"}),$('[data-toggle="popover"]').popover(),$('[data-toggle="tooltip"]').tooltip()}),function(){for(var e,t=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=o.length,n=window.console=window.console||{};i--;)e=o[i],n[e]||(n[e]=t)}();
//# sourceMappingURL=./lift-shift-min.js.map