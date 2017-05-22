$(function() {
  updateSize();
  $(window).resize(updateSize);
});

function updateSize() {
  var width = $(window).width();
  var contentWidth = $('.moqa-header').width();
  $('.moqa-nav-container').width(contentWidth);
  var row$ = $('.moqa-feature-commenting');
  var gif$ = row$.find('.moqa-screen-gif-container-parent');
  var desc$ = row$.find('.moqa-feature-desc');
  if (width < 768) {
    gif$.remove();
    gif$.appendTo(row$);
  } else {
    desc$.remove();
    desc$.appendTo(row$);
  }
}