$('#submitTestimonial').click(function() {
	var testimonial = {};
	testimonial.reviewerName = $("#reviewer-name").val();
	testimonial.reviewerContinent = $("#continent").val();
	testimonial.reviewerCountry = $("#country").val();
	testimonial.reviewerCredibility = $("#reviewer-credibility").val();
	testimonial.content = $("#testimonialContent").val();
	testimonial.humanCheck = $("#humanAnswerTestimonial").val();
	var userAnswer = $("#humanAnswerTestimonial").val();
	checkAnswer(userAnswer.toString(), "TestimonialSubmission", testimonial);
});

$("#humanAnswerTestimonial").click(function() {
	$("#humanAnswerTestimonial").val("");
});

$('#review-submit').on('hidden.bs.modal', function (e) {
	$(this)
	    .find("input,textarea")
	       .val('')
	       .end();
});