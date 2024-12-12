$(function () {

  $(window).scroll(function () {
    let pos = $(this).scrollTop();//스크롤위치
    if (pos > 470) {
      $("#header").addClass("white");
    } else {
      $("#header").removeClass("white");
    }
  })


  $(".tab li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".car").hide();
  $(".tab li:nth-child(1)").click(function () {
    $(".bike").show();
    $(".car").hide();
  });
  $(".tab li:nth-child(2)").click(function () {
    $(".car").show();
    $(".bike").hide();
  });

}); //end