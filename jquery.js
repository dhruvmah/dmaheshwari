$(document).ready(function() {
	$('#form').slideDown(800);
	
	$('#picture-scroller').on('mouseover', function() {
		$('#scroller-desc').slideToggle(250)
		});
	$('#picture-scroller').on('mouseover', function() {
		$(this).addClass("highlighted");
		}).on('mouseleave', function() {
		$(this).removeClass("highlighted");
		});
		
});