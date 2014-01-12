$(document).ready(function() {
    
  function height(){
    var height = $(window).height();

    var x = 0.22;
    var benefit_top = height * x;
    var benefit_cont = (height - benefit_top);

    var x4 = 0.43;
    var services__top = height * x4;
    var services__cont = (height - services__top );

    $('.js-slide').height(height);
    $('.js-map').height(height);
    $('.slider li').height(height);

    $(".js-benefits-top").css('height', benefit_top);
    $(".js-benefits-cont").css('height', benefit_cont);
    $(".js-benefits-top").css('line-height', (+benefit_top + 'px'));
    $(".js-benefits-block").css('height', benefit_cont);

    $(".js-services-top").css('min-height', services__top);
    $(".js-services-top").css('line-height', (+services__top + 'px'));
  }
  height();

// footer
  function map_scroll() {
    var position = $(".js-footer").offset().top;
    var position_2 = $("#js-how-work").offset().top;
            
    if ($(window).scrollTop() >= position) {
      $(".js-footer").addClass('footer_fixed');
    }
    if ($(window).scrollTop() <= position_2) {
      $(".js-footer").removeClass('footer_fixed');
    }
  }

  if ($(".js-footer").length > 0){
    map_scroll();
  }

  $(window).scroll(function(){
    if ($(".js-footer").length > 0){
    map_scroll();
  }
  });
  
  $(window).resize(function(){
    if ($(".js-footer").length > 0){
      map_scroll();
    }
    height();
  });

  // SCROLL click navigation
  $(".js-nav a").click(function (){
      var page = $(this).attr("href");
      $(this).parents(".js-menu-list").hide();
      $('body').animate({
          scrollTop: $(page).offset().top
      }, 500);
      return false;
  });

  // SCROLL click button
  $(".js-pallet-next").click(function (){
    var page2 = $(this).attr("href");
    $('body').animate({
        scrollTop: $(page2).offset().top
    }, 500);
    $('.js-nav li').removeClass('is-active');
    $('.js-nav li:first-child').addClass('is-active');
    return false;
  });

  // SCROLL click logo
  $(".js-logo").click(function (){
    var page2 = $(this).attr("href");
    $('body').animate({
        scrollTop: $(page2).offset().top
    }, 500);
    return false;
  });

  // nav addClass and removeClass is-active
  $('.js-nav a').click(function(event) {
    $(this).parent().addClass('is-active').siblings().removeClass('is-active');
  });

  // slider addClass and removeClass is-active
    var slide = $('.js-slider li span');
    var slide_act = $('.js-slider .is-open span');
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
          $('.js-slider li').removeClass('is-open');
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
          $('.js-slider li').removeClass('is-open');
          $(this).parent().prev().addClass('is-open');
        }       
    }

});


