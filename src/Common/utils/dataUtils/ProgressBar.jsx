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
			className='w-50 mx-auto'
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
					{step > 1 ? <i className='bi bi-check-lg'></i> : "1"}
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
					{step > 2 ? <i className='bi bi-check-lg'></i> : "2"}
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
					{step >= 4 ? <i className='bi bi-check-lg'></i> : "3"}
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
