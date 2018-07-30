$(document).ready(function(){

		// Language dropdown
		$('#language-switcher').hover(function(){
			$('#language-options').slideDown(0);
		},function(){
			$('#language-options').slideUp(0);
		});
		
		// Currency dropdown
		$('#currency-switcher').hover(function(){
			$('#currency-options').slideDown(0);
		},function(){
			$('#currency-options').slideUp(0);
		});
		
		// Top bar links dropdown
		$('#top-links-switcher').hover(function(){
			$('#top-links-options').slideDown(0);
		},function(){
			$('#top-links-options').slideUp(0);
		});
				
});
