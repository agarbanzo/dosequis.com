export function util_check_if_in_view($elements,offset) {
	offset = typeof offset !== 'undefined' ? offset : 0;
    var $animation_elements = $elements;
    var $window = $(window); 
    var window_height = $window.height();
    var calcScrollPos = _.debounce(getPosition, 100);

     $window.on('scroll',calcScrollPos);

     $window.trigger('scroll');

    function getPosition(){
      $.each($animation_elements, function() {
      	 var $element = $(this);
      	 var window_top_position = $window .scrollTop();
         var window_bottom_position = (window_top_position + window_height);
      	 var element_height = $element.outerHeight();
      	 var element_top_position = $element.offset().top;
 		     var element_bottom_position = (element_top_position + element_height);
         var viewport = {
              top : $window.scrollTop(),
              left : $window.scrollLeft()
          };
          viewport.right = viewport.left + $window.width();
          viewport.bottom = viewport.top + $window.height();
            
          var bounds = $element.offset();
          bounds.right = bounds.left + $element.outerWidth();
          bounds.bottom = bounds.top + $element.outerHeight();
   		    if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)){
            //console.log('in')
            window.dispatcher.trigger('onElementInView', [$element]);	 
          }else{
             //console.log('out')
             window.dispatcher.trigger('onElementOutOfView', [$element]);  
          }
      });
    }
}