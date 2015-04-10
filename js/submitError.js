$('#submitError').click(function() {
	console.log($("#exampleInputEmail1").val());
	console.log($("#page-number").val());
	console.log($("#severity").val());
	console.log($("#errorReportContent").val());
	console.log($("#humanAnswerError").val());
	var userAnswer = $("#humanAnswerError").val();
	checkAnswer(userAnswer.toString());
});

$("#humanAnswerError").click(function() {
	$("#humanAnswerError").val("");
})