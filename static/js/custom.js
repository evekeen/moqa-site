$(function() {
  var width = $('.moqa-header').width();
  $('.moqa-nav-container').width(width);
  if (width < 500) {
    var row$ = $('.moqa-feature-commenting');
    var desc$ = row$.find('.moqa-feature-desc');
    var gif$ = row$.find('.moqa-screen-gif-container');
    gif$.remove();
    gif$.appendTo(row$);
  }
});