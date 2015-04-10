var INTRO = 1;
var ABOUT = 2;
var OBJECTIVE = 3;
var TGTAUD = 4;

$(function(){
	$(".edit-intro").on('click', function() {
		$("#intro").fadeOut(400, function() {
			$("#about").fadeIn(400);
			$("#objective").fadeIn(400);
			$("#target-audience").fadeIn(400);
			$(".intro-text").fadeIn(400);
		});
		enableEdit(INTRO);
	});

	$(".edit-about").on('click', function() {
		$("#about").fadeOut(400, function() {
			$("#intro").fadeIn(400);
			$("#objective").fadeIn(400);
			$("#target-audience").fadeIn(400);
			$(".about-text").fadeIn(400);
		});
		enableEdit(ABOUT);
	});

	$(".edit-objective").on('click', function() {
		$("#objective").fadeOut(400, function() {
			$("#intro").fadeIn(400);
			$("#about").fadeIn(400);
			$("#target-audience").fadeIn(400);
			$(".objective-text").fadeIn(400);
		});
		enableEdit(OBJECTIVE);
	});

	$(".edit-target-audience").on('click', function() {
		$("#target-audience").fadeOut(400, function() {
			$("#intro").fadeIn(400);
			$("#about").fadeIn(400);
			$("#objective").fadeIn(400);
			$(".target-audience-text").fadeIn(400);
		});
		enableEdit(TGTAUD);
	});
});
