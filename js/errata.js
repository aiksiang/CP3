var errata;
var clickedHeader;

$(function getErrata(edition) {
	$.get("php/retrieval.php", {action: "getErrata"}).done(function(result) {
		errata = result;
		displayErrata(edition);
	});	
});

function displayErrata(edition) {
	$(".book-edition-errata").html("");
	var HTMLtoBeInserted = '';
	HTMLtoBeInserted += '\
		<div class="container">\
			<div class="col-md-12" id="report-error">\
				<div class="row">\
					<div class="col-md-12" id="select-edition"><h3>Report Error</h3></div>\
					<p>This page contains all the known errors and bugs for <span id="edition">CP</span>. <br>Please report any sightings of bugs, errors or misprints here.</p>\
				</div>\
				\
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#errata-submit" onClick="getQuestion();">Report</button>\
	  		</div>\
	  	</div>\
	  	<hr/>\
	  	<table class="table" id="errataTable">\
	  	</table>\
	';

	$(".book-edition-errata").append(HTMLtoBeInserted);
    showTable(edition);
}

function showTable(edition) {
	var HTMLtoBeInserted = '';
	$("#errataTable").html("");
	HTMLtoBeInserted += '\
			<thead>\
				<tr>\
					<th class="pageColumn">Page Number <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
					<th class="errataColumn">Errata <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
					<th class="authorColumn">Author <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
					<th class="typeColumn">Type <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
					<th class="timeColumn">Time <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
					<th class="severityColumn">Severity <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
					<th class="statusColumn">Status <span class="glyphicon glyphicon-sort" aria-hidden="true"></span></th>\
				</tr>\
			</thead>\
			';
	for (var i in errata) {
		if (errata[i].version == edition) {
			HTMLtoBeInserted += '\
				<tbody>\
					<tr>\
			';
			if (errata[i].pageNum == 0) {
				HTMLtoBeInserted += '\
						<td>'+ 'Not Applicable' +'</td>\
					';
			} else {
				HTMLtoBeInserted += '\
						<td>'+ errata[i].pageNum +'</td>\
				';
			}
			HTMLtoBeInserted += '\
						<td>'+ errata[i].content +'</td>\
						<td>'+ errata[i].authorName +'</td>\
						<td>'+ errata[i].type +'</td>\
			';
			HTMLtoBeInserted += '\
						<td>'+ errata[i].raise_time +'</td>\
						<td>'+ errata[i].severity +'</td>\
			';
			if (errata[i].isFixed == 1) {
				HTMLtoBeInserted += '\
						<td>'+ 'Fixed' +'</td>\
				';
			} else {
				HTMLtoBeInserted += '\
						<td>'+ 'Pending Fix' +'</td>\
				';
			}
			HTMLtoBeInserted += '\
					</tr>\
				</tbody>\
			';
		}
	}

	HTMLtoBeInserted += '\
		<br>\
		<div class="btn-group backToTop">\
  			<a href="#content-top"><button type="button" class="btn btn-default center-block"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span> Back to Menu</button></a>\
  		</div>\
  	';
  	
	$("#errataTable").html(HTMLtoBeInserted);
	sortErrata(edition);
}

function sortErrata(edition) {
	$("#errataTable thead th").click(function() {
		switch($(this).attr("class")) {
			case 'pageColumn':
				if (clickedHeader != 'pageColumn') {
					errata.sort(function(a,b) {
						return a.pageNum - b.pageNum;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						return b.pageNum - a.pageNum;
					});
					clickedHeader = null;
				}
				break;
			case 'errataColumn':
				if (clickedHeader != 'errataColumn') {
					errata.sort(function(a,b) {
						if (a.content.toLowerCase() > b.content.toLowerCase())
							return 1;
						else if (a.content.toLowerCase() < b.content.toLowerCase())
							return -1;
						else
							return 0;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						if (a.content.toLowerCase() < b.content.toLowerCase())
							return 1;
						else if (a.content.toLowerCase() > b.content.toLowerCase())
							return -1;
						else
							return 0;
					});
					clickedHeader = null;
				}
				break;
			case 'authorColumn':
				if (clickedHeader != 'authorColumn') {
					errata.sort(function(a,b) {
						if (a.authorName.toLowerCase() > b.authorName.toLowerCase())
							return 1;
						else if (a.authorName.toLowerCase() < b.authorName.toLowerCase())
							return -1;
						else
							return 0;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						if (a.authorName.toLowerCase() < b.authorName.toLowerCase())
							return 1;
						else if (a.authorName.toLowerCase() > b.authorName.toLowerCase())
							return -1;
						else
							return 0;
					});
					clickedHeader = null;
				}
				break;
			case 'typeColumn':
				if (clickedHeader != 'typeColumn') {
					errata.sort(function(a,b) {
						return a.type - b.type;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						return b.type - a.type;
					});
					clickedHeader = null;
				}
				break;
			case 'timeColumn':
				if (clickedHeader != 'clickedHeader') {
					errata.sort(function(a,b) {
						return b.raise_time - a.raise_time;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						return a.raise_time - b.raise_time;
					});
					clickedHeader = null;
				}
				break;
			case 'severityColumn':
				if (clickedHeader != 'severityColumn') {
					errata.sort(function(a,b) {
						return b.severity - a.severity;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						return a.severity - b.severity;
					});
					clickedHeader = null;
				}
				break;
			case 'statusColumn':
				if (clickedHeader != 'statusColumn') {
					errata.sort(function(a,b) {
						return a.isFixed - b.isFixed;
					});
					clickedHeader = $(this).attr("class");
				} else {
					errata.sort(function(a,b) {
						return b.isFixed - a.isFixed;
					});
					clickedHeader = null;
				}
				break;
			default:
				break;
		}
		showTable(edition);
	});
}
