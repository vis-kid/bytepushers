//= require jquery

$(function() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
      $('.header-border').toggleClass("menu-spacer");
      $('.menu-section').toggleClass("on");
      $("nav ul").toggleClass('hidden');
  });
});
