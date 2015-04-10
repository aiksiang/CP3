$('#submitTestimonial').click(function() {
	console.log($("#reviewer-name").val());
	console.log($("#reviewer-country").val());
	console.log($("#reviewer-credibility").val());
	console.log($("#testimonialContent").val());
	console.log($("#humanAnswerTestimonial").val());
	var userAnswer = $("#humanAnswerTestimonial").val();
	checkAnswer(userAnswer.toString());
});

$("#humanAnswerTestimonial").click(function() {
	$("#humanAnswerTestimonial").val("");
})