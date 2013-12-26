$(document).ready(function() {

  function height(){
    var height = $(window).height();
    $('.is-slide').height(height);

    $('.slider li').height(height);
  }
  height();

  // find width for SLIDER LI SLIDER_WRAP and set height



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
    // blabla();
    // blabla2();
    // findwidth();
    // findheight();
    // findposition();
  });

  // SCROLL click navigation
  $(".nav a").click(function (){
      var page = $(this).attr("href");
      $(this).parents(".js-menu-list").hide();
      $('body').animate({
          scrollTop: $(page).offset().top
      }, 500);
      return false;
  });
  // SCROLL click button
  $(".slide-next").click(function (){
    var page2 = $(this).attr("href");
    $('body').animate({
        scrollTop: $(page2).offset().top
    }, 500);
    $('.nav li').removeClass('is-active');
    $('.nav li:first-child').addClass('is-active');
    return false;
  });

  // SCROLL click logo
  $(".logo").click(function (){
    var page2 = $(this).attr("href");
    $('body').animate({
        scrollTop: $(page2).offset().top
    }, 500);
    return false;
  });

  // nav addClass and removeClass is-active
  $('.nav a').click(function(event) {
    $(this).parent().addClass('is-active').siblings().removeClass('is-active');
  });

  // slider addClass and removeClass is-active
  $('.slider li span').click(function(event) {
    $(this).parent().addClass('is-open').siblings().removeClass('is-open');
  });
});


