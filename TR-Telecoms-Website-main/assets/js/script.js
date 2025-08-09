$(document).ready(function () {
	if ($('[data-aos]').length > 0) {
		console.log("Animation Code Init");
		AOS.init();
	}

	$('[data-toggler="navbar"]').on("click", function () {
		$('.navbar').toggleClass("cc-open");
	});
	$(".navbar__link").on("click", function () {
		$('.navbar').removeClass("cc-open");
	});
});