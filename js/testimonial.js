function showTestimonial() {
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
  	HTMLtoBeInserted += '\
  		<div class="row">\
			<div class="col-md-12" id="orderby"><h3>Order by</h3></div>\
		</div>\
		<div class="row">\
			<div class="row">\
			<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
			<div class="col-md-2"><h5>Country </h5></div>\
			<div class="col-md-2"><input checked type="radio" value="country-atoz" name="check"><span>&nbsp;&nbsp;A to Z</span></div>\
			<div class="col-md-2"><input type="radio" value="country-ztoa" name="check"><span>&nbsp;&nbsp;Z to A</span></div>\
			<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
			</div>\
			<div class="row">\
			<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
			<div class="col-md-2"><h5>Reviewer\'s Name </h5></div>\
			<div class="col-md-2"><input type="radio" value="rev-atoz" name="check"><span>&nbsp;&nbsp;A to Z</span></div>\
			<div class="col-md-2"><input type="radio" value="rev-ztoa" name="check"><span>&nbsp;&nbsp;Z to A</span></div>\
			<div class="col-md-3"><div class="row"><div class="classWithPad"></div></div></div>\
			</div>\
		</div>\
  	';
	$(".testimonial").html(HTMLtoBeInserted);
}