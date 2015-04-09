function showWorkshop() {
	$(".workshop").html("");
	
	var HTMLtoBeInserted = "";

	HTMLtoBeInserted += '\
		<div id="page-body">\
			<div class="container" id="page-text">\
				<h3>Workshop</h3>\
				<p>Dr Steven Halim is the coach of Singapore IOI team and National University of Singapore ACM ICPC team. Together with the other coaches and trainers in NUS, he has produced several <a href="http://www.comp.nus.edu.sg/newsroom/article030209/index.htm" target="_blank" rel="nofollow">ACM ICPC World Finalist teams</a> (2009, 2010, missed 2011 :(, 2012, 2013, 2014-soon) and 2 gold/9 silver/8 bronze IOI medalists (<a href="http://www.ioi2009.org/index.jsp?id=415&amp;ln=2" target="_blank" rel="nofollow">2009</a>, <a href="http://www.ioi2010.org/FinalResults.shtml" target="_blank" rel="nofollow">2010</a>, <a href="http://www.ioi2011.or.th/results" target="_blank" rel="nofollow">2011</a>, <a href="http://www.ioi2012.org/competition/results-2/" target="_blank" rel="nofollow">2012</a>, <a href="http://www.ioi2013.org/competition/results/" target="_blank" rel="nofollow">2013</a>, 2014-<a href="http://www.comp.nus.edu.sg/news/2013ACMICPCAsiaJakartaRegional.html" target="_blank" rel="nofollow">soon</a>) in recent years.</p>\
				<p>During Steven\'s non-teaching days at National University of Singapore (2nd half of May/June/July or 2nd half of December) Steven is open to visitation by IOI teams outside Singapore to do customized (or a joint-training with Singapore IOI team) using mostly the material in Competitive Programming textbook and beyond. There is also a possibility for Steven to travel to your country instead (less preferred). If you are organizing IOI-related activities and interested with this workshop, please do the following:</p>\
				<ul>\
					<li>Find relevant authorities that might want to sponsor your team\'s trip to NUS School of Computing (especially if your country is very far from Singapore...) and pay for a "small" consultation fee to School of Computing, NUS (this is not significant compared to your traveling cost to Singapore and accommodation+food while you and your team stay in Singapore).</li>\
					<li>Let them know that you want the author of Competitive Programming textbook to give a competitive programming workshop to your students (up to <a href="http://www.lulu.com/shop/steven-halim/competitive-programming-3/paperback/product-21059906.html" target="_blank" rel="nofollow">3000 copies</a> have been sold since the first edition back in August 2010). Note: The workshop will be in English as Steven does not know any other language other than English and Indonesian.</li>\
					<li>Contact us (stevenhalim at gmail dot com) to check for Steven\'s availability.</li>\
				</ul>\
				<p>Unfortunately, due to potential conflict of interest between NUS and other Asian Universities, Steven has to decline ACM ICPC-related training requests especially among Asian Universities. Alternative options are:</p>\
				<ul>\
					<li>Register your students as an exchange student in NUS in Semester 2 (January-April each year) and specifically enroll in CS3233 - Competitive Programming course, officially. NUS has no problems with exchange students taking CS3233 course where I usually share many competition techniques.</li>\
					<li>Buy the latest edition of Competitive Programming book and do self-study, perhaps with help of the additional <a href="#" class="download-button">free material</a> (Sample source code and public Lecture slides).</li>\
					<li>Invite Steven\'s top ICPC students instead. For active NUS students, they can work up part-time up to 16 hours a week. For NUS students who already graduate, you may have to deal with their current employer.</li>\
					<li>However if your University is far from Asia and we will not fight each other in ACM ICPC Asia Regional, you may be able to contact Steven on case by case basis.</li>\
				</ul>\
				<p>History:</p>\
				<ul>\
					<li>The first Competitive Programming workshop (outside Singapore) was conducted @ Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia on 22-23 Feb 2011 for top-18 Indonesian students preparing for IOI 2011.\
					<img class="img-responsive center-block" src="img/malaysia.jpg"/></li>\
					<li>Mongolian IOI team (3 students, 3 coaches) visited School of Computing on 8-15 September 2012 for IOI 2012 preparation.\
					<img class="img-responsive center-block" src="img/mongolia.jpg"/></li>\
					<li>Malaysian IOI team (4 students, 1 coach) visited School of Computing on 1-4 July 2013 for IOI 2013 preparation.</li>\
					<li>Philippines OI team (1 student) visited School of Computing on 21-26 April 2014 for APIO 2014 preparation.</li>\
					<li>Steven has successfully conducted the second Competitive Programming workshop outside Singapore in a country that is totally antipodal (50 hours flight... times two) with Singapore: La Paz, Bolivia on 19-23 May 2014. A total of 48 Bolivian (including about 10 Peruvian) ACM ICPC students (minimal conflict of interest as they compete in Latin America region) and 5 Bolivian IOI students (they will compete in Taiwan for IOI in July 2014) joined this camp (a total of 53 camp participants). The camp information (in Spanish) can be found in <a href="http://olimpiada.icpc-bolivia.edu.bo/node/49" target="_blank" rel="nofollow">http://olimpiada.icpc-bolivia.edu.bo/node/49</a>.\
					<img class="img-responsive col-md-3 col-md-offset-2" src="img/CP.jpg"/><img class="img-responsive col-md-3 col-md-offset-1" src="img/La_Paz.jpg"/></li>\
				</ul>\
			</div>\
		</div>\
	';

	$(".workshop").html(HTMLtoBeInserted);
}