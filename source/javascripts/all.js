//= require jquery

$(function() {
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
      $('.header-border').toggleClass("menu-spacer");
      $('.menu-section').toggleClass("on");
      $('.one').toggleClass("x");
      $('.two').toggleClass("x");
      $('.three').toggleClass("x");
      $("nav ul").toggleClass('hidden');
  });
});
