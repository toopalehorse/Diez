$(document).ready(function(){
  sliderCheck();
  $(window).on('resize', function(){
    sliderCheck();
  });
  function sliderCheck() {
    var width = $(window).width();
    if(width < 768) {
      $('.video__sliden-slick').slick()
    }
      else {
        $('.video__sliden-slick').slick('unslick')
      }
  }

  $('.main-menu').click(function(){
  $(this).toggleClass('burger--open');
  $('.main-menu__list').toggleClass('main-menu--open');
  })

});