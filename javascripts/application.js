jQuery(document).ready(function () {  
  jQuery('#line').animateStrikethrough(40, function () {
    jQuery('#debug').append("<p><strong>Completed!</strong></p>");
  });

  // Debug code
  jQuery('#debug').append("<p>Javascript loaded</p>");
});
