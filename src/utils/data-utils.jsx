//style-utils
const arrowStyle = {
	color: "#309DC1",
	fontSize: "31px",
	display: "block",
	padding: ".6rem",
	borderRadius: "10px",
};

const PrevArrow = (props) => {
	const { className, onClick, style } = props;
	return (
		<div
			className={`${className} d-none d-lg-block`}
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

const NextArrow = (props) => {
    const { className, onClick, style } = props;
    return (
		<div
			className={`${className} d-none d-lg-block`}
			style={{ ...style }}
			onClick={onClick}
		>
			<i
				className='bi bi-chevron-double-right'
				style={arrowStyle}
			></i>
		</div>
	);
}

export const sliderSetting = {
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
	// slidesToShow: 1,
	// slidesToScroll: 1,
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

//Progressbar
export const ProgressBar = ({ step }) => {
	const valueNow = (step - 1) * 50;
	const btnStyle = {
		width: "40px",
		height: "40px",
		border: ".5px solid #eee",
		fontWeight: "900",
	};

	const wordStyle = {
		width: "45%",
		textAlign: "center",
		marginTop: "2rem",
	};

	return (
		<div
			className='w-50 mx-auto limelight'
			style={{ margin: "2rem 0 6rem" }}
		>
			<div className='position-relative'>
				{/* Progress bar line */}
				<div
					className='progress bar-line'
					style={{
						height: "5px",
					}}
				>
					<div
						className={`progress-bar w-${valueNow}`}
						role='progressbar'
						aria-label='Progress'
						aria-valuemin='0'
						aria-valuemax='100'
						style={{
							backgroundColor: "#f7ae5b",
							// transition: "width .3s ease",
						}}
					></div>
				</div>
				{/* 進度1 */}
				<button
					className={`
						position-absolute
						top-0
						start-0
						translate-middle
						rounded-pill
                        btn
                        p-0
						${step >= 1 ? "btn-success text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step > 1 ? <i className='bi bi-flower2'></i> : "1"}
				</button>
				{/* 進度2 */}
				<button
					className={`
						position-absolute
						top-0
						start-50
						translate-middle
						rounded-pill
                        btn
                        p-0
						${step >= 2 ? "btn-success text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step > 2 ? <i className='bi bi-flower2'></i> : "2"}
				</button>
				{/* 進度3 */}
				<button
					className={`
						position-absolute
						top-0
						start-100
						translate-middle
						rounded-pill
                        btn
                        p-0
						${step >= 3 ? "btn-success text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step >= 4 ? <i className='bi bi-flower2'></i> : "3"}
				</button>

				{/* 進度文字 */}
				<h6
					className={`
                        position-absolute start-0 translate-middle-x
                        ${step >= 1 ? "text-success" : "text-dark"}
                    `}
					style={wordStyle}
				>
					購物車
				</h6>
				<h6
					className={`
                        position-absolute start-50 translate-middle-x
                        ${step >= 2 ? "text-success" : "text-dark"}
                    `}
					style={wordStyle}
				>
					填寫收件資訊
				</h6>
				<h6
					className={`
                        position-absolute start-100 translate-middle-x
                        ${step >= 3 ? "text-success" : "text-dark"}
                    `}
					style={wordStyle}
				>
					{`${step >= 4 ? "付款成功" : "付款方式"}`}
				</h6>
			</div>
		</div>
	);
};