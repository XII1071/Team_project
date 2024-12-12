$(function () {

  const swiper_mv = new Swiper(".swiper_mv", {
    // Optional parameters
    autoplay: {
      // 자동 슬라이드
      delay: 3000, // 슬라이드 한장이 머무르는 시간
      disableOnInteraction: false,
    },
    speed: 1000, // 슬라이드 넘어가는 속도
    loop: true, // 슬라이드 반복 (centeredslides랑 같이 사용x)


  });

  const swiper_how_left = new Swiper(".swiper_how_left", {
    // Optional parameters
    /*     autoplay: {
          // 자동 슬라이드
          delay: 5000, // 슬라이드 한장이 머무르는 시간
          disableOnInteraction: false,
        }, */
    speed: 1000, // 슬라이드 넘어가는 속도
    loop: false, // 슬라이드 반복 (centeredslides랑 같이 사용x)
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination", // 슬라이드 아래 동그라미
      dynamicBullets: false,
      type: "bullets", // bullets(기본), fraction(숫자), progressbar
      clickable: true, // bullets 클릭 가능
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      //반응형 슬라이드
      // when window width is >= 320px 이상
      769: {
        pagination: false,
      },
    }, /* / 수직 슬라이드 (.swiper 또는 .swiper-wrapper에 height 지정 필요) */
  });

  const swiper_how_right = new Swiper(".swiper_how_right", {
    // Optional parameters
    speed: 1000, // 슬라이드 넘어가는 속도
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 아래 동그라미
      dynamicBullets: false,
      type: "progressbar", // bullets(기본), fraction(숫자), progressbar
      clickable: true, // bullets 클릭 가능
    },
    loop: false, // 슬라이드 반복 (centeredslides랑 같이 사용x)
    effect: "fade", // fade 효과
    fadeEffect: {
      crossFade: true,
    },
  });

  swiper_how_right.controller.control = swiper_how_left
  swiper_how_left.controller.control = swiper_how_right


  swiper_how_left.on('slideChange', function () {
    let i = (this.activeIndex);
    $(".pagination_bike").animate({ marginLeft: 116 * i }, 1000);
  });

  //  let i = 1;
  //  $(".swiper-button-next").click(function () {
  //    $(".pagination_bike").animate({ marginLeft: 116 * i }, 1000);
  //    i++;
  //  });

  let j = 1;
  let current = $(".pagination_bike").position().left;
  $(".swiper-button-prev").click(function () {
    $(".pagination_bike").animate({ "left": current - (116 * j) }, 1000);
    j++;
  });


  const swiper_review = new Swiper(".swiper_review", {
    // Optional parameters
    autoplay: {
      // 자동 슬라이드
      delay: 2000, // 슬라이드 한장이 머무르는 시간
      disableOnInteraction: false,
    },
    speed: 1000, // 슬라이드 넘어가는 속도
    loop: true, // 슬라이드 반복 (centeredslides랑 같이 사용x)
    slidesPerView: 1, // 가로 한줄에 보이는 슬라이드 개수
    spaceBetween: 30, //슬라이드 간 거리
    centeredSlides: true, //첫번째 슬라이드가 정중앙에 (loop랑 같이 사용x)
    breakpoints: {
      //반응형 슬라이드
      // when window width is >= 320px 이상
      769: {
        slidesPerView: 3,
        spaceBetween: 50,

      },
    },

  });
});//end