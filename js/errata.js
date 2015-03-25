var errata;

function showErrata(edition) {
	$.get("php/errata_store.php", {action: "getErrata", edition: "third"}).done(function(result) {
		console.log(result);
		errata = result;

		$(".errata").html = ("");
		var HTMLtoBeInserted = '\
			<table class="table">\
				<tr>\
					<th>Page Number</th>\
					<th>Errata</th>\
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