var FIRST_EDITION = 1;
var SECOND_EDITION = 2;
var THIRD_EDITION = 3;

$(document).ready(function(){
	$("#home-button").on('click', function() {
		$(".book-details").fadeOut(400);
		$(".errata").fadeOut(400);
		$("#book-editions").fadeIn(800);
		$("#page-text").fadeIn(800);
	});

	$("#cp1-img").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeIn(800);
		populatePage(FIRST_EDITION, function() {
			initializeErrata(FIRST_EDITION);
		});
	});
	$("#cp2-img").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeIn(800);
		populatePage(SECOND_EDITION, function() {
			initializeErrata(SECOND_EDITION);
		});
	});
	$("#cp3-img").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeIn(800);
		populatePage(THIRD_EDITION, function() {
			initializeErrata(THIRD_EDITION);
		});
	});
});

function initializeErrata(edition) {
	$(".errataLink").on('click', function() {
		$(".book-details").fadeOut(400);
		$("#book-editions").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".errata").fadeIn(800);
		showErrata(edition);
	});
}