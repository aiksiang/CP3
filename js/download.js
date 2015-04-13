var downloadStatistics;

$(function getDownloads(edition) {
	$.get("php/retrieval.php", {action: "getDownloadStatistics"}).done(function(result) {
		downloadStatistics = result;
		console.log(downloadStatistics);
	});	
});

function showDownloads() {
	$(".downloads").html("");
	var HTMLtoBeInserted = "";
	HTMLtoBeInserted += '\
		<div>\
			<h3>Supporting Materials</h3></div>\
			<h5>Sample code for the data structures and algorithms mentioned in the third edition of the book:</h5>\
			<p>Please email Steven (<samp>stevenhalim@gmail.com</samp>) if you encounter bugs...</p>\
		</div><br>\
  	';

  	HTMLtoBeInserted += '\
		<div>\
			<h5>PDF slides for coaches/instructors/lecturers/students who wants to do self-study:</h5>\
			<p>(note: more details are inside the book, not in these brief slides!)</p>\
			<p>There are 13 teaching weeks per semester in NUS and thus 13 set of slides/link to relevant stuffs. This section is from CS3233 in Semester 2, 2012/2013 (January-April 2013). You can download the current slides and use it for yourself / for teaching in class.</p>\
			<p>Steven of course has many other hidden slides and techniques that will only be shown in CS3233 classes or if we are invited to give competitive programming <a href="#" class="workshop-button">workshop</a> :).</p>\
  		</div>\
  	';

	HTMLtoBeInserted += '\
		<table class="table">\
			<thead>\
				<tr>\
					<th>Material</span></th>\
					<th>Download Count</span></th>\
					<th>Last Update</span></th>\
					<th>Remarks</span></th>\
				</tr>\
			</thead>\
  	';

  	for (var i in downloadStatistics) {
  		HTMLtoBeInserted += '\
			<tbody>\
				<tr>\
					<td class="thirtyPercentWidth"><a href="' + downloadStatistics[i].URL + '">' + downloadStatistics[i].name + '</a></td>\
					<td class="tenPercentWidth">' + downloadStatistics[i].count + '</td>\
					<td class="tenPercentWidth">' + downloadStatistics[i].LastUpdate + '</td>\
					<td class="thirtyPercentWidth">' + downloadStatistics[i].Remark + '</td>\
				</tr>\
			</thead>\
	  	';
  	}

  	HTMLtoBeInserted += '\
		</table>\
  	';

	$(".downloads").html(HTMLtoBeInserted);

	$(".workshop-button").on('click', function() {
		$(".errata").fadeOut(400);
		$("#book-editions-img").fadeOut(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".testimonial").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".workshop").fadeIn(800);
		showWorkshop();
	}); 
}