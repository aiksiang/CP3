
$.get("php/retrieval.php", {action: "getRandomQuestion"}).done(function(question) {
	console.log(question);
});

function checkAnswer(userAnswer, questionNo) { //User Answer to be in text form
	$.get("php/retrieval.php", {action: "checkAnswer", answer: userAnswer, questionNumber: questionNo}).done(function(correct) {
		console.log(correct);
	});
}