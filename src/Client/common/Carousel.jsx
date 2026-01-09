import { useState, useEffect } from 'react';
import  Slider  from 'react-slick';

const Carousel = ({children}) => {
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

    const sliderImageSetting = {
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
        const handleResize = () => {
            const width = window.innerWidth;
            console.log(width);
            if (width < 768) setSlidesToShow(1);
            else if (width < 992) setSlidesToShow(2);
            else if (width < 1400) setSlidesToShow(3);
            else setSlidesToShow(4);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Slider
            {...sliderImageSetting}
        >
            {children}
        </Slider>
    )
}

export default Carousel