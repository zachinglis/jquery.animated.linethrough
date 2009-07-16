jQuery(document).ready(function () {  
  jQuery('#line').animateStrikethrough(40, function () {
    jQuery('#debug').append("<p>Completed</p>");
  });

  // Debug code
  jQuery('#debug').append("<p>Javascript loaded</p>");
});
