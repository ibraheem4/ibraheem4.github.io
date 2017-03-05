$(document).ready(function() {
  $('.ui.sticky')
    .sticky({
      context: '#context'
  });

  $(".ui.menu a.item[href='"+window.location.pathname+"']").addClass("active")

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});