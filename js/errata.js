var errata;

function showErrata(edition) {
	$.get("php/errata_store.php", {action: "getErrata", edition: "third"}).done(function(result) {
		console.log(result);
		errata = result;

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
		';
		HTMLtoBeInserted += '\
			<table class="table">\
				<tr>\
					<th>Page Number</th>\
					<th width="1500px">Errata</th>\
					<th>Type</th>\
					<th>Status</th>\
				</tr>\
			';
		for (var i in errata) {
			HTMLtoBeInserted += '\
				<tr>\
					<td>'+ errata[i].errataPage +'</td>\
					<td>'+ errata[i].errata +'</td>\
					<td>'+ errata[i].errataType +'</td>\
					<td>'+ errata[i].errataStatus +'</td>\
				</tr>\
			';
		}
		HTMLtoBeInserted += '</table>';

		$(".errata").append(HTMLtoBeInserted);
	});
	
}