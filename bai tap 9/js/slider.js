$(document).ready(function () {
  var stt = 0;
  var startImg = $("img.slide").first().attr("stt") ,
    endImg = $("img.slide").last().attr("stt");

  $("img.slide").each(function () {
    if($(this).is(':visible')){
      stt = $(this).attr("stt");
    }
  })

  $("#next").click(function () {
    var next = ++stt;
    if(next > endImg){
      next = 0;
      stt = 0;

    }

    $("img.slide").hide();
    $("img.slide").eq(next).show();
  });

  $("#prev").click(function () {
    var prev = --stt;
    if(prev < 0){
      prev = endImg;
      stt = endImg;
    }
    $("img.slide").hide();
    $("img.slide").eq(prev).show();
  });
  setInterval(function () {
    $("#next").click();
  },5000);
})
