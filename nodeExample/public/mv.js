$(function() {
  $("button").on("click", function() {
    if ($(this).hasClass("mv")) {
        window.location = "http://localhost:3000/" + $(this).attr("value");
    }
  });
  $("button").on("mouseover", function() {
    $(this).addClass("btn-primary");
  });
  $("button").on("mouseout", function() {
    $(this).removeClass("btn-primary");
  });
});
