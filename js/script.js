var FIRST_EDITION = 1;
var SECOND_EDITION = 2;
var THIRD_EDITION = 3;
var selectedEdition = 0;

var SELECT_ERR = 10;
var SELECT_INFO = -10;

$(document).ready(function(){
	$("#home-button").on('click', function() {
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$("#book-editions-img").slideDown(800);
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
		$(".sales-data").fadeOut(400);
		$("#cp1-img img").addClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(FIRST_EDITION, SELECT_INFO, function() {
				initializeErrata(FIRST_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		selectedEdition = FIRST_EDITION;
	});
	$("#cp2-img").on('click', function() {
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").addClass("fullOpacity");
		$("#cp3-img img").removeClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(SECOND_EDITION, SELECT_INFO, function() {
				initializeErrata(SECOND_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		selectedEdition = SECOND_EDITION;
	});
	$("#cp3-img").on('click', function() {
		// $("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").addClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(THIRD_EDITION, SELECT_INFO, function() {
				initializeErrata(THIRD_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		selectedEdition = THIRD_EDITION;
	});

	$(".testimonial-button").on('click', function() {
		$("#book-editions-img").slideUp(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$(".testimonial").fadeIn(800);
		showTestimonial();
	});

	$(".download-button").on('click', function() {
		$("#book-editions-img").slideUp(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$(".downloads").fadeIn(800);
		showDownloads();
	}); 

	$(".workshop-button").on('click', function() {
		$("#book-editions-img").slideUp(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$(".workshop").fadeIn(800);
		showWorkshop();
	}); 

	$(".credits-button").on('click', function() {
		$("#book-editions-img").slideUp(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$(".credits").fadeIn(800);
		showCredits();
	}); 

	$(".sales-data-button").on('click', function() {
		$("#book-editions-img").slideUp(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeIn(800);
		showSales();
	}); 

/*
	$(".errata-1").on('click', function() {
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").addClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(FIRST_EDITION, SELECT_ERR, function() {
				initializeErrata(FIRST_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		selectedEdition = FIRST_EDITION;
	});
	$(".errata-2").on('click', function() {
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").addClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(SECOND_EDITION, SELECT_ERR, function() {
				initializeErrata(SECOND_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		selectedEdition = SECOND_EDITION;
	});
	$(".errata-3").on('click', function() {
		$("#page-text").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$("#cp1-img img").removeClass("fullOpacity");
		$("#cp2-img img").removeClass("fullOpacity");
		$("#cp3-img img").addClass("fullOpacity");
		$(".book-details").fadeOut(400, function() {
			populateBookDetails(THIRD_EDITION, SELECT_ERR, function() {
				initializeErrata(THIRD_EDITION);
				$(".book-details").fadeIn(400);
			});
		});
		selectedEdition = THIRD_EDITION;
	});
*/
	$("a").tooltip({'placement': 'bottom','content':'html'});
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