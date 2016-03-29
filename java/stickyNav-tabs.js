jQuery(document).ready(function () {

	var navOffset = jQuery("nav").offset().top;
	var scrollPos = jQuery(window).scrollTop();

	jQuery(".navbarPlaceholder").height(jQuery("nav").outerHeight());

	$(window).resize(function(){
  		
  		if (scrollPos < navOffset) {
  			navOffset = jQuery("nav").offset().top;
  		}	

	});

	jQuery(window).scroll(function() {
		
		scrollPos = jQuery(window).scrollTop();

		if (scrollPos >= navOffset) {
			jQuery("nav").addClass("fixedNav");
		} else {
			jQuery("nav").removeClass("fixedNav");
		}

	});
	// ^ stickyNav funtions
	//
	// tab function
	jQuery('.tabs a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');

        jQuery('main' + currentAttrValue).show().siblings().hide();

        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});
