$("myText").keypress(function (event)) {
	if (event.which = 49) { //press key 1
		$("#salad").animate({
			transform: rotate(0.5 turn);
		});
	};
};


$("#Burger").keypress(function (event) {
	if (event.which = 50) //press key 2
		$("#burger").animate({
			transform: rotate(0.5 turn);
		});
});


$("#Wings").keypress(function (event) {
	if (event.which = 51) //press key 3
		$("#wings").animate({
			transform: rotate(0.5 turn);
		});
});








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


$(document).ready(function () {
			$("#Salad").click(function () {
						$("#Salad") if (clicked == false) {
								$(".box").animate({
									width: "300px",
									height: "300px",
									marginLeft: "150px",
									borderWidth: "10px",

								});









								$(document).ready(function () {
											$("#Salad").keypress(function (event) {
														if (event.which = 49) { //press key 1
															$("img").animate({
																transform: rotate(0.5 turn);
															});
														});


													$(document).ready(function () {
															$("#Burger").keypress(function (event) {
																		if (event.which = 50) //press key 2
																			$("img").animate({
																				transform: rotate(0.5 turn);
																			});

																		$(document).ready(function () {
																					$("#Wings").keypress(function (event) {
																								if (event.which = 51) //press key 3
																									$("img").animate({
																										transform: rotate(0.5 turn);
																									});
