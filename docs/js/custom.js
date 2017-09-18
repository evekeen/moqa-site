$(function() {
  updateSize();
  $(window).resize(updateSize);
});

function updateSize() {
  var width = $(window).width();
  var contentWidth = $('.moqa-main-column').width();
  $('.moqa-nav-container').width(contentWidth);
  var all$ = $('#all');
  var row$ = $('.moqa-feature-commenting');
  var gif$ = row$.find('.moqa-screen-gif-container-parent');
  var desc$ = row$.find('.moqa-feature-desc');
  if (width < 768) {
    gif$.remove();
    gif$.appendTo(row$);
    all$.removeClass("moqa-big");
  } else {
    desc$.remove();
    desc$.appendTo(row$);
    all$.addClass("moqa-big");
  }
}