$(function() {
  // Adjust the main-container margin-top or margin-bottom based on the
  // height of navbar.
  var $bottomNavBar = $('[data-type=navigation].bottom.fixed');
  var $topNavBar = $('[data-type=navigation].top.fixed');
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

  // fix the side-nav-bar if it is required, based on scroll event.
  var $sideNavBar = $('[data-type=navigation].left.fixed, [data-type=navigation].right.fixed');
  if ($sideNavBar.length > 0) {
    var $navContainer = $sideNavBar.children('.nav-container');
    var navContainerWidth = $navContainer.width();
    var toTop = $sideNavBar.data('top');
    $(window).scroll(function() {
      var offsetToWindow = $sideNavBar.offset().top - $(this).scrollTop();
      if (offsetToWindow <= toTop) {
        $navContainer.addClass('sticky').css('width', navContainerWidth).css('top', toTop);
      } else {
        $navContainer.removeClass('sticky').css('width', '').css('top', '');
      }
    });
  }
});