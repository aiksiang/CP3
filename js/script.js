$(document).ready(function(){
	$("#home-button").on('click', function() {
		$("#page-text").fadeIn(400);
		$("#book-editions").fadeIn(400);
		$("#first-edition").fadeOut(400);
		$("#second-edition").fadeOut(400);
		$("#third-edition").fadeOut(400);
	});

	$("#cp3-img").on('click', function() {
		$("#page-text").fadeOut(400,function() {
			$("#third-edition").fadeIn(400);
		});
		$("#book-editions").fadeOut(400);
		$("#first-edition").hide();
		$("#second-edition").hide();
	});
});