var nav = '.nav',
	li = '.nav li',
	control = '.carousel-control'
	navs = [
	    '',
		'competition',
		'team',
		'design',
		'sponsorship',
		'contact',
		'history'
	],
	current_slide_number = 0;

function changeState() {
	if (!$(this).hasClass('active')) {
		$(li).removeClass('active');
		$(this).addClass('active');
		current_slide_number = parseInt($(this).children()[0].id.replace('carousel-selector-', ''));
	}
}

function changeSlide() {
	var action = $(this).data('slide');

	if (action === 'prev') {
		current_slide_number -= 1;
		if (current_slide_number < 0) {
			current_slide_number += 7
		}
	} else {
		current_slide_number += 1;
	}

	current_slide_number = current_slide_number % 7;

	$(li).removeClass('active');

	$($(nav).children()[current_slide_number]).addClass('active');

	location.hash = "#" + navs[current_slide_number];

	return false;
}

$(document).on('click', li, changeState).on('click', control, changeSlide);

$(document).ready(function() {
		// Parse the url
	var index = navs.indexOf(location.hash.replace('#', ''))
	$($(nav).children('li')[index]).click();
	$('#myCarousel').carousel(index);
	current_slide_number = index;
});

