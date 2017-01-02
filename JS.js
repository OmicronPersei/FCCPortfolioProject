/*global $, jQuery, ResponsiveBootstrapToolkit*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, white: true  */


(function ($, document, window, viewport) {
  
  "use strict";
  
  var setAboutStyleClass = function (viewportSize) {
    if (viewportSize === "xs") {
      $('.aboutContentItem').removeClass('aboutRightJustify');
      $('.aboutContentItem').addClass('aboutCenterJustify');
    }
    else {
      $('.aboutContentItem').removeClass('aboutCenterJustify');
      $('.aboutContentItem').addClass('aboutRightJustify');
    }
  };
  
  $(window).ready(function () {
    setAboutStyleClass(viewport.current());
  });
  
  $(window).resize(function () {
    console.log('Current viewport size: ', viewport.current());
    setAboutStyleClass(viewport.current());
  });
  
}(jQuery, document, window, ResponsiveBootstrapToolkit));