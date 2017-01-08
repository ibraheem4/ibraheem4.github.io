$(document).ready(function() {
  $('.ui.sticky')
    .sticky({
      context: '#context'
    });

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});