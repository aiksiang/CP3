function populateBookDetails(edition, selection, callback) {
	var DOM_bookDetails = $(".book-details");
	DOM_bookDetails.html("");
	var HTMLtoBeInserted = '';	

	switch(selection) {
		case SELECT_ERR:
			HTMLtoBeInserted = '\
				<div class="row" id="book-nav">\
					<ul class="nav nav-tabs">\
						<li id="details" role="presentation"><a class="details-button">Details</a></li>\
						<li id="content" role="presentation"><a class="content-button">Content</a></li>\
						<li id="errataTab" class="active" role="presentation"><a class="errata-button">Errata</a></li>\
					</ul>\
			   	</div>\
			   	<div class="book-edition-content" style="display:none;">\
				</div>\
				<div class="row book-edition-info">\
				</div>\
				<div class="book-edition-errata">\
				</div>\
			   	';
			DOM_bookDetails.append(HTMLtoBeInserted);
			displayErrata(edition);
			callback();
			break;
		case SELECT_INFO:
			HTMLtoBeInserted = '\
				<div class="row" id="book-nav">\
					<ul class="nav nav-tabs">\
						<li id="details" class="active" role="presentation"><a class="details-button">Details</a></li>\
						<li id="content" role="presentation"><a class="content-button">Content</a></li>\
						<li id="errataTab" role="presentation"><a class="errata-button">Errata</a></li>\
					</ul>\
			   	</div>\
			   	<div class="book-edition-content" style="display:none;">\
				</div>\
				<div class="row book-edition-info">\
				</div>\
				<div class="book-edition-errata">\
				</div>\
			   	';
			DOM_bookDetails.append(HTMLtoBeInserted);
			showInfo(edition);
			callback();
			break;
	}
}
