var nav = '.nav',
	li = '.nav li',
	control = '.carousel-control'
	navs = [
	    '',
		'competition',
		'team',
		'design',
		'sponsorship',
		'contact'
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
	} else {
		current_slide_number += 1;
	}

	current_slide_number = current_slide_number % 6;

	console.log(current_slide_number);

	$(li).removeClass('active');

	$($(nav).children()[current_slide_number]).addClass('active');

	location.hash = "#" + navs[current_slide_number];

	return false;
}

$(document).on('click', li, changeState).on('click', control, changeSlide);

