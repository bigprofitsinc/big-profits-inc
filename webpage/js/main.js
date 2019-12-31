jQuery(function($){
	
	$(document).ready(function() {
		
		jQuery('.counter-item').appear(function() {
			jQuery('.counter-number').countTo();
			jQuery(this).addClass('funcionando');
			console.log('funcionando');
		});
		
	}); 
	
	// Some user deleted the header page and the below code resulted in Syntax error
	try {
		var distance = $('.header_lower_row').offset().top;
		
		$(window).scroll(function() {
			
			if($(this).scrollTop() >= distance){
				$('.header_lower_row').addClass('header_shrink'); 
			} 
			 else{
				$('.header_lower_row').removeClass('header_shrink'); 
			} 
		 
		});
	}
	catch(err) {
		//
	}
	
});
