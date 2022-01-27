/*global */
/*to add selected class on clicked tab only and remove selected class 
from all rested tabs*/
$(function (){
	'use strict';
	$('.dynamic-tabs li').click(function () {
		$(this).addClass('selected').siblings('li').removeClass('selected');
		/*to select the paragraph of each Tab (each li) */
		$('.tabs-info p').hide();
		$('.' + $(this).data('class')).fadeIn();
	});
	
});

$(function (){
	'use strict';
	$('.upper-right h3').click(function () {
		
		
		
		$(this).addClass('appear-ul').siblings('h3').removeClass('appear-ul');
	
		$('.' + $(this).data('class')).fadeIn();
			
	
	});
	
});

/*Start Scroll to top button */

let button = document.querySelector(".up");

/* How to disappear button at the top of the page and show it before the end of the page   */
window.onscroll = function () {
	/*console.log((this.scrollY));*/
	
	if (this.scrollY >= 2500) {
		button.classList.add("show");
	} else{
		button.classList.remove("show");
	}
};

/* How to click on the button and it pull me up in the page */
button.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});

};


/*End Scroll to top button */