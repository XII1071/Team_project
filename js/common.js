$(function () {

  $(".gnb > li").mouseenter(function () {
    $(this).find("> a").css({ color: "#F88B23" });
  });
  $(".gnb > li").mouseleave(function () {
    $(this).find("> a").css({ color: "#000" });
  });

  $(window).scroll(function () {
    let pos = $(this).scrollTop();//스크롤위치
    if (pos > 800) {
      $("#header").removeClass("white_");
      $("#header").addClass("white");
    } else {
      $("#header").removeClass("white");
      $("#header").addClass("white_");
    }
  });

  /* depth2 */
  $(".depth2_bg, .depth2").hide();
  $(".gnb").mouseenter(function () {
    $(".depth2_bg").stop().fadeIn(200);
    $(".depth2").stop().fadeIn();

  });
  $(".gnb").mouseleave(function () {
    $(".depth2_bg").stop().fadeOut(200);
    $(".depth2").stop().fadeOut();
  });

  $(".depth2 > li > a").mouseenter(function () {
    $(this).css({ backgroundColor: "#eee" });
  })
  $(".depth2 > li > a").mouseleave(function () {
    $(this).css({ backgroundColor: "transparent" });
  })


  /* ham */
  $(".ham_menu").click(function () {
    $(".ham").animate({ marginRight: "0" });
  });

  $(".ham .close").click(function () {
    $(".ham").animate({ marginRight: "-100%" });
  });

  $(".float_button li div").hide();
  $(".float_button li").mouseenter(function () {
    $(this).find("div").show();
  });
  $(".float_button li").mouseleave(function () {
    $(this).find("div").hide();
  });




});//end