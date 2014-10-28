$(document).ready(function() {
	$('.search-result').find('.left-selection h5').click(function() {
		$(this).next('.list-group').slideToggle();
	});
	
	$(window).resize(function() {
		if ($(window).width() >= 768) {
			$('.search-result').find('.list-group').show();
		} else {
			$('.search-result').find('.list-group').hide();
		}
	});
});