$(document).ready(function() {

	
	
	$('#add-item').on('submit', function(event) {
			
		if ($("input:first").val() == "") {
    		event.preventDefault();
  		} else {
			event.preventDefault();
			var li = $('.text').val();
			var both = "<tr><td class='remove'> X</td><td class='button'>" +li +  "</td></tr>";
			$('.list').append(both);
			$('.text').val("");
			$('.text').attr('placeholder', 'Anything else?');
			}
	});
	
	$('.list').on('click', '.button', function() {
		$(this).toggleClass('crossed-out');
	});
	
	$('.list').on('click', '.remove', function() {
		$(this).closest('tr').remove();
		});
	
});

