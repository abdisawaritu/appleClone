$(".footer-links-wrapper  h3").on("click", function () {
  if ($(window).width() <= 768) {
    $(this).toggleClass("expanded");

    $(this).next("ul").slideToggle();
  }

  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $(".footer-links-wrapper ul").removeAttr("style");
      $(".footer-links-wrapper h3").removeClass("expanded");
    }
  });
});
