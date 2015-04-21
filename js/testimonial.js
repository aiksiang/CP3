var testimonials = {};

function showTestimonial() {
	$.get("php/retrieval.php", {action: "getTestimonials"}).done(function(data) {
		for (var i in data) {
			if (!testimonials.hasOwnProperty(data[i].region)) {
				testimonials[data[i].region] = {};
			}
			if (!testimonials[data[i].region].hasOwnProperty(data[i].nationality)) {
				testimonials[data[i].region][data[i].nationality] = [];
			}
			testimonials[data[i].region][data[i].nationality].push(data[i]);
		}
		displayTestimonial();
	});
}

function displayTestimonial() {
	$(".testimonial").html("");
	var HTMLtoBeInserted = "";
	HTMLtoBeInserted += '\
		<div class="col-md-12" id="report-error">\
			<div class="row">\
				<div class="col-md-12" id="select-edition"><h3>Testimonials</h3></div>\
				<p>This page contains comments and reviews for this book, Competitive Programming, edition one to three by Steven Halim and Felix Halim. <br>Please let us hear your opinions if this book has help you by reinforcing your understanding of data structures and algorithms in the past.</p>\
			</div>\
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#review-submit" onClick="getQuestion();">Review</button>\
  		</div>\
  	';
  // 	HTMLtoBeInserted += '\
  // 		<div class="row">\
		// 	<div class="col-md-12" id="orderby"><h3>Order by</h3></div>\
		// </div>\
		// <div class="row">\
		// 	<div class="row">\
		// 	<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
		// 	<div class="col-md-2"><h5>Country </h5></div>\
		// 	<div class="col-md-2"><input checked type="radio" value="country-atoz" name="check"><span>&nbsp;&nbsp;A to Z</span></div>\
		// 	<div class="col-md-2"><input type="radio" value="country-ztoa" name="check"><span>&nbsp;&nbsp;Z to A</span></div>\
		// 	<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
		// 	</div>\
		// 	<div class="row">\
		// 	<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
		// 	<div class="col-md-2"><h5>Reviewer\'s Name </h5></div>\
		// 	<div class="col-md-2"><input type="radio" value="rev-atoz" name="check"><span>&nbsp;&nbsp;A to Z</span></div>\
		// 	<div class="col-md-2"><input type="radio" value="rev-ztoa" name="check"><span>&nbsp;&nbsp;Z to A</span></div>\
		// 	<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
		// 	</div>\
		// </div>\
  // 	';
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
							<blockquote class="well">\
								<p>' + testimonials[region][country][i].content + '</p>\
								<footer><span>' + testimonials[region][country][i].author + '</span>\
				';
				if (testimonials[region][country][i].credit != "")
					HTMLtoBeInserted += ', <cite title="Source Title">'+ testimonials[region][country][i].credit +'</cite></footer>';
				HTMLtoBeInserted += '\
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
}