var FIRST_EDITION = 1;
var SECOND_EDITION = 2;
var THIRD_EDITION = 3;

$(document).ready(function(){
	$("#home-button").on('click', function() {
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
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
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#cp1-img img").addClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(FIRST_EDITION, function() {
				initializeErrata(FIRST_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
	});
	$("#cp2-img").on('click', function() {
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").addClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(SECOND_EDITION, function() {
				initializeErrata(SECOND_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		
	});
	$("#cp3-img").on('click', function() {
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").addClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(THIRD_EDITION, function() {
				initializeErrata(THIRD_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
	});

	$(".testimonial-button").on('click', function() {
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".testimonial").fadeIn(800);
		showTestimonial();
	});

	$(".download-button").on('click', function() {
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".downloads").fadeIn(800);
		showDownloads();
	}); 

	$(".workshop-button").on('click', function() {
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".workshop").fadeIn(800);
		showWorkshop();
	}); 

	$(".credits-button").on('click', function() {
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeIn(800);
		showCredits();
	}); 
});

function initializeErrata(edition) {
	$(".content-button").on('click', function() {
		$(".book-edition-info").fadeOut(400);
		$(".book-edition-content").fadeIn(800);
		$(".book-edition-errata").fadeOut(400);
		$("#content").addClass("active");
		$("#details").removeClass("active");
		$("#errataTab").removeClass("active");
		showContent(edition);
	});

	$(".details-button").on('click', function() {
		$(".book-edition-info").fadeIn(800);
		$(".book-edition-content").fadeOut(400);
		$(".book-edition-errata").fadeOut(400);
		$("#details").addClass("active");
		$("#content").removeClass("active");
		$("#errataTab").removeClass("active");
	});

	$(".errata-button").on('click', function() {
		$(".book-edition-info").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".book-edition-errata").fadeIn(400);
		$("#details").removeClass("active");
		$("#content").removeClass("active");
		$("#errataTab").addClass("active");
		displayErrata(edition);
	});
}