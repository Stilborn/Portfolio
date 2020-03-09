$(function () {
	//Preloader
	var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
   		$spinner.fadeOut();
    	$preloader.delay(350).fadeOut('slow');	
	//Paralax
	if ($(window).width() > 960){ 		
	$window = $(window);		                
	   	$('[data-paralax="background"]').each(function(){
	    var $bgobj = $(this); 		                    
	      	$(window).scroll(function() {       
			var yPos = -($window.scrollTop() / $bgobj.data('paralax-speed')); 				
			var coords = '50% '+ yPos + 'px';				
			$bgobj.css({ backgroundPosition: coords });				
			}); 
	 	});	
    }    
	//Slider 	
	if($('#services-slider').length) {	
		$('.services-slider').slick({
			dots: true,				
			prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
		});	
		$('.services-slider').slick('slickGoTo', 1);
	}
	//Hamburger
	$('.hamburger').click(function () {
		$('.menu-show').toggleClass('d-none order');
		$('.nav__list').toggleClass('menu-showed');
	});
	//ModalWindow
	$('.call').click(function(e){
		e.preventDefault();
		$('.form-call').arcticmodal();
	});
})
