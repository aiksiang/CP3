var currentQuestionNo = 0;
function getQuestion() {
	$.get("php/retrieval.php", {action: "getRandomQuestion"}).done(function(question) {
		console.log(question);
		$(".humanCheck .humanQuestion").html(question.question);
		currentQuestionNo = question.id;
	});
}

function checkAnswer(userAnswer, type, submission) {//User Answer to be in text form
	$.get("php/retrieval.php", {action: "checkAnswer", answer: userAnswer, questionNumber: currentQuestionNo}).done(function(correct) {
		$("#alertModal").modal('show');
		if (correct == true) {
			if (type == "ErrorSubmission") {
				$.post("php/update.php", {
					command: "new_errata", 
					name: submission.userName, 
					page: submission.pageNumber, 
					severity: submission.severity, 
					type: submission.type, 
					content: submission.content, 
					version: selectedEdition
				});	
			} else if (type == "TestimonialSubmission") {
				$.post("php/update.php", {
					command: "new_testimonial", 
					name: submission.reviewerName, 
					comment: submission.content, 
					nationality: submission.reviewerCountry, 
					region: submission.reviewerContinent, 
					credibility: submission.reviewerCredibility, 
					imgURL: null
				});	
			}
			$("#alertContent").html("Response submitted to Steven! Thank You!");
		} else {
			$("#alertContent").html("You are not really human, are you?");
		}
	});
}