function showSales() {
	$(".sales-data").html("");
	
	var HTMLtoBeInserted = "";

	HTMLtoBeInserted += '\
		<div id="page-body">\
			<div class="container" id="page-text">\
				<h3>Sales Data</h3>\
				<img class="img-responsive col-md-3" src="img/sales_icpc_felix.jpg">\
				<img class="img-responsive col-md-3" src="img/cjhwang_teddymantoro_iium.jpg">\
				<img class="img-responsive col-md-3" src="img/shahriarmanzoor_derekkisman.jpg">\
				<img class="img-responsive col-md-3" src="img/jane_mahmudur.jpg">\
				<p>So far (per 24 June 2011</p>\
				<ul>\
					<li>Prior to official publication at lulu.com, about 70 draft copies are sold locally to CS3233 students S2 AY2009/2010 and Singapore IOI trainees 2010.</li>\
					<li>Competitive Programming book is first released at lulu.com on Monday, 9 August 2010, before IOI 2010.</li>\
					<li>About 120 copies are distributed to Indonesian "National Olympiad in Informatics" / Olimpiade Sains Nasional ~ August 2010.</li>\
					<li>Another 30 copies are distributed to Indonesian "National Training 1" / Pelatnas 1 ~ November 2010.</li>\
					<li>Up to Tuesday, 30 November 2010, 100 copies have been sold via lulu.com with some known buyers from United States, Canada, South America (Brazil), Europe (Spain), etc (read the <a href="#" class="testimonial-button">testimonials</a>).</li>\
					<li>Another ~20 copies have been sold via lulu.com as of 29 December 2010.</li>\
					<li>About 45 copies are sold on site during <a href="http://competition.binus.ac.id/icpc2010" target="_blank" rel="nofollow">ACM ICPC Jakarta 2010</a>, with local buyers (U. Surabaya, ST Teknik Surabaya, U. Petra, U. Indonesia, UK Maranatha, BINUS, UNPAR, UPH, UINJ)and Asian buyers (Chulalongkorn U Thailand, Tokyo IT Japan, Nanyang TU Singapore).</li>\
					<li>About 45 copies are sold on site during <a href="http://www.iium.edu.my/acmicpc/" target="_blank" rel="nofollow">ACM ICPC Kuala Lumpur 2010</a>, with local buyers (U. Kebangsaan Malaysia, U. Teknologi MARA, Multimedia University, Asia Pacific University College of Technology and Innovation, U. Teknologi Petronas, U. Sains Malaysia) and Asian buyers (Chulalongkorn U Thailand - again, Nanyang TU Singapore - again, National Cheng Kung University Taiwan, Ho Chi Minh City University of Science Vietnam, U Philippines Diliman, National Tsinghua University Taiwan, National Taiwan University).</li>\
					<li>About 20 copies are sold to Steven\'s CS3233 students, some CS2020 students, and Singapore IOI trainees 2001 on January 2011.</li>\
					<li>Another ~15 copies are sold to Steven\'s CS3233/CS2020 students throughout January-April 2011 semester.</li>\
					<li>Another ~55 copies have been sold via lulu.com as of 24 April 2011 (Easter Sunday). Thus making the total international sales so far to reach 175 copies.</li>\
					<li>Another ~23 copies have been sold via lulu.com as of 24 June 2011. Thus making the total international sales so far to reach 198 copies.</li>\
					<li>Another ~9 copies have been sold via lulu.com as of 16 July 2011. Thus making the total international sales so far to reach 207 copies.</li>\
					<li>Another ~118 copies have been sold via lulu.com as of 13 June 2012. Thus making the total international sales so far to reach 325 copies.</li>\
				</ul>\
				<p>In summary, a total of ~550 copies of this book have been sold worldwide in the first ~eleven+ months (up to 16 July 2011) and 668 copies so far (up to 13 June 2012). The number will be larger by the time you read this line. Readers, thank you for your support. :)</p>\
				<p>We do hope that the level of programming competitions indeed increase in 2010 and beyond. (We have witnessed tight "upper bound" in <a href="http://competition.binus.ac.id/icpc2010/result/final.html" target="_blank" rel="nofollow">ICPC Jakarta 2010</a> & ICPC KL 2010; but we still have loose "lower bound" in these two contests: almost half contestants can only solve <= 2 problems).</p>\
			</div>\
		</div>\
	';

	$(".sales-data").html(HTMLtoBeInserted);

	$(".testimonial-button").on('click', function() {
		$("#book-editions-img").slideUp(400);
		$("#page-text").fadeOut(400);
		$(".book-details").fadeOut(400);
		$(".book-edition-content").fadeOut(400);
		$(".downloads").fadeOut(400);
		$(".workshop").fadeOut(400);
		$(".credits").fadeOut(400);
		$(".sales-data").fadeOut(400);
		$(".testimonial").fadeIn(800);
		showTestimonial();
	});
}