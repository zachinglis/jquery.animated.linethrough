jQuery.fn.animateStrikethrough = function(speed, callback){
  return this.each(function(){
    if(jQuery(this).find('.strike').length == 0) {
      jQuery(this).wrapInner("<span class='letters-left'></span>");
      jQuery(this).prepend("<span class='strike'></span>");
    }
    
    var line    = jQuery(this);
    var strike  = jQuery(line).find('.strike');
    var left    = jQuery(line).find('.letters-left');

    strikethrough = setInterval(function () {
      jQuery(line).strikeThroughFirstLetter();
      if(jQuery(left).text().length == 0) {
        jQuery(line).addClass('strike');
        jQuery(line).text(jQuery(line).find('.strike').text());
        clearInterval(strikethrough);
        if(typeof callback == "function") callback();
      }
    }, speed);
  });
};

jQuery.fn.strikeThroughFirstLetter = function(){
  return this.each(function(){
    jQuery(this).find('.strike').transposeFirstLetter(jQuery(this).find('.letters-left'));
    jQuery(this).find('.letters-left').removeFirstLetter();
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
