;(function () {
    "use strict";
    var $window, $document, $body;

    $window = $(window);
    $document = $(document);
    $body = $("body");
		
	
	
    $document.ready(function () {
		
		new WOW().init();
		
		$('.cover-wrapper').ripples({
			resolution: 512,
			dropRadius: 20,
			perturbance: 0.01,
		});
		
    }); 
	
})(jQuery);
