var errata;

function showErrata(edition) {
	$.get("php/retrieval.php", {action: "getErrata", edition: "3"}).done(function(result) {
		console.log(result);
		errata = result;
		displayErrata();
	});	
}

function displayErrata() {
	$(".errata").html = ("");
		var HTMLtoBeInserted = '';
		HTMLtoBeInserted += '\
			<div class="container">\
				<div class="col-md-12" id="report-error">\
					<div class="row">\
						<div class="col-md-12" id="select-edition"><h3>Report Error</h3></div>\
						<p>This page contains all the known errors and bugs for <span id="edition">CP</span>. <br>Please report any sightings of bugs, errors or misprints here.</p>\
					</div>\
					\
					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#errata-submit">Report</button>\
		  		</div>\
		  	</div>\
		  	<hr/>\
		';
		HTMLtoBeInserted += '\
			<div class="container">\
				<div class="row">\
					<div class="col-md-12" id="orderby"><h3>View Errata by Order</h3></div>\
				</div>\
				<div class="row">\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
					<div class="col-md-2"><h5>Date of posting </h5></div>\
					<div class="col-md-2"><input checked type="radio" value="date-most" name="check">&nbsp;&nbsp;Most Recent</div>\
					<div class="col-md-2"><input type="radio" value="date-less" name="check">&nbsp;&nbsp;Least Recent</div>\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
				</div>\
				<div class="row">\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
					<div class="col-md-2"><h5>Page Number </h5></div>\
					<div class="col-md-2"><input type="radio" value="pg-asc" name="check">&nbsp;&nbsp;Ascending</div>\
					<div class="col-md-2"><input type="radio" value="pg-desc" name="check">&nbsp;&nbsp;Descending</div>\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
				</div>\
				<div class="row">\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
					<div class="col-md-2"><h5>Severity </h5></div>\
					<div class="col-md-2"><input type="radio" value="sev-most" name="check">&nbsp;&nbsp;Most Severe</div>\
					<div class="col-md-2"><input type="radio" value="sev-less" name="check">&nbsp;&nbsp;Least Severe</div>\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
				</div>\
				<div class="row">\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
					<div class="col-md-2"><h5>Reporter\'s Name </h5></div>\
					<div class="col-md-2"><input type="radio" value="atoz" name="check">&nbsp;&nbsp;A to Z</div>\
					<div class="col-md-2"><input type="radio" value="ztoa" name="check">&nbsp;&nbsp;Z to A</div>\
					<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
				</div>\
			</div>\
		  	<hr/>\
		  	<table class="table" id="errataTable">\
		  	</table>\
		';
		

		$(".errata").append(HTMLtoBeInserted);
		$("input[type='radio']").click(function(){
            var radioValue = $("input[name='check']:checked").val();
            sortErrata(radioValue);
        });
        showTable();
}

function showTable() {
	var HTMLtoBeInserted = '';
	$("#errataTable").html("");
	HTMLtoBeInserted += '\
				<tr>\
					<th>Page Number</th>\
					<th width="1500px">Errata</th>\
					<th>Author</th>\
					<th>Type</th>\
					<th>Status</th>\
					<th>Time</th>\
					<th>Severity</th>\
				</tr>\
			';
		for (var i in errata) {
			if (errata[i].version ==2) {
				HTMLtoBeInserted += '\
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
						<td>'+ errata[i].raise_time +'</td>\
						<td>'+ errata[i].severity +'</td>\
					</tr>\
				';
			}
		}
		$("#errataTable").html(HTMLtoBeInserted);
}

function sortErrata(radioValue) {
	console.log(radioValue);
	switch(radioValue) {
		case 'date-less':
			errata.sort(function(a,b) {
				return a.raise_time - b.raise_time;
			});
			showTable();
			break;
		case 'date-most':
			errata.sort(function(a,b) {
				return b.raise_time - a.raise_time;
			});
			showTable();
			break;
		case 'pg-asc':
			errata.sort(function(a,b) {
				return a.pageNum - b.pageNum;
			});
			showTable();
			break;
		case 'pg-desc':
			errata.sort(function(a,b) {
				return b.pageNum - a.pageNum;
			});
			showTable();
			break;
		case 'sev-most':
			errata.sort(function(a,b) {
				return b.severity - a.severity;
			});
			showTable();
			break;
		case 'sev-less':
			errata.sort(function(a,b) {
				return a.severity - b.severity;
			});
			showTable();
			break;
		case 'atoz':
			errata.sort(function(a,b) {
				return a.authorName - b.authorName;
			});
			showTable();
			break;
		case 'ztoa':
			errata.sort(function(a,b) {
				return b.authorName - a.authorName;
			});
			showTable();
			break;
		default:
			break;
	}
}
