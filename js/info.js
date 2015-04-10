
function showInfo(edition){
	var HTMLtoBeInserted = '';
	DOM_bookInfo = $(".book-edition-info");
	DOM_bookInfo.html("");
	switch (edition) {
		case FIRST_EDITION:
				HTMLtoBeInserted += '\
					<dl class="row">\
						<div class="col-md-4">\
					  		<dt>Number of Pages</dt>\
					  		<dd>'+firstEdition.noOfPages+'</dd>\
					  	</div>\
					  	<div class="col-md-3">\
					  		<dt>Total Chapters</dt>\
					  		<dd>'+firstEdition.totalChapters+'</dd>\
					  	</div>\
					  	<div class="col-md-5">\
					  		<dt>Sample Pages</dt>\
					  		<dd>'+firstEdition.samplePages+'</dd>\
					  	</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-4">\
					  		<dt>Selling price (Printed)</dt>\
			';
	  		for (var i in firstEdition.sellingPricePrinted) {
	  			HTMLtoBeInserted += '\
			  				<dd>'+firstEdition.sellingPricePrinted[i].price+'</dd>\
			  				<dd>\
			  					<a href="'+firstEdition.sellingPricePrinted[i].link+'">\
			  					 Get a printed copy of the 1st edition from ('+firstEdition.sellingPricePrinted[i].description+')\
			  					</a>\
			  				</dd>\
	  			';
	  		}
				  		HTMLtoBeInserted += '\
									</div>\
									<div class="col-md-3">\
										<dt>Selling price (eBook)</dt>\
						';
	  		for (var i in firstEdition.sellingPriceEbook) {
	  			HTMLtoBeInserted += '\
			  				<dd>'+firstEdition.sellingPriceEbook[i].price+'</dd>\
			  				<dd>\
			  					<a href="'+firstEdition.sellingPriceEbook[i].link+'">\
			  					 Simply download a free copy '+firstEdition.sellingPriceEbook[i].description+'\
			  					</a>\
			  				</dd>\
	  			';
	  		}
				  		HTMLtoBeInserted += '\
									</div>\
									<div class="col-md-5">\
										<dt>Sales Status</dt>\
						';
			for (var i in firstEdition.saleStatus) {
				HTMLtoBeInserted += '\
							<dd>'+firstEdition.saleStatus[i].number+' copies as of\
							'+firstEdition.saleStatus[i].sinceDate+'\
							'+firstEdition.saleStatus[i].type+'\
							</dd>\
				';
			}
	 		HTMLtoBeInserted += '\
						</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-4">\
							<dt>eBook Version Release Date</dt>\
							<dd>'+firstEdition.eBookReleaseDate.date+'</dd>\
	 						<dd>\
	 							<a href="'+firstEdition.eBookReleaseDate.buyLink+'">\
	 								 Donate 0.99 USD to lulu for the e-book of CP1 (only A4 version)\
	 							</a>\
	 						</dd>\
	 					</div>\
	 					<div class="col-md-3">\
	 						<dt>100 Copies Mark</dt>\
	 						<dd>'+firstEdition.hundredCopiesMark.date+'\
	 							('+firstEdition.hundredCopiesMark.remarks+')\
	 						</dd>\
	 					</div>\
	 					<div class="col-md-5">\
	 						<dt>Printed Version Release Date</dt>\
							<dd>'+firstEdition.printedReleaseDate.date+'\
	 							('+firstEdition.printedReleaseDate.remarks+')\
	 						</dd>\
						</div>\
					</dl>\
			';
			break;
		case SECOND_EDITION:
			HTMLtoBeInserted += '\
					<dl class="row">\
						<div class="col-md-4">\
					  		<dt>Number of Pages</dt>\
					  		<dd>'+secondEdition.noOfPages+'</dd>\
					  	</div>\
					  	<div class="col-md-3">\
					  		<dt>Total Chapters</dt>\
					  		<dd>'+secondEdition.totalChapters+'</dd>\
					  	</div>\
					  	<div class="col-md-5">\
					  		<dt>Sample Pages</dt>\
					  		<dd>'+secondEdition.samplePages+'</dd>\
					  	</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-4">\
					  		<dt>Selling price (Printed)</dt>\
			';
	  		for (var i in secondEdition.sellingPricePrinted) {
	  			HTMLtoBeInserted += '\
			  				<dd>'+secondEdition.sellingPricePrinted[i].price+'</dd>\
			  				<dd>\
			  					<a href="'+secondEdition.sellingPricePrinted[i].link+'">\
			  					Buy the 3rd Edition ('+secondEdition.sellingPricePrinted[i].description+')\
			  					</a>\
			  				</dd>\
	  			';
	  		}
	  		HTMLtoBeInserted += '\
						</div>\
						<div class="col-md-3">\
							<dt>Selling price (eBook)</dt>\
							<dd>'+secondEdition.sellingPriceEbook+'</dd>\
						</div>\
						<div class="col-md-5">\
							<dt>Sales Status</dt>\
			';
			for (var i in secondEdition.saleStatus) {
				HTMLtoBeInserted += '\
							<dd>'+secondEdition.saleStatus[i].number+' copies as of\
							'+secondEdition.saleStatus[i].sinceDate+'\
							('+secondEdition.saleStatus[i].type+')\
							</dd>\
				';
			}
	 		HTMLtoBeInserted += '\
						</div>\
					</dl>\
					<dl class="row">\
						<div class="col-md-4">\
							<dt>eBook Version Release Date</dt>\
							<dd>'+secondEdition.eBookReleaseDate.date+'</dd>\
	 						<dd>\
	 							<a href="'+secondEdition.eBookReleaseDate.buyLink+'">\
	 								Buy e-book of the 3rd edition (only A4 version)\
	 							</a>\
	 						</dd>\
	 					</div>\
	 					<div class="col-md-3">\
	 						<dt>100 Copies Mark</dt>\
	 						<dd>'+secondEdition.hundredCopiesMark.date+'\
	 							('+secondEdition.hundredCopiesMark.remarks+')\
	 						</dd>\
	 					</div>\
	 					<div class="col-md-5">\
	 						<dt>Printed Version Release Date</dt>\
	 		';
	 		for (var i in secondEdition.printedReleaseDate) {
				HTMLtoBeInserted += '\
							<dd>'+secondEdition.printedReleaseDate[i].date+'\
	 							('+secondEdition.printedReleaseDate[i].remarks+')\
	 						</dd>\
				';
			}
			HTMLtoBeInserted += '\
						</div>\
					</dl>\
				';
			break;
		case THIRD_EDITION:
			HTMLtoBeInserted += '\
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
			';
			break;
	}
	DOM_bookInfo.append(HTMLtoBeInserted);
}

var firstEdition = {
	noOfPages: "152 (76 double-sided) + 4 pages cover",
	totalChapters: "7",
	samplePages: "Removed, just download the entire e-book below",
	sellingPricePrinted:[	
		{
			description: "lulu",
			price: "Now only 8.91 USD -> 7.13 USD (i.e. the printing + shipping cost only)",
			link: "#"
		},
	],
	sellingPriceEbook:[
		{
			description: "here",
			price: "Project retired from lulu.com",
			link: "#"
		},
	],
	saleStatus: [
		{
			number: "668",
			sinceDate: "13 June 2012",
			type: ""
		},
		
	],
	eBookReleaseDate: {
		date: "16 July 2011",
		buyLink: "#"
	},
	hundredCopiesMark: {
		date: "30 November 2010",
		remarks: "~113 days after release"
	},
	printedReleaseDate: {
		date: "9 August 2010",
		remarks: "Before IOI 2010"
	}
}


var secondEdition = {
	noOfPages: "262 (131 double-sided sheets) + 4 pages cover",
	totalChapters: "8",
	samplePages: " Click this link (27 from 262 pages)",
	sellingPricePrinted:[	
		{
			description: "Regular Edition",
			price: "Now 18.05 -> 14.86 USD (+ shipping cost)",
			link: "#"
		},
		{
			description: "Large Edition",
			price: "Now 20.96 -> 17.26 USD (+ shipping cost)",
			link: "#"
		}
	],
	sellingPriceEbook: "Just 14.32 USD",
	saleStatus: [
		{
			number: "1005",
			sinceDate: "27 July 2012",
			type: "A5"
		},
		{
			number: "153",
			sinceDate: "22 Dec 2012",
			type: "A4"
		},
	],
	eBookReleaseDate: {
		date: "22 December 2012",
		buyLink: "#"
	},
	hundredCopiesMark: {
		date: "11 August 2011",
		remarks: "Just 11 Days after release :D"
	},
	printedReleaseDate: [
		{
			type: "A5",
			date: "1 August 2011",
			remarks: "After IOI 2011"
		},
		{
			type: "A4",
			date: "24 May 2012",
			remarks: "the day Steven turned 30"
		},
	],
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