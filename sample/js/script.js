$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    mobileFirst: true,
    autoplay: true
    // adaptiveHeight:true
  });
});
$(function(){
    $('select').styler();
    $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
    });
  
  });
 