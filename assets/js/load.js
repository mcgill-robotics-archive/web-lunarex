$(document).ready(function() {
	$(document).keydown(function(e) {
		if (e.keyCode === 37) {
			$('.carousel-control.left').click();
		} else if (e.keyCode === 39) {
			$('.carousel-control.right').click();
		}
	});
});