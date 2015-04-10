var currentQuestionNo = 0;
function getQuestion() {
	$.get("php/retrieval.php", {action: "getRandomQuestion"}).done(function(question) {
		console.log(question);
		$(".humanCheck .humanQuestion").html(question.question);
		currentQuestionNo = question.id;
	});
}

function checkAnswer(userAnswer) {//User Answer to be in text form
	$.get("php/retrieval.php", {action: "checkAnswer", answer: userAnswer, questionNumber: currentQuestionNo}).done(function(correct) {
		$("#alertModal").modal('show');
		if (correct == true) {
			$("#alertContent").html("Response submitted to Steven! Thank You!");
		} else {
			$("#alertContent").html("You are not really human, are you?");
		}
	});
}