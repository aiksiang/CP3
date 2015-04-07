function populatePage(edition, callback) {
	var DOM_bookDetails = $(".book-details");
	DOM_bookDetails.html("");
	// DOM_bookDetails.append('\
	// 	<div class="col-xs-2 col-xs-offset-2">\
	// 		<br><br>\
	// 		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\
	// 	</div>\
	// 	<div class="col-xs-4">\
	// 		<span class="edition"><img src="img/cp' + edition + '.png" class="center-block"></span>\
	// 	</div>\
	// 	<div class="col-xs-2 col-xs-offset-2">\
	// 		<br><br>\
	// 		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\
	// 	</div>\
	// ');
	switch (edition) {
		case FIRST_EDITION:
			HTMLtoBeInserted = '';
			break;
		case SECOND_EDITION:
			HTMLtoBeInserted = '';
			break;
		case THIRD_EDITION:
			HTMLtoBeInserted = '\
				<div class="row" id="book-edition-info">\
					<dl class="row">\
						<div class="col-md-4">\
					  		<dt>Number of Pages</dt>\
					  		<dd>'+thirdEdition.noOfPages+'</dd>\
					  	</div>\
					  	<div class="col-md-3">\
					  		<dt>Total Chapters</dt>\
					  		<dd>'+thirdEdition.totalChapters+'</dd>\
					  	</div>\
					  	<div class="col-md-5">\
					  		<dt>Sample Pages</dt>\
					  		<dd>'+thirdEdition.samplePages+'</dd>\
					  	</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-4">\
					  		<dt>Selling price (Printed)</dt>\
			';
	  		for (var i in thirdEdition.sellingPricePrinted) {
	  			HTMLtoBeInserted += '\
			  				<dd>'+thirdEdition.sellingPricePrinted[i].price+'</dd>\
			  				<dd>\
			  					<a href="'+thirdEdition.sellingPricePrinted[i].link+'">\
			  					Buy the 3rd Edition ('+thirdEdition.sellingPricePrinted[i].description+')\
			  					</a>\
			  				</dd>\
	  			';
	  		}
	  		HTMLtoBeInserted += '\
						</div>\
						<div class="col-md-3">\
							<dt>Selling price (eBook)</dt>\
							<dd>'+thirdEdition.sellingPriceEbook+'</dd>\
						</div>\
						<div class="col-md-5">\
							<dt>Sales Status</dt>\
			';
			for (var i in thirdEdition.saleStatus) {
				HTMLtoBeInserted += '\
							<dd>'+thirdEdition.saleStatus[i].number+' copies as of\
							'+thirdEdition.saleStatus[i].sinceDate+'\
							('+thirdEdition.saleStatus[i].type+')\
							</dd>\
				';
			}
	 		HTMLtoBeInserted += '\
						</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-4">\
							<dt>eBook Version Release Date</dt>\
							<dd>'+thirdEdition.eBookReleaseDate.date+'</dd>\
	 						<dd>\
	 							<a href="'+thirdEdition.eBookReleaseDate.buyLink+'">\
	 								Buy e-book of the 3rd edition (only A4 version)\
	 							</a>\
	 						</dd>\
	 					</div>\
	 					<div class="col-md-3">\
	 						<dt>100 Copies Mark</dt>\
	 						<dd>'+thirdEdition.hundredCopiesMark.date+'\
	 							('+thirdEdition.hundredCopiesMark.remarks+')\
	 						</dd>\
	 					</div>\
	 					<div class="col-md-5">\
	 						<dt>Printed Version Release Date</dt>\
							<dd>'+thirdEdition.printedReleaseDate.date+'\
	 							('+thirdEdition.printedReleaseDate.remarks+')\
	 						</dd>\
						</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-5 col-md-offset-3">\
							<dt>Errata and Plan</dt>\
							<dd>\
								<a class="errataLink" id="errata3">\
									Errata of 3rd edition and plan for the 4th edition\
								</a>\
							</dd>\
						</div>\
					</dl>\
				</div>\
			';
			break;
	}
	DOM_bookDetails.append(HTMLtoBeInserted);
	callback();
}


var thirdEdition = {
	noOfPages: "447 (224 double-sided) + 4 pages cover",
	totalChapters: "9",
	samplePages: "See preview at lulu.com",
	sellingPricePrinted:[	
		{
			description: "A5 Paperback",
			price: "29.99 -> Now 26.99 USD (+Shipping Cost)",
			link: "#"
		},
		{
			description: "8.25 x 10.75 inch (~2xA5) Hard Cover",
			price: "39.99 -> Now 35.99 USD (+Shipping Cost)",
			link: "#"
		}
	],
	sellingPriceEbook: "19.99 USD",
	saleStatus: [
		{
			number: "225",
			sinceDate: "13 Jun 2013",
			type: "A5 Paperback + Hard Cover"
		},
		{
			number: "339",
			sinceDate: "14 Jul 2013",
			type: "A5 Paperback + Hard Cover"
		},
		{
			number: "~3000+",
			sinceDate: "31 Dec 2014",
			type: "lulu.com + Local Singapore Sales"
		},
		{
			number: "3-4 Books/Day",
			sinceDate: "Past Year",
			type: "Current Rate"
		}
	],
	eBookReleaseDate: {
		date: "31 Dec 2014",
		buyLink: "#"
	},
	hundredCopiesMark: {
		date: "28 May 2013",
		remarks: "Just 5 Days after release :D"
	},
	printedReleaseDate: {
		date: "24 May 2013",
		remarks: "The day Steven turned 31"
	}
}