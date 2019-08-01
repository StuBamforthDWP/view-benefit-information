/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$(function() {
  var pathname = window.location.pathname;
  var getLast = pathname.match(/.*\/(.*)$/)[1];
  var truePath = getLast.replace(".php","");
  if(truePath === '') {
      $('body').attr('id', 'home');
  }
  else {
      $('body').attr('id', truePath);
  }
});