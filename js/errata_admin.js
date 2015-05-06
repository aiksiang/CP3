var errata;
var errataDisplay;
var errataPending;
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

function getErrata(edition) {
	$.get("php/retrieval.php", {action: "getErrata"}).done(function(result) {
		errata = result;
		errataDisplay = errata;
		$.get("php/retrieval.php", {action: "getPendingErrata"}).done(function(resultP) {
			errataPending = resultP;
			displayErrata(edition);
		});
	});

}

$(getErrata());

function displayErrata(edition) {
	$(".book-edition-errata").html("");
	var HTMLtoBeInserted = '';
	HTMLtoBeInserted += '\
		<div class="container">\
			<div class="col-md-12" id="report-error">\
				<div class="row">\
					<div class="col-md-12" id="select-edition"><h3>Pending Erratas</h3></div>\
					<table class="container table">\
						<thead>\
							<tr>\
								<th class="pageColumn">Page Number</th>\
								<th class="errataColumn">Errata</th>\
								<th class="authorColumn">Author</th>\
								<th class="typeColumn">Type</th>\
								<th class="timeColumn">Time</th>\
								<th class="severityColumn">Severity</th>\
								<th class="statusColumn">Status</th>\
								<th> </th>\
								<th>Edit</th>\
							</tr>\
						</thead>\
						<tbody>\
	';

	for (var k in errataPending) {
		if (errataPending[k].version == edition) {
			HTMLtoBeInserted += '\
					<tr id="errataPending' + errataPending[k].id + '">\
			';
			if (errataPending[k].pageNum == 0) {
				HTMLtoBeInserted += '\
						<td>'+ 'Not Applicable' +'</td>\
					';
			} else {
				HTMLtoBeInserted += '\
						<td>'+ errataPending[k].pageNum +'</td>\
				';
			}
			HTMLtoBeInserted += '\
						<td>'+ errataPending[k].content +'</td>\
						<td>'+ errataPending[k].authorName +'</td>\
						<td>'+ errataPending[k].type +'</td>\
			';
			HTMLtoBeInserted += '\
						<td>'+ errataPending[k].raise_time +'</td>\
						<td>'+ errataPending[k].severity +'</td>\
						<td>'+ 'Pending Fix' +'</td>\
				';
			HTMLtoBeInserted += '\
						<td><span class="glyphicon glyphicon-ok admin-icon" onClick=\'approvePendingErrata(' + k + ');\' aria-hidden="true" rel="tooltip" title="Approve"></span></td>\
						<td><span class="glyphicon glyphicon-pencil admin-icon" onClick=\'editPendingErrata(' + k + ');\' aria-hidden="true" rel="tooltip" title="Edit"></span></td>\
						<td><span class="glyphicon glyphicon-remove admin-icon" onClick=\'deletePendingErrata(' + k + ');\' aria-hidden="true" rel="tooltip" title="Delete"></span></td>\
					</tr>\
			';
			errataPending[k].isFixed = 0;
		}
	}

	HTMLtoBeInserted += '\
						</tbody>\
				  	</table>\
	  				<hr/>\
					<div class="col-md-12" id="select-edition"><h3>Erratas</h3></div>\
				</div>\
	  		</div>\
	  	</div>\
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
	  	<table class="container table" id="errataTable">\
			<thead>\
				<tr>\
					<th class="pageColumn">Page Number</th>\
					<th class="errataColumn">Errata</th>\
					<th class="authorColumn">Author</th>\
					<th class="typeColumn">Type</th>\
					<th class="timeColumn">Time</th>\
					<th class="severityColumn">Severity</th>\
					<th class="statusColumn">Status</th>\
					<th> </th>\
					<th>Edit</th>\
				</tr>\
			</thead>\
			<tbody>\
			</tbody>\
	  	</table>\
	';

	HTMLtoBeInserted += '\
		<br>\
		<div class="btn-group backToTop">\
  			<a href="#content-top"><button type="button" class="btn btn-default center-block btn-sm"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span> Top</button></a>\
  		</div>\
  	';

	$(".book-edition-errata").append(HTMLtoBeInserted);
	searchErrata();
	sortErrata(edition);
	clickedHeader = null;
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
					<tr id="errata' + errataDisplay[i].id + '">\
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
						<td><span class="glyphicon glyphicon-pencil admin-icon" onClick=\'editErrata(' + i + ');\' aria-hidden="true" rel="tooltip" title="Edit"></span></td>\
						<td><span class="glyphicon glyphicon-remove admin-icon" onClick=\'deleteErrata(' + i + ');\' aria-hidden="true" rel="tooltip" title="Delete"></span></td>\
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

function editErrata(i) {

	HTMLtoBeInserted = '\
			<td><form><textarea class="form-control errata-pagenum">'+ errataDisplay[i].pageNum +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-content">'+ errataDisplay[i].content +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-authorname">'+ errataDisplay[i].authorName +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-type">'+ errataDisplay[i].type +'</textarea></form></td>\
			<td>'+ errataDisplay[i].raise_time +'</td>\
			<td><form><textarea class="form-control errata-severity">'+ errataDisplay[i].severity +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-fixed">'+ errataDisplay[i].isFixed +'</textarea></form></td>\
	';
	HTMLtoBeInserted += '\
			<td><span class="glyphicon glyphicon-ok admin-icon" onClick=\'confirmEditErrata(' + i + ');\' aria-hidden="true" rel="tooltip" title="Confirm"></span></td>\
			<td><span id="editErrata" class="glyphicon glyphicon-remove admin-icon" onClick=\'displayErrata(' + selectedEdition + ');\' aria-hidden="true" rel="tooltip" title="Cancel"></span></td>\
	';

	$("#editErrata").tooltip('destroy');
	$("#errata" + errataDisplay[i].id).html(HTMLtoBeInserted);
	$(".book-edition-errata .admin-icon").tooltip({'placement': 'top'});
}

function confirmEditErrata(i) {
	var pagenum = $("#errata" + errataDisplay[i].id + " .errata-pagenum").val();
	var content = $("#errata" + errataDisplay[i].id + " .errata-content").val();
	var authorname = $("#errata" + errataDisplay[i].id + " .errata-authorname").val();
	var type = $("#errata" + errataDisplay[i].id + " .errata-type").val();
	var severity = $("#errata" + errataDisplay[i].id + " .errata-severity").val();
	var isFixed = $("#errata" + errataDisplay[i].id + " .errata-fixed").val();
	$.post("php/update.php", {
		command: "modify",
		table_name: 1,
		entry_id: errataDisplay[i].id,
		modify_content: JSON.stringify({
			name: authorname,
			page: pagenum,
			severity: severity,
			type: type,
			content: content,
			version: selectedEdition,
			status: isFixed
		})
	}).done(function() {
		getErrata(selectedEdition);
	});
}

function editPendingErrata(k) {

	HTMLtoBeInserted = '\
			<td><form><textarea class="form-control errata-pagenum">'+ errataPending[k].pageNum +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-content">'+ errataPending[k].content +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-authorname">'+ errataPending[k].authorName +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-type">'+ errataPending[k].type +'</textarea></form></td>\
			<td>'+ errataPending[k].raise_time +'</td>\
			<td><form><textarea class="form-control errata-severity">'+ errataPending[k].severity +'</textarea></form></td>\
			<td><form><textarea class="form-control errata-fixed">'+ errataPending[k].isFixed +'</textarea></form></td>\
	';
	HTMLtoBeInserted += '\
			<td><span class="glyphicon glyphicon-ok admin-icon" onClick=\'approvePendingErrata(' + k + ');\' aria-hidden="true" rel="tooltip" title="Confirm"></span></td>\
			<td><span class="glyphicon glyphicon-remove admin-icon" onClick=\'displayErrata(' + selectedEdition + ');\' aria-hidden="true" rel="tooltip" title="Cancel"></span></td>\
	';

	$("#editErrata").tooltip('destroy');
	$("#errataPending" + errataPending[k].id).html(HTMLtoBeInserted);
	$(".book-edition-errata .admin-icon").tooltip({'placement': 'top'});
}

function approvePendingErrata(k) {
	var pagenum = $("#errataPending" + errataPending[k].id + " .errata-pagenum").val();
	var content = $("#errataPending" + errataPending[k].id + " .errata-content").val();
	var authorname = $("#errataPending" + errataPending[k].id + " .errata-authorname").val();
	var type = $("#errataPending" + errataPending[k].id + " .errata-type").val();
	var severity = $("#errataPending" + errataPending[k].id + " .errata-severity").val();
	var isFixed = $("#errataPending" + errataPending[k].id + " .errata-fixed").val();
	console.log(isFixed)
	if (pagenum != undefined) {
		$.post("php/update.php", {
			command: "modify",
			table_name: 2,
			entry_id: errataPending[k].id,
			modify_content: JSON.stringify({
				name: authorname,
				page: pagenum,
				severity: severity,
				type: type,
				content: content,
				version: selectedEdition
			})
		}).done(function() {
			$.post("php/update.php", {
				command: "approve",
				table_name: "ErrataP",
				status: isFixed,
				id: errataPending[k].id
			}).done(function() {
				getErrata(selectedEdition);
			});
		});
	} else {
		$.post("php/update.php", {
			command: "approve",
			table_name: "ErrataP",
			status: isFixed,
			id: errataPending[k].id
		}).done(function() {
			getErrata(selectedEdition);
		});
	}
}

function deleteErrata(i) {
	$.post("php/update.php", {
		command: "remove",
		table_id: 1,
		entry_id: errataDisplay[i].id
	}).done(function() {
		getErrata(selectedEdition);
	});
	errataDisplay.splice(i,1);
}

function deletePendingErrata(k) {
	$.post("php/update.php", {
		command: "remove",
		table_id: 2,
		entry_id: errataPending[k].id
	}).done(function() {
		getErrata(selectedEdition);
	});
	errataPending.splice(k,1);
}