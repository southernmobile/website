//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(400).fadeOut("slow"); 
		$('.teaserTitle ').stop().animate({marginTop :'330px', opacity:"1"}, 1000, 'easeOutQuint');
		$('.shortcat a ').stop().animate({marginTop :'65px', opacity:"1"}, 600, 'easeOutQuint');
});



$(document).ready(function(){

//------------------------------------- Navigation setup ------------------------------------------------//


//--------- Scroll navigation ---------------//

$("#mainNav ul a, .logo a, .ctl a, .skill a").click(function(e){

	
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top;
	


	$('html,body').animate({scrollTop:target_top -70}, 800);
		return false;
	
});


//-------------Highlight the current section in the navigation bar------------//


	var sections = $("section");
		var navigation_links = $("#mainNav a");

		sections.waypoint({
			handler: function(event, direction) {

				var active_section;
				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#mainNav a[href="#' + active_section.attr("id") + '"]');
				navigation_links.removeClass("active");
				active_link.addClass("active");

			},
			offset: '35%'
		});
		
		
//------------------------------------- End navigation setup ------------------------------------------------//

//---------------------------------- Form validation-----------------------------------------//




$('#submit').click(function(){ 

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");
	
	var error = false; 
	var name = $('input#name').val(); 
	if(name == "" || name == " ") { 
		error = true; 
		$('input#name').addClass("errorForm");
	}
	
	
		var msg = $('textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");
			
		}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = $('input#email').val(); 
	if (email == "" || email == " ") { 
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form').serialize(); 
	

	$.ajax({
		type: "POST",
		url: $('.contactForm form').attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
					
					
					
	});

	return false; 
});



//---------------------------------- End form validation-----------------------------------------//


//--------------------------------- Mobile menu --------------------------------//


//--------------------------------- Mobile menu --------------------------------//


var mobileBtn = $('.mobileBtn');
	var nav = $('#mainNav ul');
	var navHeight= nav.height();

$(mobileBtn).click(function(e) {
		e.preventDefault();
		nav.slideToggle();
		$('#mainNav li a').addClass('mobile');


});

$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && nav.is(':hidden')) {
			nav.removeAttr('style');
			$('#mainNav li a').removeClass('mobile');
		}

});



$('#mainNav li a').click(function(){
	if ($(this).hasClass('mobile')) {
        nav.slideToggle();
	}

});


//--------------------------------- End mobile menu --------------------------------//


//--------------------------------- End mobile menu --------------------------------//


//---------------------------------- Portfolio -----------------------------------------//

$(".desc").css({ opacity: 0 });

$('.item a').hover( function(){ 
	$(this).children('.desc ').stop().animate({ opacity: 1 }, 'fast');
}, function(){ 
	$(this).children('.desc ').stop().animate({ opacity: 0 }, 'slow'); 
});

				
$('.item').hover(function () {
    var projDesc = $(this).find('.projDesc');
    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
    $(this).find('.desc').css('padding-top', offset + 1);
});


//---------------------------------- End portfolio-----------------------------------------//

});





