/***** top *****/

/* load */
$(window).on("load", function () {
  $(".loading").delay(500).fadeOut(600);
  setTimeout(function () {
    new WOW({}).init();
    $("body").removeClass("preload");
  }, 700);
});

/* modal */
modal();
$(window).resize(function () {
  modal();
});
function modal() {
  var wid = $(window).width();
  if (wid < 768) {
    $(".btn_comment").colorbox({
      iframe: true,
      width: "100%",
      height: "100%",
      scrolling: true,
      opacity: 0.8,
      fixed: true,
      className: "commentModal",
    });
    $(".btn_credit").colorbox({
      iframe: true,
      width: "100%",
      height: "100%",
      scrolling: true,
      opacity: 0.8,
      fixed: true,
      className: "creditModal",
    });
    $(".btn_trailer").colorbox({
      iframe: true,
      width: "100%",
      height: "100%",
      scrolling: false,
      opacity: 0.8,
      fixed: true,
    });
    $(".btn_news").colorbox({
      iframe: true,
      width: "100%",
      height: "100%",
      scrolling: true,
      opacity: 0.8,
      fixed: true,
      className: "newsModal",
    });
  } else {
    $(".btn_comment").colorbox({
      iframe: true,
      width: "80%",
      maxWidth: 1200,
      height: "80%",
      maxHeight: 800,
      scrolling: true,
      opacity: 0.8,
      fixed: true,
      className: "commentModal",
    });
    $(".btn_credit").colorbox({
      iframe: true,
      width: "80%",
      maxWidth: 1200,
      height: "80%",
      maxHeight: 800,
      scrolling: true,
      opacity: 0.8,
      fixed: true,
      className: "creditModal",
    });
    $(".btn_trailer").colorbox({
      iframe: true,
      width: "100%",
      height: "100%",
      scrolling: false,
      opacity: 0.8,
      fixed: true,
    });
    $(".btn_news").colorbox({
      iframe: true,
      width: "80%",
      maxWidth: 1200,
      height: "90%",
      maxHeight: 800,
      scrolling: true,
      opacity: 0.8,
      fixed: true,
      className: "newsModal",
    });
  }
}
