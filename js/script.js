var FIRST_EDITION = 1;
var SECOND_EDITION = 2;
var THIRD_EDITION = 3;

$(document).ready(function(){
	$("#home-button").on('click', function() {
		$(".book-details").fadeOut(400);
		$(".errata").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#book-editions-img").fadeIn(800);
		$("#page-text").fadeIn(800);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
	});

	$("#cp1-img").on('click', function() {
		$(".errata").fadeOut(400);
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#cp1-img img").addClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populatePage(FIRST_EDITION, function() {
				initializeErrata(FIRST_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
	});
	$("#cp2-img").on('click', function() {
		$(".errata").fadeOut(400);
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").addClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populatePage(SECOND_EDITION, function() {
				initializeErrata(SECOND_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		
	});
	$("#cp3-img").on('click', function() {
		$(".errata").fadeOut(400);
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").addClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populatePage(THIRD_EDITION, function() {
				initializeErrata(THIRD_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
	});

	$(".testimonial-button").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".testimonial").fadeIn(800);
		showTestimonial();
	});

	$(".download-button").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".downloads").fadeIn(800);
		showDownloads();
	}); 

	$(".workshop-button").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".workshop").fadeIn(800);
		showWorkshop();
	}); 

	$(".credits-button").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeIn(800);
		showCredits();
	}); 
});

function initializeErrata(edition) {
	$(".errataLink").on('click', function() {
		$(".book-details").fadeOut(400);
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".errata").fadeIn(800);
		showErrata(edition);
	});
}