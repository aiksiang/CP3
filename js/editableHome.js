function enableEdit(type) {
	var DOM_editable_intro = $(".intro-text");
	var DOM_editable_about = $(".about-text");
	var DOM_editable_objective = $(".objective-text");
	var DOM_editable_tgtaud = $(".target-audience-text");
	
	DOM_editable_intro.html("");
	DOM_editable_about.html("");
	DOM_editable_objective.html("");
	DOM_editable_tgtaud.html("");
	
	if(type == INTRO) {
		DOM_editable_intro.append('\
			<div>\
				<textarea class="form-control" rows="5" value="about-content">\
				This is the companion web site for a book:"Competitive Programming 3: The New Lower Bound of Programming Contests" and its two past editions written by myself (Steven Halim - UVa status) and my younger brother (Felix Halim - UVa status) in 2010 -2015. This book is used in my course in School of Computing, National University of Singapore: CS3233 - Competitive Programming (2009-present) and available for wider audiences since 2010.\
				</textarea><br>\
				<span class="edit-intro"><button class="btn btn-primary" type="submit">Save</button></span>\
				<span class="close-intro"><button class="btn btn-default" type="button">Close</button></span>\
			</div>\
		');
	}
	if(type == ABOUT) {
		DOM_editable_about.append('\
			<div>\
				<textarea class="form-control" rows="5" value="about-content">\
				This book contains a collection of relevant data structures, algorithms, and programming tips written for University students who want to be more competitive in the ACM International Collegiate Programming Contest (ICPC), high school students who are aspiring to be competitive in the International Olympiad in Informatics (IOI), coaches for these competitions, those who love problem solving using computer programs, and those who go for interviews in big IT-companies.\
				</textarea><br>\
				<span class="edit-about"><button class="btn btn-primary" type="submit">Save</button></span>\
				<span class="close-about"><button class="btn btn-default" type="button">Close</button></span>\
			</div>\
		');
	}
	if(type == OBJECTIVE) {
		DOM_editable_objective.append('\
			<div>\
				<textarea class="form-control" rows="5" value="about-content">\
				Our objective in writing this book is similar with the ICPC vision: To further improve humanity by training current students to be more competitive in programming contests. The possible long term effect is future Computer Science researchers who are well versed in problem solving skills. We use both C++ and Java code to illustrate the algorithmic concepts, i.e. we dislike vague pseudo-code commonly found in many other Computer Science textbooks.\
				</textarea><br>\
				<span class="edit-objective"><button class="btn btn-primary" type="submit">Save</button></span>\
				<span class="close-objective"><button class="btn btn-default" type="button">Close</button></span>\
			</div>\
		');
	}
	if(type == TGTAUD) {
		DOM_editable_tgtaud.append('\
			<div>\
				<textarea class="form-control" rows="5" value="about-content">\
				Background knowledge in basic data structures, algorithms and programming langauges. Students who have passed "Programming Methodology", "Data Structure and Algorithms", or equivalent modules. Participants of National or International Olympaid in Informatics\
				</textarea><br>\
				<span class="edit-intro"><button class="btn btn-primary" type="submit">Save</button></span>\
				<span class="close-target-audience"><button class="btn btn-default" type="button">Close</button></span>\
			</div>\
		');
	}

	$(".close-intro").on('click', function() {
		$(".intro-text").fadeOut(400, function() {
			$("#intro").fadeIn(800);
		});
	});

	$(".close-about").on('click', function() {
		$(".about-text").fadeOut(400, function() {
			$("#about").fadeIn(400);
		});
	});

	$(".close-objective").on('click', function() {
		$(".objective-text").fadeOut(400, function() {
			$("#objective").fadeIn(800);
		});
	});
	
	$(".close-target-audience").on('click', function() {
		$(".target-audience-text").fadeOut(400, function() {
			$("#target-audience").fadeIn(800);
		});
	});
}