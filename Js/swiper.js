export const startSwiperDownloads = () => {
	// initialize swiper
	new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
};

export const startSwiperOneSlide = () => {
	// initialize swiper
	new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
};
