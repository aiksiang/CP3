var credits;

$(function getCredits(edition) {
	$.get("php/retrieval.php", {action: "getCredits"}).done(function(result) {
		credits = result;
		console.log(credits);
	});	
});

function showCredits() {
	$(".credits").html("");
	var HTMLtoBeInserted = "";
	HTMLtoBeInserted += '\
		<div>\
			<h3>Problem Credits</h3></div>\
			<p>The problems discussed in this book are mainly taken from <a href="http://uva.onlinejudge.org" target="_blank" rel="nofollow">UVa online judge</a>, ACM ICPC Live Archive, <a href="http://www.topcoder.com/tc" target="_blank" rel="nofollow">TopCoder</a>, and few from other online judges. The listing below page is the most up-to-date problem credits that may be more up to date than the printed version of our book.</p>\
		</div><br>\
  	';

  	HTMLtoBeInserted += '\
		<table class="table">\
			<thead>\
				<tr>\
					<th>Online Judge, Problem Number - Problem Name</span></th>\
					<th>Problem Setter</span></th>\
					<th>Appearance in CP Book</span></th>\
				</tr>\
			</thead>\
  	';

  	for (var i in credits) {
  		HTMLtoBeInserted += '\
			<tbody>\
				<tr>\
					<td class="thirtyPercentWidth">' + credits[i].name + '</a></td>\
					<td class="thirtyPercentWidth">' + credits[i].setter + '</td>\
					<td class="tenPercentWidth">' + credits[i].appearance + '</td>\
				</tr>\
			</thead>\
	  	';
  	}

  	HTMLtoBeInserted += '\
		</table>\
  	';

	$(".credits").html(HTMLtoBeInserted);
}