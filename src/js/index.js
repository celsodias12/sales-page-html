$('nav a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 100,
    },
    1000
  );
});

$(".menu_opener").on("click", function (e) {
  let display = $(".menu nav").css("display");

  if (display == "none") {
    $(".menu nav").css("display", "inline-table");
  } else {
    $(".menu nav").css("display", "none");
  }
});
