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
		$('.purchase').ripples({
			resolution: 512,
			dropRadius: 20,
			perturbance: 0.04,
		});

		
		
		
    }); /*  End of document.ready */
	

	/*==============================================
	  Scroll to top
	 ===============================================*/
	$('.scrollToTop').on('click',(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	}));
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);
