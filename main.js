$(function(){
	let sliderImages = $('.slide'),
	arrowRight = $('#arrow-right'),
	arrowleft = $('#arrow-left'),
	pagination = $('.page'),
	slideTime =3000,
	current = 0;


	function resetImageSlide(){
		for(let i=0; i<sliderImages.length; i++){
			$(sliderImages[i]).hide();
		}
	}

	function slideLeft(){
		resetImageSlide();
		$(sliderImages[current - 1]).show();
		current--;
	}


	function slideRight(){
		resetImageSlide();
		$(sliderImages[current + 1]).show();
		current++;
	}


/***********************************Left Arrow Click*************************/
	arrowleft.click(function(){
		if (current === 0) {
			current = sliderImages.length;
		}
		slideLeft();
	});


/*******************************Right arrow Click*******************************/
	arrowRight.click(function(){
		if (current === sliderImages.length -1) {
			current = -1;
		}

		slideRight();
	});

/******************************Click on pagination****************************/

    pagination.click(function(){
		if (current === sliderImages.length -1) {
			current = -1;
		}
		slideRight();
	});

    /********************************Start Slide*****************************/

	function startSlide(){
		resetImageSlide();
		$(sliderImages[0]).show();
	}
	


/*************************************Set Timer**********************************/
var timer=null;
function setTimer(){
    timer=setInterval(function () {
    	if (current === sliderImages.length -1) {
			current = -1;
		}
     slideRight();

    },slideTime);
startSlide();
}
setTimer();
});