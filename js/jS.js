/* заміна меню на те, яке буде розташовуватись зверху-зліва*/
$(window).scroll(function () {
  if ($(this).scrollTop() >425) {
    $('.biography_justify').addClass('newid');
    
  }else{
    $('.biography_justify').removeClass('newid');
  }
});