var FIRST_EDITION = 1;
var SECOND_EDITION = 2;
var THIRD_EDITION = 3;
var selectedEdition = 0;

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
		if (tabContent == identifier) {
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
function slideUpBooks() {$("#book-editions-img").slideUp(800);}

$(document).ready(function(){
	//Redirection, for example cpbook.net/#errata
	var hashLocation = (window.location.href).replace(/^.*#/, '');
	if (!(hashLocation == "testimonial" ||
		hashLocation == "download" ||
		hashLocation == "downloads" ||
		hashLocation == "workshop" ||
		hashLocation == "workshops" ||
		hashLocation == "credit" ||
		hashLocation == "credits" ||
		hashLocation == "sales" ||
		hashLocation == "salesData"
		)) {
		slideDownBooks();
	}

	$("#home-button").on('click', function() {
		fadeAllExcept("mainPage");
		slideDownBooks();
		makeBookFullOpacity(0);
		window.location.href = (window.location.href).replace(/#.*/, '');
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
		slideDownBooks();
		makeBookFullOpacity(FIRST_EDITION);
		selectedEdition = FIRST_EDITION;
		appendHashTag("CP1details");
	});

	bookImages[2].on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
			showInfo(SECOND_EDITION);
		});
		slideDownBooks();
		makeBookFullOpacity(SECOND_EDITION);
		selectedEdition = SECOND_EDITION;
		appendHashTag("CP2details");
	});

	bookImages[3].on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
			showInfo(THIRD_EDITION);
		});
		slideDownBooks();
		makeBookFullOpacity(THIRD_EDITION);
		selectedEdition = THIRD_EDITION;
		appendHashTag("CP3details");
	});

	$(".errata-1").on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
			displayErrata(FIRST_EDITION);
		});
		slideDownBooks();
		makeBookFullOpacity(FIRST_EDITION);
		selectedEdition = FIRST_EDITION;
		appendHashTag("CP1errata");
	});
	$(".errata-2").on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
			displayErrata(SECOND_EDITION);
		});
		slideDownBooks();
		makeBookFullOpacity(SECOND_EDITION);
		selectedEdition = SECOND_EDITION;
		appendHashTag("CP2errata");
	});
	$(".errata-3").on('click', function() {
		fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
			displayErrata(THIRD_EDITION);
		});
		slideDownBooks();
		makeBookFullOpacity(THIRD_EDITION);
		selectedEdition = THIRD_EDITION;
		appendHashTag("CP3errata");
	});

	initializeBookTabs();

	$(".testimonial-button").on('click', function() {
		fadeAllExcept("testimonial");
		slideUpBooks();
		showTestimonial();
		appendHashTag("testimonial");
	});

	$(".download-button").on('click', function() {
		fadeAllExcept("downloads");
		slideUpBooks();
		showDownloads();
		appendHashTag("downloads");
	}); 

	$(".workshop-button").on('click', function() {
		fadeAllExcept("workshop");
		slideUpBooks();
		showWorkshop();
		appendHashTag("workshops");
	}); 

	$(".credits-button").on('click', function() {
		fadeAllExcept("credits");
		slideUpBooks();
		showCredits();
		appendHashTag("credits");
	}); 

	$(".sales-data-button").on('click', function() {
		fadeAllExcept("salesData");
		slideUpBooks();
		showSales();
		appendHashTag("sales");
	}); 

	switch(hashLocation) {
		case "CP1details":
			fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
				showInfo(FIRST_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(FIRST_EDITION);
			selectedEdition = FIRST_EDITION;
			appendHashTag("CP1details");
		break;
		case "CP2details":
			fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
				showInfo(SECOND_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(SECOND_EDITION);
			selectedEdition = SECOND_EDITION;
			appendHashTag("CP2details");
		break;
		case "CP3details":
			fadeAllExcept("bookContainer", showTabContent("bookDetailsTabContent"), function(){
				showInfo(THIRD_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(THIRD_EDITION);
			selectedEdition = THIRD_EDITION;
			appendHashTag("CP3details");
		break;
		case "CP1content":
			fadeAllExcept("bookContainer", showTabContent("bookContentsTabContent"), function(){
				showContent(FIRST_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(FIRST_EDITION);
			selectedEdition = FIRST_EDITION;
			appendHashTag("CP1content");
		break;
		case "CP2content":
			fadeAllExcept("bookContainer", showTabContent("bookContentsTabContent"), function(){
				showContent(SECOND_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(SECOND_EDITION);
			selectedEdition = SECOND_EDITION;
			appendHashTag("CP2content");
		break;
		case "CP3content":
			fadeAllExcept("bookContainer", showTabContent("bookContentsTabContent"), function(){
				showContent(THIRD_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(THIRD_EDITION);
			selectedEdition = THIRD_EDITION;
			appendHashTag("CP3content");
		break;
		case "CP1errata":
			fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
				getErrata(FIRST_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(FIRST_EDITION);
			selectedEdition = FIRST_EDITION;
			appendHashTag("CP1errata");
		break;
		case "CP2errata":
			fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
				getErrata(SECOND_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(SECOND_EDITION);
			selectedEdition = SECOND_EDITION;
			appendHashTag("CP2errata");
		break;
		case "errata":
		case "CP3errata":
			fadeAllExcept("bookContainer", showTabContent("bookErratasTabContent"), function(){
				getErrata(THIRD_EDITION);
			});
			slideDownBooks();
			makeBookFullOpacity(THIRD_EDITION);
			selectedEdition = THIRD_EDITION;
			appendHashTag("CP3errata");
		break;
		case "testimonial":
			fadeAllExcept("testimonial");
			slideUpBooks();
			showTestimonial();
			appendHashTag("testimonial");
		break;
		case "download":
		case "downloads":
			fadeAllExcept("downloads");
			slideUpBooks();
			getDownloads();
			appendHashTag("downloads");
		break;
		case "workshop":
		case "workshops":
			fadeAllExcept("workshop");
			slideUpBooks();
			showWorkshop();
			appendHashTag("workshops");
		break;
		case "credit":
		case "credits":
			fadeAllExcept("credits");
			slideUpBooks();
			getCredits();
			appendHashTag("credits");
		break;
		case "sales":
		case "salesData":
			fadeAllExcept("salesData");
			slideUpBooks();
			showSales();
			appendHashTag("sales");
		break;
	}

	$("a").tooltip({'placement': 'bottom','content':'html'});
});

function initializeBookTabs() {
	$(".details-button").on('click', function() {
		showTabContent("bookDetailsTabContent", function() {
			showInfo(selectedEdition);
		});
		appendHashTag("CP" + selectedEdition + "details");
	});

	$(".content-button").on('click', function() {
		showTabContent("bookContentsTabContent", function() {
			showContent(selectedEdition);
		});
		appendHashTag("CP" + selectedEdition + "content");
	});

	$(".errata-button").on('click', function() {
		showTabContent("bookErratasTabContent", function() {
			displayErrata(selectedEdition);
		});
		appendHashTag("CP" + selectedEdition + "errata");
	});
}

function appendHashTag(hash) {
	if ((window.location.href).match(/#.*/g)) {
		window.location.href = (window.location.href).replace(/#.*/, '#' + hash);
	} else {
		(window.location.href) +=  "#" + hash;
	}
}

