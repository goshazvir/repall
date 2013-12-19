$(document).ready(function() {
	var height = $(window).height();
	$('.is-slide').height(height);



// footer
  function map_scroll() {
  var position = $(".footer").offset().top;
    if ($(window).scrollTop() >= position) {
      $(".footer").addClass('footer_fixed');
    }
    else {
      $(".footer").removeClass('footer_fixed');
    }
  }

  if ($(".footer").length > 0){
    map_scroll();
  }

  $(window).scroll(function(){
    if ($(".footer").length > 0){
    map_scroll();
  }
  });
  $(window).resize(function(){
    if ($(".footer").length > 0){
    map_scroll();
  }
  });

});





$(window).resize(function() {
	var height = $(window).height();
	$('.is-slide').height(height);
});


