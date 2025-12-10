export const CouponBanner = ({ imgUrl, position, copy, text }) => {
	return (
		<div className='position-relative mx-0 mx-md-3'>
			<div
				className='banner p-2 p-md-4'
				style={{
					width: "100%",
					height: "350px",
					backgroundImage: imgUrl,
					backgroundSize: "cover",
					backgroundPosition: position,
					opacity: ".9",
				}}
			>
				<div className='border border-3 border-light rounded-1 w-100 h-100'></div>
			</div>
			<div className=''>
				<div
					className='d-none d-lg-block'
					style={{
						overflow: "hidden",
					}}
				>
					<div
						className='position-absolute'
						style={{
							top: "0%",
							right: "0%",
							width: "400px",
							height: "280px",
							backgroundColor: "red",
							clipPath: "polygon(100% 30%, 70% 0%, 40% 0%, 100% 60%)",
							opacity: ".3",
						}}
					>
						<p
							className='position-absolute w-100 h-100'
							style={{
								top: "29%",
								right: "-35%",
								fontSize: "2.5rem",
								transform: "rotate(35deg)",
							}}
						>
							COUPON
						</p>
					</div>
				</div>
				<div className=''>
					<div
						className='position-absolute'
						style={{
							top: "0%",
							width: "100%",
							height: "350px",
							// backdropFilter: "blur(4px)",
						}}
					>
						<div
							className='position-absolute text-center'
							style={{
								width: "100%",
								top: "19%",
								right: "0%",
							}}
						>
							<h1
								style={{
									fontSize: "3.8rem",
									textShadow: "3px 5px #d3a8a5",
								}}
							>
								秋季享優惠
							</h1>
							<div
								className='position-absolute text-center'
								style={{
									width: "100%",
									top: "110%",
									left: "0%",
									fontSize: "2.3rem",
									lineHeight: "1.2",
									letterSpacing: "8px",
								}}
							>
								<p className='fs-1'>
									<i
										className='bi bi-gift fs-1 pe-1 text-danger'
										style={{ verticalAlign: "middle" }}
									></i>
									享15%優惠折扣
								</p>
								<button
									type='button'
									className='btn border border-3 border-light btn-primary py-2 px-4 mt-2 mb-4 text-light fs-3'
									onClick={copy}
								>
									{text}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
