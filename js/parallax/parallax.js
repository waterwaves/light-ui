/*
  Author: Shan He
  Year:   2014

  This is the function module of parallax, which is background moving slower
  than the normal content when you scroll the web page.

  Background image is inside a contain, e.g. div, img, section, etc.
  These properties are required:
    data-type="parallax-bg"

  These properties are optional:
    data-speed      should be between 0 and 1, the default is 0.1
    data-responsive should be the window width, of which parallax will be turned
                      off when the width is smaller than the value (larger than
                      320, plz).
    data-size-ratio based on the width and override the height when no parallax.
 */
$(document).ready(function(){
  $('[data-type=parallax-bg]').each(function(){
    var $bgImg = $(this);
    var width_height_ratio = parseFloat($bgImg.data('size-ratio'));
    if (width_height_ratio) {
      $bgImg.css('height', parseFloat($bgImg.css('width')) / width_height_ratio);
    }
    var responsive_size = parseFloat($bgImg.data('responsive'));
    if (!responsive_size || responsive_size < 320 || window.innerWidth <= responsive_size) {
      return;
    }

    // It is true parallax, no static background images.
    var ratio = 1 - ($bgImg.data('speed') || .1);
    ratio = (ratio < 0) ? 0 : ratio;
    var pos_y = $bgImg.css('background-position-y');
    if (pos_y.match('%')) {
      pos_y = -$bgImg.height() * parseFloat(pos_y) / 100;
    } else {
      pos_y = parseFloat(pos_y);
    }

    // Initiate background-position-y in case of the image flash.
    var initial_y = -$bgImg.position().top * ratio + pos_y;
    $bgImg.css('background-position-y', initial_y);

    $(document).on('scroll', function() {
      var new_pos_y = ($(this).scrollTop() - $bgImg.position().top) * ratio + pos_y;
      $bgImg.css('background-position-y', new_pos_y);
    });
  });
});
