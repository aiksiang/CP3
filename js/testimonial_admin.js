var testimonials = {};
var testimonialsPending;

function getTestimonial() {
	$.get("php/retrieval.php", {action: "getTestimonials"}).done(function(data) {
		testimonials = {};
		for (var i in data) {
			if (!testimonials.hasOwnProperty(data[i].region)) {
				testimonials[data[i].region] = {};
			}
			if (!testimonials[data[i].region].hasOwnProperty(data[i].nationality)) {
				testimonials[data[i].region][data[i].nationality] = [];
			}
			testimonials[data[i].region][data[i].nationality].push(data[i]);
		}
		$.get("php/retrieval.php", {action: "getPendingTestimonials"}).done(function(dataP) {
			testimonialsPending = dataP;
			showTestimonial();
		});
	});
}

$(getTestimonial());

function showTestimonial() {
	$(".testimonial").html("");
	var HTMLtoBeInserted = "";
	HTMLtoBeInserted += '\
		<div class="col-md-12" id="report-error">\
			<div class="row">\
				<div class="col-md-12" id="select-edition"><h3>Pending Testimonials</h3></div>\
  	';

  	for (var k in testimonialsPending) {
  		HTMLtoBeInserted += '\
			<h1 style="text-align:left;">\
				' + testimonialsPending[k].region + '\
			</h1>\
			<h4 style="text-align:left;">\
				' + testimonialsPending[k].nationality + '\
			</h4>\
			';
  		HTMLtoBeInserted += '\
  		<div class="row" style="text-align:left;">\
			<blockquote id="testimonialPending' + testimonialsPending[k].id + '"class="well">\
				<p>' + testimonialsPending[k].content + '</p>\
				<footer><span>' + testimonialsPending[k].author + '</span>\
		';
		if (testimonialsPending[k].credit != "")
			HTMLtoBeInserted += ', <cite title="Source Title">'+ testimonialsPending[k].credit +'</cite></footer>';
		HTMLtoBeInserted += '\
				<span class="glyphicon glyphicon-remove admin-icon" onClick=\'deletePendingTestimonial("' + k + '");\' aria-hidden="true" rel="tooltip" title="Delete"></span>\
				<span id="editTestimonial" class="glyphicon glyphicon-pencil admin-icon" onClick=\'editPendingTestimonial("' + k + '");\' aria-hidden="true" rel="tooltip" title="Edit"></span>\
				<span class="glyphicon glyphicon-ok admin-icon" onClick=\'approvePendingTestimonial("' + k + '");\' aria-hidden="true" rel="tooltip" title="Approve"></span>\
			</blockquote>\
		</div>\
  		';
  	}

	HTMLtoBeInserted += '\
  			</div>\
  		</div>\
  	';

  	HTMLtoBeInserted += '\
		<div class="col-md-12" id="report-error">\
			<div class="row">\
				<div class="col-md-12" id="select-edition"><h3>Testimonials</h3></div>\
  			</div>\
  		</div>\
  	';

  	for (var region in testimonials) {
  		HTMLtoBeInserted += '\
			<h1 class="row">\
				' + region + '\
			</h1>\
		';
  		for (var country in testimonials[region]) {
  			HTMLtoBeInserted += '\
				<h4 class="row">\
					' + country + '\
				</h4>\
			';
  			for (var i in testimonials[region][country]) {
  			  	HTMLtoBeInserted += '\
					<div class="row">\
				';
				

  			  	HTMLtoBeInserted += '\
							<blockquote id="testimonial' + testimonials[region][country][i].id + '"class="well">\
								<p>' + testimonials[region][country][i].content + '</p>\
								<footer><span>' + testimonials[region][country][i].author + '</span>\
				';
				if (testimonials[region][country][i].credit != "")
					HTMLtoBeInserted += ', <cite title="Source Title">'+ testimonials[region][country][i].credit +'</cite></footer>';
				HTMLtoBeInserted += '\
								<span class="glyphicon glyphicon-remove admin-icon" onClick=\'deleteTestimonial("' + region + '","' + country + '","' + i + '");\' aria-hidden="true" rel="tooltip" title="Delete"></span>\
								<span id="editTestimonial" class="glyphicon glyphicon-pencil admin-icon" onClick=\'editTestimonial("' + region + '","' + country + '","' + i + '");\' aria-hidden="true" rel="tooltip" title="Edit"></span>\
							</blockquote>\
		  		';
		  		if (testimonials[region][country][i].imgURL != "") {
					HTMLtoBeInserted += '\
						<div class="testimonialImage"><img src=' + testimonials[region][country][i].imgURL + '></div>\
						</div>\
					';
		  		}
				else {
					HTMLtoBeInserted += '\
						<div class="testimonialImage"></div>\
						</div>\
					';
				}
  			}
  		}
  	}

  	HTMLtoBeInserted += '\
		<br>\
		<div class="btn-group backToTop">\
  			<a href="#content-top"><button type="button" class="btn btn-default center-block btn-sm"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span> Top</button></a>\
  		</div>\
  	';
  	
	$(".testimonial").html(HTMLtoBeInserted);
	$(".testimonial .admin-icon").tooltip({'placement': 'top'});
}

function deleteTestimonial(region, country, i) {
	$.post("php/update.php", {
		command: "remove",
		table_id: 3,
		entry_id: testimonials[region][country][i].id
	}).done(function() {
		getTestimonial();
	});
	testimonials[region][country].splice(i,1);
}

function deletePendingTestimonial(i) {
	$.post("php/update.php", {
		command: "remove",
		table_id: 4,
		entry_id: testimonialsPending[i].id
	}).done(function() {
		getTestimonial();
	});
	testimonialsPending.splice(i,1);
}

function editTestimonial(region, country, i) {
	var HTMLtoBeInserted = '\
		<form><textarea class="form-control testimonial-content" rows="5">' + testimonials[region][country][i].content + '</textarea></form>\
		<footer><form style="display:inline-block;width: 40%"><textarea class="testimonial-author">' + testimonials[region][country][i].author + '</textarea></form>\
	';
	if (testimonials[region][country][i].credit != "")
		HTMLtoBeInserted += ', <form style="display:inline-block;width: 40%;"><textarea title="Source Title" class="testimonial-credit">'+ testimonials[region][country][i].credit +'</textarea></form></footer>';
	HTMLtoBeInserted += '\
					<span class="glyphicon glyphicon-remove admin-icon" onClick=\'showTestimonial();\' aria-hidden="true" rel="tooltip" title="Cancel"></span>\
					<span id="confirmEditTestimonial" class="glyphicon glyphicon-ok admin-icon" onClick=\'confirmEditTestimonial("' + testimonials[region][country][i].id + '","' + region + '","' + country + '","' + i + '");\' aria-hidden="true" rel="tooltip" title="Confirm"></span>\
				</blockquote>\
	';

	$("#editTestimonial").tooltip('destroy');
	$("#editTestimonial").remove();
	$("#testimonial" + testimonials[region][country][i].id).html(HTMLtoBeInserted);
	$(".testimonial .admin-icon").tooltip({'placement': 'top'});
}

function editPendingTestimonial(i)　{
	var HTMLtoBeInserted = '\
		<form><textarea class="form-control testimonial-content" rows="5">' + testimonialsPending[i].content + '</textarea></form>\
		<footer><form style="display:inline-block;width: 40%"><textarea class="testimonial-author">' + testimonialsPending[i].author + '</textarea></form>\
	';
	if (testimonialsPending[i].credit != "")
		HTMLtoBeInserted += ', <form style="display:inline-block;width: 40%;"><textarea title="Source Title" class="testimonial-credit">'+ testimonialsPending[i].credit +'</textarea></form></footer>';
	HTMLtoBeInserted += '\
				<span class="glyphicon glyphicon-remove admin-icon" onClick=\'showTestimonial();\' aria-hidden="true" rel="tooltip" title="Cancel"></span>\
				<span class="glyphicon glyphicon-ok admin-icon" onClick=\'approvePendingTestimonial("' + i + '");\' aria-hidden="true" rel="tooltip" title="Approve"></span>\
				</blockquote>\
	';

	$("#editTestimonial").tooltip('destroy');
	$("#editTestimonial").remove();
	$("#testimonialPending" + testimonialsPending[i].id).html(HTMLtoBeInserted);
	$(".testimonial .admin-icon").tooltip({'placement': 'top'});
}

function confirmEditTestimonial(id, region, country, i) {
	var content = $("#testimonial" + testimonials[region][country][i].id + " .testimonial-content").val();
	var author = $("#testimonial" + testimonials[region][country][i].id + " .testimonial-author").val();
	var credit = $("#testimonial" + testimonials[region][country][i].id + " .testimonial-credit").val();
	testimonials[region][country][i].author = author;
	testimonials[region][country][i].content = content;
	testimonials[region][country][i].credit = credit;
	$.post("php/update.php", {
		command: "modify",
		table_name: 3,
		entry_id: id,
		modify_content: JSON.stringify({
			author: author,
			content: content,
			credit: credit
		})
	});	
	showTestimonial();
}

function approvePendingTestimonial(i) {
	var content = $("#testimonialPending" + testimonialsPending[i].id + " .testimonial-content").val();
	var author = $("#testimonialPending" + testimonialsPending[i].id + " .testimonial-author").val();
	var credit = $("#testimonialPending" + testimonialsPending[i].id + " .testimonial-credit").val();
	if (content != undefined) {
		$.post("php/update.php", {
			command: "modify",
			table_name: 4,
			entry_id: testimonialsPending[i].id,
			modify_content: JSON.stringify({
				author: author,
				content: content,
				credit: credit
			})
		}).done(function() {
			$.post("php/update.php", {
				command: "approve",
				table_name: "TestimonialP",
				id: testimonialsPending[i].id
			}).done(function() {
				getTestimonial();
			});
		});
	} else {
		$.post("php/update.php", {
			command: "approve",
			table_name: "TestimonialP",
			id: testimonialsPending[i].id
		}).done(function() {
			getTestimonial();
		});
	}
	
}