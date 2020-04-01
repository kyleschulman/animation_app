
$(document).ready(function () {
$("Salad").click(function () {
	$(".salad")
			.animate({
				width: "200px"
			})
			.animate({
				height: "200px"
			})
			.animate({
				marginLeft: "150px"
			})
			.animate({
				borderWidth: "10px"
			})
			.animate({
				opacity: 0.5
			});
	});
});
