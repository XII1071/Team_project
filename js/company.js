$(document).ready(function () {

  $(window).scroll(function () {
    let pos = $(this).scrollTop();//스크롤위치
    if (pos > 470) {
      $("#header").addClass("white");
    } else {
      $("#header").removeClass("white");
    }
  })

  $('.menu_2022,.menu_2021').hide();
  $('.tab_btn li:nth-child(1)').addClass('active')

  $('.tab_btn li').click(function () {
    let Num = $(this).index();
    $('.tab_menu > ul').eq(Num).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
  });





});