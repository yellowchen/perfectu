//style-utils
export const sliderSetting = {
	slidesToShow: 3,
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
			breakpoint: 1920,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				dots: true,
			},
		},
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
		<div className='w-75 mx-auto limelight' style={{ margin: "2rem 0 6rem" }}>
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
						${step >= 1 ? "btn-secondary text-white" : "text-dark"}
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
						${step >= 2 ? "btn-secondary text-white" : "text-dark"}
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
						${step >= 3 ? "btn-secondary text-white" : "text-dark"}
						`}
					style={btnStyle}
				>
					{step > 3 ? <i className='bi bi-flower2'></i> : "3"}
				</button>

				{/* 進度文字 */}
				<h6
					className={`
                        position-absolute start-0 translate-middle-x
                        ${step >= 1 ? "text-secondary" : "text-dark"}
                    `}
					style={wordStyle}
				>
					Cart
				</h6>
				<h6
					className={`
                        position-absolute start-50 translate-middle-x
                        ${step >= 2 ? "text-secondary" : "text-dark"}
                    `}
					style={wordStyle}
				>
					Filling Info
				</h6>
				<h6
					className={`
                        position-absolute start-100 translate-middle-x
                        ${step >= 3 ? "text-secondary" : "text-dark"}
                    `}
					style={wordStyle}
				>
					Success
				</h6>
			</div>
		</div>
	);
};