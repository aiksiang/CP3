var errata;
var errataDisplay;
var clickedHeader;
var arrowPointingUp = true;
var classToName = {
	pageColumn: "Page Number",
	errataColumn: "Errata",
	authorColumn: "Author",
	typeColumn: "Type",
	timeColumn: "Time",
	severityColumn: "Severity",
	statusColumn: "Status"
}

$(function getErrata(edition) {
	$.get("php/retrieval.php", {action: "getErrata"}).done(function(result) {
		errata = result;
		errataDisplay = errata;
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
	  	<div class="input-group input-group" id="searchErrata">\
			<div class="input-group-btn dropdown">\
				<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">\
					Column\
					<span class="caret"></span>\
				</button>\
				<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\
					<li role="presentation"><a role="menuitem" tabindex="-1" onClick="changeColumn(' + "'" + "Page Number" + "'" + ');">Page Number</a></li>\
					<li role="presentation"><a role="menuitem" tabindex="-1" onClick="changeColumn(' + "'" + "Errata" + "'" + ');">Errata</a></li>\
					<li role="presentation"><a role="menuitem" tabindex="-1" onClick="changeColumn(' + "'" + "Author" + "'" + ');">Author</a></li>\
					<li role="presentation"><a role="menuitem" tabindex="-1" onClick="changeColumn(' + "'" + "Type" + "'" + ');">Type</a></li>\
					<li role="presentation"><a role="menuitem" tabindex="-1" onClick="changeColumn(' + "'" + "Severity" + "'" + ');">Severity</a></li>\
				</ul>\
			</div>\
	  		<input class="form-control" type="search" placeholder="Search...">\
	  		<div class="input-group-btn">\
	  			<button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>\
	  		</div>\
	  	</div>\
	  	<table class="table" id="errataTable">\
			<thead>\
				<tr>\
					<th class="pageColumn">Page Number</th>\
					<th class="errataColumn">Errata</th>\
					<th class="authorColumn">Author</th>\
					<th class="typeColumn">Type</th>\
					<th class="timeColumn">Time</th>\
					<th class="severityColumn">Severity</th>\
					<th class="statusColumn">Status</th>\
				</tr>\
			</thead>\
			<tbody>\
			</tbody>\
	  	</table>\
	';

	$(".book-edition-errata").append(HTMLtoBeInserted);
	sortErrata(edition);
	clickHeader('pageColumn', edition);

	$("#searchErrata .input-group-btn button").on('click', function() {
		searchErrata();
	});

	$("#searchErrata input").focusout(function() {
		searchErrata();
	});

	$("#searchErrata input").keyup(function() {
		searchErrata();
	});
}


function changeColumn(text) {
	$("#searchErrata .dropdown-toggle").html(text + '<span class="caret"></span>');
	$("#searchErrata input").val("");
}

function searchErrata() {
	var searchField = $("#searchErrata .dropdown-toggle").text();
	var inputField = $("#searchErrata input").val();
	switch (searchField) {
		case "Page Number":
			errataDisplay = [];
			for (var i in errata) {
				if (errata[i].pageNum == inputField) {
					errataDisplay.push(errata[i]);
				}
			}
			if (inputField == "")
				errataDisplay = errata;
		break;
		case "Errata":
			errataDisplay = [];
			for (var i in errata) {
				if (errata[i].content.toLowerCase().indexOf(inputField.toLowerCase()) >= 0) {
					errataDisplay.push(errata[i]);
				}
			}
			if (inputField == "")
				errataDisplay = errata;
		break;
		case "Author":
			errataDisplay = [];
			for (var i in errata) {
				if (errata[i].authorName.toLowerCase().indexOf(inputField.toLowerCase()) >= 0) {
					errataDisplay.push(errata[i]);
				}
			}
			if (inputField == "")
				errataDisplay = errata;
		break;
		case "Type":
			errataDisplay = [];
			for (var i in errata) {
				if (errata[i].type == inputField) {
					errataDisplay.push(errata[i]);
				}
			}
			if (inputField == "")
				errataDisplay = errata;
		break;
		case "Severity":
			errataDisplay = [];
			for (var i in errata) {
				if (errata[i].severity == inputField) {
					errataDisplay.push(errata[i]);
				}
			}
			if (inputField == "")
				errataDisplay = errata;
		break;
		default:
			if (inputField != "") {
				errataDisplay = [];
				for (var i in errata) {
					if (errata[i].pageNum == inputField) {
						errataDisplay.push(errata[i]);
					} else if (errata[i].content.toLowerCase().indexOf(inputField.toLowerCase()) >= 0) {
						errataDisplay.push(errata[i]);
					} else if (errata[i].authorName.toLowerCase().indexOf(inputField.toLowerCase()) >= 0) {
						errataDisplay.push(errata[i]);
					} else if (errata[i].type == inputField) {
						errataDisplay.push(errata[i]);
					} else if (errata[i].severity == inputField) {
						errataDisplay.push(errata[i]);
					}
				}
			} else {
				errataDisplay = errata;
			}
		break;
	}
	showTable(selectedEdition);
}

function showTable(edition) {
	var HTMLtoBeInserted = '';
	$("#errataTable tbody").html("");
	for (var i in errataDisplay) {
		if (errataDisplay[i].version == edition) {
			HTMLtoBeInserted += '\
					<tr>\
			';
			if (errataDisplay[i].pageNum == 0) {
				HTMLtoBeInserted += '\
						<td>'+ 'Not Applicable' +'</td>\
					';
			} else {
				HTMLtoBeInserted += '\
						<td>'+ errataDisplay[i].pageNum +'</td>\
				';
			}
			HTMLtoBeInserted += '\
						<td>'+ errataDisplay[i].content +'</td>\
						<td>'+ errataDisplay[i].authorName +'</td>\
						<td>'+ errataDisplay[i].type +'</td>\
			';
			HTMLtoBeInserted += '\
						<td>'+ errataDisplay[i].raise_time +'</td>\
						<td>'+ errataDisplay[i].severity +'</td>\
			';
			if (errataDisplay[i].isFixed == 1) {
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
			';
		}
	}
  	
	$("#errataTable tbody").html(HTMLtoBeInserted);
}

function sortErrata(edition) {
	$("#errataTable thead th").click(function() {
		clickHeader($(this).attr("class"), edition);
	});

	$("#errataTable thead th").hover(function() {
		if (clickedHeader != $(this).attr("class"))
			$("." + $(this).attr("class")).html(classToName[$(this).attr("class")] + ' <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>');
	},function() {
		if (clickedHeader != $(this).attr("class"))
			$("." + $(this).attr("class")).html(classToName[$(this).attr("class")]);
	});
}

function clickHeader(className, edition) {
	if (clickedHeader != undefined) {
		$("." + clickedHeader).html(classToName[clickedHeader]);
	}

	switch(className) {
		case 'pageColumn':
			if (clickedHeader != 'pageColumn' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					return a.pageNum - b.pageNum;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					return b.pageNum - a.pageNum;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		case 'errataColumn':
			if (clickedHeader != 'errataColumn' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					if (a.content.toLowerCase() > b.content.toLowerCase())
						return 1;
					else if (a.content.toLowerCase() < b.content.toLowerCase())
						return -1;
					else
						return 0;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					if (a.content.toLowerCase() < b.content.toLowerCase())
						return 1;
					else if (a.content.toLowerCase() > b.content.toLowerCase())
						return -1;
					else
						return 0;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		case 'authorColumn':
			if (clickedHeader != 'authorColumn' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					if (a.authorName.toLowerCase() > b.authorName.toLowerCase())
						return 1;
					else if (a.authorName.toLowerCase() < b.authorName.toLowerCase())
						return -1;
					else
						return 0;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					if (a.authorName.toLowerCase() < b.authorName.toLowerCase())
						return 1;
					else if (a.authorName.toLowerCase() > b.authorName.toLowerCase())
						return -1;
					else
						return 0;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		case 'typeColumn':
			if (clickedHeader != 'typeColumn' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					return a.type - b.type;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					return b.type - a.type;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		case 'timeColumn':
			if (clickedHeader != 'clickedHeader' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					return b.raise_time - a.raise_time;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					return a.raise_time - b.raise_time;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		case 'severityColumn':
			if (clickedHeader != 'severityColumn' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					return b.severity - a.severity;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					return a.severity - b.severity;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		case 'statusColumn':
			if (clickedHeader != 'statusColumn' || arrowPointingUp == false) {
				errataDisplay.sort(function(a,b) {
					return a.isFixed - b.isFixed;
				});
				arrowPointingUp = true;
			} else {
				errataDisplay.sort(function(a,b) {
					return b.isFixed - a.isFixed;
				});
				arrowPointingUp = false;
			}
			clickedHeader = className;
			break;
		default:
			break;
	}
	showTable(edition);
	if (arrowPointingUp == true) {
		$("." + clickedHeader).html(classToName[clickedHeader] + ' <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>');
	} else if (arrowPointingUp == false) {
		$("." + clickedHeader).html(classToName[clickedHeader] + ' <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>');
	}
}