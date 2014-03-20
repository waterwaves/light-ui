$(function() {
  var $bottomNavBar = $('[data-type=nav].bottom.fixed');
  var $topNavBar = $('[data-type=nav].top.fixed');
  if ($bottomNavBar || $topNavBar) {
    var $mainContainer = $('.main-container');
    var mainContainerMarginTopBottom = $mainContainer.outerHeight(true) - $mainContainer.outerHeight();
    if ($bottomNavBar) {
      var navHeight = $bottomNavBar.height();
      $mainContainer.css('margin-bottom', mainContainerMarginTopBottom/2 + navHeight);
    }
    if ($topNavBar) {
      var navHeight = $topNavBar.height();
      $mainContainer.css('margin-top', mainContainerMarginTopBottom/2 + navHeight);
    }
  }
});