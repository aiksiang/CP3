var INTRO = 1;
var ABOUT = 2;
var OBJECTIVE = 3;
var TGTAUD = 4;

$(document).ready(function(){
	$(".edit-intro").on('click', function() {
		$("#intro").fadeOut(400);
		$("#about").fadeIn(800);
		$("#objective").fadeIn(800);
		$("#target-audience").fadeIn(800);
		$(".intro-text").fadeIn(800);
		enableEdit(INTRO);
	});

	$(".edit-about").on('click', function() {
		$("#intro").fadeIn(800);
		$("#about").fadeOut(400);
		$("#objective").fadeIn(800);
		$("#target-audience").fadeIn(800);
		$(".about-text").fadeIn(800);
		enableEdit(ABOUT);
	});

	$(".edit-objective").on('click', function() {
		$("#intro").fadeIn(800);
		$("#about").fadeIn(800);
		$("#objective").fadeOut(400);
		$("#target-audience").fadeIn(800);
		$(".objective-text").fadeIn(800);
		enableEdit(OBJECTIVE);
	});

	$(".edit-target-audience").on('click', function() {
		$("#intro").fadeIn(800);
		$("#about").fadeIn(800);
		$("#objective").fadeIn(800);
		$("#target-audience").fadeOut(400);
		$(".target-audience-text").fadeIn(800);
		enableEdit(TGTAUD);
	});
});
