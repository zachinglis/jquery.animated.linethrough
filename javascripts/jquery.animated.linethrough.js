jQuery(document).ready(function () {
  jQuery('#line').animateStrikethrough(40);

  // Debug code
  jQuery('#debug').text("Javascript loaded");
});

jQuery.fn.animateStrikethrough = function(speed){
  return this.each(function(){
    if(jQuery(this).find('.strike').length == 0) {
      jQuery(this).wrapInner("<span class='letters-left'></span>");
      jQuery(this).prepend("<span class='strike'></span>");
    }
    
    var line    = jQuery(this)
    var strike  = jQuery(line).find('.strike');
    var left    = jQuery(line).find('.letters-left');

    setInterval(function () {
      jQuery(line).strikeThroughFirstLetter();
      
    }, speed);
  });
};

jQuery.fn.strikeThroughFirstLetter = function(){
  return this.each(function(){
    jQuery(this).find('.strike').transposeFirstLetter(jQuery(this).find('.letters-left'));
    jQuery(this).find('.letters-left').removeFirstLetter();
    
    if(jQuery(this).find('.letters-left').length != 0 && jQuery(this).find('.letters-left').text().length == 0) {
      jQuery(this).addClass('strike');
      jQuery(this).text(jQuery(this).find('.strike').text());
      jQuery(this).find('.strike, .letters-left').remove();
    }
  });
};

jQuery.fn.transposeFirstLetter = function(toTransposeTo){
  return this.each(function(){
    var replacementText = jQuery(this).text() + jQuery(toTransposeTo).text().charAt(0);
    jQuery(this).text(replacementText);
  });
};

jQuery.fn.removeFirstLetter = function(){
  return this.each(function(){
    var replacementText = jQuery(this).text().replace(/^./, '');
    jQuery(this).text(replacementText);
  });
};
