$(document).ready(function($){
	// testimonials
		// get the width of each of the testimonials
		var test_width = $('.test').outerWidth();
		// how many testimonials
		var many_tests = $('.test').length;
		// total width of the div
		var total_width = test_width * many_tests;
		// apply the widths
		$('.test-width').css({
			'width' : total_width +'px'
		})
		$('.test').css({
			'width' : test_width +'px'
		});
	
	// paginate the testimonials
		$('.pagination li a').click(function(){
			// get the title
			var atitle = $(this).attr('title');
			// remove the other actives
			$('.test.active').removeClass('active');
			$('.pagination li a.active').removeClass('active');
			// add active to the right stuff
			$('.test#'+atitle).addClass('active');
			$(this).addClass('active');
			center_tests();
		});
});

function center_tests() {
	// get the active one and grab its number
	var this_active = $('.test.active').attr('id');
		this_active = this_active.replace('test-', '');
	// get the width
	var this_width = $('.test').outerWidth();
	// now take the width and multply it by one less than the active number
	var wanted_margin = this_width * (this_active-1);
	// now apply it to the width wrap
	$('.test-width').css({
		'margin-left' : '-'+ wanted_margin +'px'
	});
}