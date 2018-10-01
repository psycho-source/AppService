//Don't overpopulate this file as we need this to download and execute the fastest
// for preloader stuff.
$(document).ready(function() {
 $(window).on("load", function() {
  var preloaderFadeOutTime = 1500;
  function hidePreloader() {
   var preloader = $('.spinner-wrapper');
   preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
 });
});
