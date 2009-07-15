jQuery(document).ready(function () {

  setInterval("strikeLastLetter()", 40);
  
  // Debug code
  jQuery('#debug').text("Javascript loaded");
});

function strikeLastLetter() {
  jQuery('#line').animateStrikethrough(40, 40);
}

jQuery.fn.animateStrikethrough = function(speed, callback){
  return this.each(function(){
    if($(this).find('.strike').length == 0) {
      jQuery(this).wrapInner("<span class='letters-left'></span>");
      jQuery(this).prepend("<span class='strike'></span>");
    }
    
    var strike  = jQuery(this).find('.strike');
    var left    = jQuery(this).find('.letters-left');
    // alert('strike = ' + $(this).find('.letters-left').text())
    
    jQuery(strike).transposeFirstLetter(left);
    jQuery(left).removeFirstLetter();
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
