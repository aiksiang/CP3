var FIRST_EDITION = 1;
var SECOND_EDITION = 2;
var THIRD_EDITION = 3;
var selectedEdition = 0;

var SELECT_ERR = 10;
var SELECT_INFO = -10;

var pages = {
	mainPage: $("#main-page-introduction"),
	bookContainer: $(".book-details"),
	testimonial: $(".testimonial"),
	downloads: $(".downloads"),
	salesData: $(".sales-data"),
	workshop: $(".workshop"),
	credits: $(".credits")
};

var tabContents = {
	bookDetailsTabContent: $(".book-edition-info"),
	bookContentsTabContent: $(".book-edition-content"),
	bookErratasTabContent: $(".book-edition-errata")
}

var bookImages = {
	1: $("#cp1-img img"),
	2: $("#cp2-img img"),
	3: $("#cp3-img img"),
};

var tabs = {
	bookDetailsTab: $("#details"),
	bookContentsTab: $("#content"),
	bookErratasTab: $("#errataTab")
}

function setTabToActive(tabToBeSet) {
	for (var tab in tabs) {
		if (tab == tabToBeSet) {
			tabs[tabToBeSet].addClass("active");
		} else {
			tabs[tab].removeClass("active");
		}
	}
}

function fadeAllExcept(identifier, immediate, doneFadingOut, doneFadingIn) { // identifier must be a key from the pages
	var fadeInFunction;
	var fadeCount = Object.keys(pages).length;
	for (var page in pages) {
		pages[page].fadeOut(400, function() {
			fadeCount--;
			if (fadeCount == 0) {
				fadeInFunction();
				if (doneFadingOut != undefined)
					doneFadingOut();
			}
		});
		if (page == identifier) {
			fadeInFunction = function() {
				pages[identifier].fadeIn(400, function() {
					if (doneFadingIn != undefined)
						doneFadingIn();
				});
			}
		}
	}
	if (immediate != undefined)
		immediate();
}

function showTabContent(identifier, doneFadingOut, doneFadingIn) {
	var fadeInFunction;
	var fadeCountTab = Object.keys(tabContents).length;
	for (var tabContent in tabContents) {
		tabContents[tabContent].fadeOut(400, function() {
			fadeCountTab--;
			if (fadeCountTab == 0) {
				fadeInFunction();
				if (doneFadingOut != undefined)
					doneFadingOut();
			}
		});
		if (tabContent == identifier) {console.log(identifier, tabContent)
			setTabToActive(tabContent.substring(0,tabContent.length - 7));
			fadeInFunction = function() {
				tabContents[identifier].fadeIn(400, function() {
					if (doneFadingIn != undefined)
						doneFadingIn();
				});
			}
		}
	}
}

function makeBookFullOpacity(bookNumber) {
	for (var book in bookImages) {
		if (bookNumber == book) {
			bookImages[book].addClass("fullOpacity");
		} else {
			bookImages[book].removeClass("fullOpacity");
		}
	}
}
function slideDownBooks() {$("#book-editions-img").slideDown(800);}
function slideUpBooks() {$("book-editions-img").slideUp(800);}

$(document).ready(function(){
	$("#home-button").on('click', function() {
		fadeAllExcept("mainPage");
		slideDownBooks();
		makeBookFullOpacity(0);
	});

	$("#top-link .dropdown-toggle").hover(function() {
		$("#top-link .dropdown-toggle").dropdown('toggle');
	}, function(){});
	$('#top-link li').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
	});
	$('#top-link li').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});

	bookImages[1].on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
			showInfo(FIRST_EDITION);
		});
		makeBookFullOpacity(FIRST_EDITION);
		selectedEdition = FIRST_EDITION;
	});

	bookImages[2].on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
			showInfo(SECOND_EDITION);
		});
		makeBookFullOpacity(SECOND_EDITION);
		selectedEdition = SECOND_EDITION;
	});

	bookImages[3].on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
			showInfo(THIRD_EDITION);
		});
		makeBookFullOpacity(THIRD_EDITION);
		selectedEdition = THIRD_EDITION;
	});

	$(".errata-1").on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
			displayErrata(FIRST_EDITION);
		});
		makeBookFullOpacity(FIRST_EDITION);
		selectedEdition = FIRST_EDITION;
	});
	$(".errata-2").on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
			displayErrata(SECOND_EDITION);
		});
		makeBookFullOpacity(SECOND_EDITION);
		selectedEdition = SECOND_EDITION;
	});
	$(".errata-3").on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
			displayErrata(THIRD_EDITION);
		});
		makeBookFullOpacity(THIRD_EDITION);
		selectedEdition = THIRD_EDITION;
	});

	initializeBookTabs();

	$(".testimonial-button").on('click', function() {
		fadeAllExcept("testimonial");
		slideUpBooks();
		showTestimonial();
	});

	$(".download-button").on('click', function() {
		fadeAllExcept("downloads");
		slideUpBooks();
		showDownloads();
	}); 

	$(".workshop-button").on('click', function() {
		fadeAllExcept("workshop");
		slideUpBooks();
		showWorkshop();
	}); 

	$(".credits-button").on('click', function() {
		fadeAllExcept("credits");
		slideUpBooks();
		showCredits();
	}); 

	$(".sales-data-button").on('click', function() {
		fadeAllExcept("salesData");
		slideUpBooks();
		showSales();
	}); 

	$("a").tooltip({'placement': 'bottom','content':'html'});
});

function initializeBookTabs() {
	$(".details-button").on('click', function() {
		showTabContent("bookDetailsTabContent", function() {
			showInfo(selectedEdition);
		});
	});

	$(".content-button").on('click', function() {
		showTabContent("bookContentsTabContent", function() {
			showContent(selectedEdition);
		});
	});

	$(".errata-button").on('click', function() {
		showTabContent("bookErratasTabContent", function() {
			displayErrata(selectedEdition);
		});
	});
}
