if (document.querySelector('.slider-main__body')) {
	new Swiper('.slider-main__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 15,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 3,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-main__dotts',
			clickable: true,
		 },
		  // Navigation arrows
  		navigation: {
			nextEl: '.slider-controls__arrow_next',
			prevEl: '.slider-controls__arrow_prew',
 		},
	});
}