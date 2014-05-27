/*!
    tap / double tap special event for jQuery
    v 1.0.0
    (c) 2014 Yair Even Or <http://dropthebit.com>
    MIT-style license.
*/

(function($){
	"use strict";

	var tapTimer,
		wait = 250; // ms

	$.event.special.tap = {
	    setup: function(data, namespaces) {
	        var elem = this,
	            $elem = $(elem);
	        $elem.bind('touchend.tap', $.event.special.tap.handler);  // touchend
	    },

	    teardown: function(namespaces) {
	        var elem = this,
	            $elem = $(elem);
	        $elem.unbind('touchend.tap');
	    },

	    handler: function(event){
	        var elem 	  = event.target,
	            $elem 	  = $(elem),
	            lastTouch = $elem.data('lastTouch') || 0,
	            now 	  = new Date().getTime(),
				delta 	  = now - lastTouch,
				args      = [].slice.call( arguments, 1 ); // clone arguments array, remove original event from cloned array

	        if(delta > 20 && delta < wait){
	        	clearTimeout(tapTimer);
	            return $elem.data('lastTouch', 0).trigger('doubleTap');
	        }
	        else
	            $elem.data('lastTouch', now);

	        // if double tapping never happened, fire single tap
	        tapTimer = setTimeout(function(){
	        	$elem.trigger('tap');
	        	clearTimeout(tapTimer);
	        }, wait);
	    }
	};
})(jQuery);