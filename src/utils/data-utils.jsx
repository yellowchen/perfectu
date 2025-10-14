//style-utils
export const sliderSetting = {
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	infinite: true,
	speed: 500,
	easing: "linear",
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	centerMode: true,
	centerPadding: "56px",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
			},
		},
		{
			breakpoint: 430,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
			},
		},
	],
};