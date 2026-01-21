import { useState, useEffect } from 'react';
import  Slider  from 'react-slick';

const Carousel = ({resizeSlides, children}) => {
    const [slidesToShow, setSlidesToShow] = useState(1);

    const arrowStyle = {
		color: "#309DC1",
		fontSize: "31px",
		display: "block",
		padding: ".6rem",
		borderRadius: "10px",
	};

	const PrevArrow = ({ className, onClick, style }) => {
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

    const sliderSetting = {
        className: "center",
        slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        easing: "linear",
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: "10%",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

    };

    useEffect(() => {
		const handleResize = resizeSlides(setSlidesToShow);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [resizeSlides]);

    return (
        <Slider
            {...sliderSetting}
        >
            {children}
        </Slider>
    )
}

export default Carousel



