// array of our slides
let sliderImages = document.querySelectorAll('.slide');
// our directional arrows
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
// index of image
let currentImage = 0;


// Clear all images
function reset() {
	for(let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
}

// Starts slider
function startSlide() {
	reset();
	sliderImages[0].style.display = 'block';	
}

// slide left
function slideLeft() {
	reset();
	sliderImages[currentImage - 1].style.display = 'block';
	currentImage--;
}

// slide right
function slideRight() {
	reset();
	if (currentImage == sliderImages.length - 1) {
		currentImage = -1;
	}
	sliderImages[currentImage + 1].style.display = 'block';
	currentImage++;
}


// Left Arrow click
arrowLeft.addEventListener('click', function() {
	if (currentImage == 0) {
		currentImage = sliderImages.length;
	}
	slideLeft();
});

// Right Arrow click
arrowRight.addEventListener('click', function() {
	if (currentImage == sliderImages.length - 1) {
		currentImage = -1;
	}
	slideRight();
});


startSlide();
setInterval(slideRight, 3000);

