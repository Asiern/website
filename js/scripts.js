$(document).ready(function(){
    $(window).on('scroll', function(){
    if ( $(window).scrollTop() > 0 ){
      $('.navbar').addClass('shadow');
    } else {
      $('.navbar').removeClass('');
    }
    });
    $(window).on('scroll', function () {
      var pixs = $(document).scrollTop()
      pixs = pixs / 100;
      $(".out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px),"}) 
      $(".out").css("opacity", 1- $(window).scrollTop() / 400)    
  });
  });