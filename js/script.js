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

  $('.accordeon .burger').on('click', function(){
  $(this).closest('.accordeon').find('.main-menu__list').slideToggle();
  })

  $('.accordeon .burger').on('click', function(){
  $(this).closest('.accordeon').find('.active').slideToggle();
  })

});