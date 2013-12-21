$(document).ready(function() {

  function height(){
    var height = $(window).height();
    $('.is-slide').height(height);
  }
  height();

// footer
  function map_scroll() {
    var position = $(".footer").offset().top;
    var position_2 = $(".slide2").offset().top;
            
    if ($(window).scrollTop() >= position) {
      $(".footer").addClass('footer_fixed');
    }
    if ($(window).scrollTop() <= position_2) {
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
    height();
  });

  // navigation
  $(".nav a").click(function (){
      var page = $(this).attr("href");
      $(this).parents(".js-menu-list").hide();
      $('body').animate({
          scrollTop: $(page).offset().top
      }, 500);
      return false;
  });

  // nav addClass and removeClass is-active
  $('.nav a').click(function(event) {
    $(this).parent().addClass('is-active').siblings().removeClass('is-active');
  });


});


