
$(document).ready(function(){
  console.log('✅ testimonial')
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    centerMode: true,
    slickPlay: true
  });
});