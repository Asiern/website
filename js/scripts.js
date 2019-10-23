$(document).ready(function(){
  var altura = $('.nav').offset().top;
    $(window).on('scroll', function(){
    if ( $(window).scrollTop() > altura ){
      $('.nav').addClass('sticky');
    } else {
      $('.nav').removeClass('sticky');
    }
    });
  });