$(document).ready(function() {
    
  
  function height(){
    var height = $(window).height();
    var x = 0.22;
    var benefit_top = height * x;
    var benefit_cont = (height - benefit_top);

    var x2 = 0.13;
    var x3 = 0.11;

    var x4 = 0.43;

    $('.is-slide').height(height);
    $('.slider li').height(height);
    $(".benefits__top").css('height', benefit_top);
    $(".benefits__top").css('line-height', (+benefit_top + 'px'));
    $(".benefits__cont").css('height', benefit_cont);
    $("")
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


