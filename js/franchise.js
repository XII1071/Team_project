$(document).ready(function () {

  var franFlag = false;
  var benefitFlag = false;

  $(window).scroll(function () {
    var fran_banner_offset = $('#fran_banner').offset().top;
    var benefit3_offset = $('#benefit3').offset().top;
    var benefit5_offset = $('#benefit5').offset().top;
    let pos = $(this).scrollTop();//스크롤위치

    if (pos >= (fran_banner_offset - 500) && pos <= (fran_banner_offset + 500)) {
      if (!franFlag) {
        franFlag = true;
        $('#fran_banner').append('<div class="five"><img src="../img/franchise/banner_five.svg"></div>');
      }
    }

    if (pos <= (fran_banner_offset - 500) || pos >= (fran_banner_offset + 500)) {
      franFlag = false;
      $('#fran_banner .five').remove();
    }

  });

});