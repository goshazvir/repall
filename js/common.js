$(document).ready(function() {
	var height = $(window).height();
	$('.is-slide').height(height);


	var position = $(".results").offset().top;

	if ($(window).scrollTop() >= position) {
    $(".footer").addClass('map_fixed');
  }

});





$(window).resize(function() {
	var height = $(window).height();
	$('.is-slide').height(height);
});

