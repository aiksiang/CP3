$('#submitError').click(function() {
	var error = {};
	error.userName = $("#exampleInputEmail1").val();
	error.type = $("#error-type").val();
	error.severity = $("#severity").val();
	error.pageNumber = $("#page-number").val();
	error.content = $("#errorReportContent").val();
	error.humanCheck = $("#humanAnswerError").val();
	var userAnswer = $("#humanAnswerError").val();
	checkAnswer(userAnswer.toString(), "ErrorSubmission", error);
});

$("#humanAnswerError").click(function() {
	$("#humanAnswerError").val("");
});

$('#errata-submit').on('hidden.bs.modal', function (e) {
	$(this)
	    .find("input,textarea")
	       .val('')
	       .end();
});