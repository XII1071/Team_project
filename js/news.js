$(document).ready(function () {

  $(window).scroll(function () {
    let pos = $(this).scrollTop();//스크롤위치
    if (pos > 470) {
      $("#header").addClass("white");
    } else {
      $("#header").removeClass("white");
    }
  })


  //tab
  $('.tab li:nth-child(1)').addClass('active')
  $('#event,#review').hide()
  $('.tab li').click(function () {
    console.log($(this))
    let Num = $(this).index();
    $('#main > section').eq(Num).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
  });

  //news
  var ww = $(window).width();
  var news_best = undefined;

  function initSwiper() {

    news_best = new Swiper(".news_best", {
      slidesPerView: 1,
      spaceBetween: 60,
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
          spaceBetween: 60,
        },

        1024: { //pc
          slidesPerView: 3,
          spaceBetween: 60,
          loop: false,
        },

      },
    });

    if (ww < 1024) {
      news_best.autoplay.start();
      news_best.pagination.show();
    } else if (ww >= 1024) {
      news_best.autoplay.stop();
      // news_best.destroy();
      // news_best = undefined;
    }
  }

  initSwiper();

  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });


  // review
  const rev = new Swiper('.rev', {
    // 옵션(parameter) 추가
    autoplay: {//자동 슬라이드
      delay: 2500,// 슬라이드 한장이 머무르는 시간 2500=2.5s
      disableOnInteraction: false,
    },
    speed: 1000,//슬라이드 넘어가는 속도
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true, //슬라이드 반복(centerdslides와 사용안됨)

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });


  // 페이지 이동
  /*   $("#onePage2").css({ "font-weight": "bold", "color": "#F88B23" });
    $("#onePage1").css({ "font-weight": "bold", "color": "#F88B23" });
    $("#onePage").css({ "font-weight": "bold", "color": "#F88B23" }); */

  cachePage();
  clickPage("onePage");
  clickPage("onePage1");
  clickPage("onePage2");
});

// 페이지 이동
function clickPage(pageNum) {
  let pageNow = $("#" + pageNum);
  let pageList = pageNow.parent();

  pageList.children().css({ "font-weight": "", "color": "" });
  pageNow.css({ "font-weight": "bold", "color": "#F88B23" });
}

function cachePage() {
  const queryString = window.location.search;   //주소 뒤에 parameter 가져오기
  const urlParams = new URLSearchParams(queryString); //parameter URL Parameter로 변경
  const sectionId = urlParams.get('sectionId'); //parameter 값 가져오기
  console.log('queryString: ' + queryString)
  console.log('urlParams: ' + urlParams)
  console.log('sectionId: ' + sectionId)


  if (sectionId) { //섹션 ID 존재할 경우
    var offsetPosition = $('#news').offset() - 150; //여기 offset() - 숫자 주면 알아서 slide
    $("html, body").stop().animate({ scrollTop: offsetPosition.top }, 500);

    var sectionTab = $('#' + sectionId + 'Tab'); //섹션 선택
    console.log(sectionTab);
    sectionTab.trigger("click");
  }
}
