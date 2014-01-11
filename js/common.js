$(document).ready(function() {
    
  
  function height(){
    var height = $(window).height();

    var x = 0.22;
    var benefit_top = height * x;
    var benefit_cont = (height - benefit_top);



    var x4 = 0.43;
    var services__top = height * x4;
    var services__cont = (height - services__top );

    $('.is-slide').height(height);
    $('#map-canvas').height(height);
    $('.slider li').height(height);

    $(".benefits__top").css('height', benefit_top);
    $(".benefits__cont").css('height', benefit_cont);
    $(".benefits__top").css('line-height', (+benefit_top + 'px'));
    $(".benefits__block").css('height', benefit_cont);

    $(".services__top").css('min-height', services__top);
    $(".services__top").css('line-height', (+services__top + 'px'));
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
    var slide = $('.slider li span');
    var slide_act = $('.slider .is-open span');
    slide.click(function(event) {
      $(this).parent().addClass('is-open').siblings().removeClass('is-open');
    });

    // left swipe on slide preview
    slide.on( 'swipeleft', swipe_left);
        function swipe_left(event){
        $(this).parent().addClass('is-open').siblings().removeClass('is-open');
    }
    // left swipe on active slide
    slide_act.on( 'swipeleft', swipe_left);
        function swipe_left(event){
        if ($(this).parent().next().length > 0) { 
          $('.slider li').removeClass('is-open');
          $(this).parent().next().addClass('is-open');
        }
    }
    // right swipe on slide preview
    slide.on( 'swiperight', swipe_right);
        function swipe_right(event){
        $(this).parent().addClass('is-open').siblings().removeClass('is-open');
    }
    // right swipe on active slide
    slide_act.on( 'swiperight', swipe_right);
        function swipe_right(event){
        if ($(this).parent().prev().length > 0) {
          $('.slider li').removeClass('is-open');
          $(this).parent().prev().addClass('is-open');
        }
        
    }



});


