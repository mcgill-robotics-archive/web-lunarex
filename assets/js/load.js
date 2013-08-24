$(document).ready(function() {
	$(document).keydown(function(e) {
		console.log('lol')
		e.preventDefault();
		if (e.keyCode === 37) {
			$('.carousel-control.left').click();
		} else if (e.keyCode === 39) {
			$('.carousel-control.right').click();
		}
	});
});