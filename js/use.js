$(document).ready(function () {

  $(window).scroll(function () {
    let pos = $(this).scrollTop();//스크롤위치
    if (pos > 470) {
      $("#header").addClass("white");
    } else {
      $("#header").removeClass("white");
    }
  })

  // app
  var ww = $(window).width();
  var news_best = undefined;

  function initSwiper() {

    app_list = new Swiper(".app_list", {
      slidesPerView: 1,
      spaceBetween: 45,
      simulateTouch: true,
      speed: 1000,
      loop: false, // True 일 경우 사진 개수를 넘어서 루프를 반복한다
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      breakpoints: {

        768: { //
          slidesPerView: 2,
          spaceBetween: 45,
        },

        1024: { //pc
          slidesPerView: 4,
          spaceBetween: 45,
          loop: false,
        },

      },
    });

    if (ww < 1024) {
      app_list.autoplay.start();
      app_list.pagination.show();
    } else if (ww >= 1024) {
      app_list.autoplay.stop();
      // news_best.destroy();
      // news_best = undefined;
    }
  }

  initSwiper();

  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });
  // location tab
  $('#location .tab li:nth-child(1)').addClass('active');
  $('#location .microcar, #location .microcar_map').hide();
  $('#location .tab li').click(function () {
    let Num = $(this).index();
    $('#location .location_list ul').eq(Num).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
    $('.map').children().eq(Num).show().siblings().hide();
  });


  // recommend tab
  $('#recommend .tab li:nth-child(1)').addClass('active');
  $('#recommend .gyeongju').hide();
  $('#recommend .tab li').click(function () {
    let Num = $(this).index();
    $('.recommend_contents ul').eq(Num).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
    $(".site_group").css({ marginLeft: "0" }, 1000)
  });

  //recommend
  $("#recommend .next").click(function () {
    $(".site_group").animate({ marginLeft: "-88%" }, 1000)
  });
  $("#recommend .prev").click(function () {
    $(".site_group").animate({ marginLeft: "0" }, 1000)
  });


});