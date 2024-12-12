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

    if (pos >= (benefit3_offset - 200) && pos <= (benefit3_offset + 200)) {
      if (!benefitFlag) {
        benefitFlag = true;
        $('.benefit3_img').append('<img id="benefit3Img" class="stamp" src="../img/franchise/benefit3_stamp.svg"></img>');
      }
    }

    if (pos <= (benefit3_offset - 200) || pos >= (benefit3_offset + 200)) {
      benefitFlag = false;
      $('#benefit3 .stamp').remove();
    }

    if (pos >= (benefit5_offset - 200) && pos <= (benefit5_offset + 200)) {
      if (!benefit5Flag) {
        benefit5Flag = true;
        $('.benefit5_img').append('<img class="arrow" src="../img/franchise/benefit5_arrow.svg"></img>');
      }
    }

    if (pos <= (benefit5_offset - 200) || pos >= (benefit5_offset + 200)) {
      benefit5Flag = false;
      $('#benefit5 .arrow').remove();
    }

  });

});