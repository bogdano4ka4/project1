/* функція, що підсвічує активну ссилку в меню навігації*/
$(window).scroll(function () {
  var bio=$('.highest_end_email').height()+ $('.q').height();
  var ar=bio+$('.section2').height();
  var media=ar+$('.section3').height()+$('.section4_part1').height()+$('.section4_big_sec_block').height();
  var part=media+$('.section5').height();
  if ($(this).scrollTop() >-10 && $(this).scrollTop() <bio) 
  {
    $('a').removeClass('biography_color');
     $('.bio_c').addClass('biography_color');
  }else
    {
      if ($(this).scrollTop() >=bio && $(this).scrollTop() <ar) 
      {
       $('a').removeClass('biography_color');
       $('.arch_c').addClass('biography_color');
      }else
      {
        if ($(this).scrollTop() >=ar && $(this).scrollTop() <media) 
        {
          $('a').removeClass('biography_color');
          $('.media_c').addClass('biography_color');
        }else
        {
          if ($(this).scrollTop() >=media && $(this).scrollTop() <part)
          {
            $('a').removeClass('biography_color');
            $('.part_c').addClass('biography_color');
          }else
          {
            $('a').removeClass('biography_color');
            $('.cont_c').addClass('biography_color');
          }
        }
      }
    }
});
