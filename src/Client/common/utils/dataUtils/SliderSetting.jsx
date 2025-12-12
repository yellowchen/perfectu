//style-utils
const arrowStyle = {
	color: "#309DC1",
	fontSize: "31px",
	display: "block",
	padding: ".6rem",
	borderRadius: "10px",
};

const PrevArrow = ({className, onClick, style}) => {
	return (
		<div
			className={`${className} d-none d-lg-block mx-5`}
			style={{ ...style }}
			onClick={onClick}
		>
			<i
				className='bi bi-chevron-double-left'
				style={arrowStyle}
			></i>
		</div>
	);
};

const NextArrow = ({ className, onClick, style }) => {
	return (
		<div
			className={`${className} d-none d-lg-block mx-5`}
			style={{ ...style }}
			onClick={onClick}
		>
			<i
				className='bi bi-chevron-double-right'
				style={arrowStyle}
			></i>
		</div>
	);
};

export const sliderBannerSetting = {
	className: "center",
	slidesToShow: 1,
	slidesToScroll: 1,
	// dots: true,
	infinite: true,
	speed: 500,
	easing: "linear",
	// autoplay: true,
	autoplaySpeed: 3000,
	centerMode: true,
	centerPadding: "10%",
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1920,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "30%",
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "25%",
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "10%",
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "0%",
			},
		},
	],
};

export const sliderImageSetting = {
	className: "center",
	slidesToShow: 5,
	slidesToScroll: 1,
	// dots: true,
	infinite: true,
	speed: 500,
	easing: "linear",
	autoplay: true,
	autoplaySpeed: 3000,
	// centerMode: true,
	centerPadding: "10%",
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1920,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "25%",
			},
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "25%",
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "10%",
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerPadding: "0%",
			},
		},
	],
};