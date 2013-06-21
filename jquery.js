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
	
		var audio = $("#audio")[0];
  		var audio2 = $("#audio2")[0];

		$("#audio-pic").mouseenter(function() {
  		audio.play();
  		audio.attr("muted") = false;
  		}).mouseleave(function(){
  		audio.attr("muted") = true;
  		});
  		
  		$("#audio-pic2").mouseenter(function() {
  		audio2.currentTime = audio.currentTime;
  		audio2.play();
  		}).mouseleave(function(){
  		audio2.pause();
  		});
  		
});