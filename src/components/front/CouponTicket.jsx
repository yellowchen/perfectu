

export const CouponTicket = ({copy, text}) => {
  return (
		<div
			className='container coupon-ticket my-5 mx-auto py-5 px-2 px-lg-0 text-center'
			style={{
				minWidth: "300px",
				aspectRatio: "3/1",
			}}
		>
			<div
				className=''
				style={{
					backgroundImage:
						"url(https://res.cloudinary.com/da85u8p5e/image/upload/v1762313546/autumn_birrao.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			>
				<div
					className='row m-0'
				>
					<div
						className='coupon-content col-8 py-3'
						style={{
							background:
								"radial-gradient(circle at top right, #eee 20px, transparent 0), radial-gradient(circle at bottom right, #eee 20px, transparent 0)",
						}}
					>
						<div
							className='py-5 rounded-2'
							style={{
								border: "3px solid #eee",
								backdropFilter: "blur(2px)",
							}}
						>
							<h1 className='w-75 mx-auto my-0'>COUPON</h1>
							<h2 className='m-0'>
								<i className='bi bi-gift fs-1 pe-3 text-danger' style={{ verticalAlign: "middle" }}></i>15% 折扣
							</h2>
						</div>
					</div>
					<div
						className='coupon-btn col-4 align-content-center px-0'
						style={{
							// borderLeft: "2px dashed #eee",
							background:
								"radial-gradient(circle at top left, #eee 20px, transparent 0), radial-gradient(circle at bottom left, #eee 20px, transparent 0)",
						}}
					>
						<div
							className='noto_serif uoq_mun'
							style={{
								borderLeft: "2px dashed #eee",
								padding: "30px 0",
							}}
						>
							<h2 className='fw-bolder'>HelloAutumn</h2>
							<button
								type='button'
								className='btn border border-light btn-primary py-1 px-3 mt-2 mb-4 text-light'
								onClick={copy}
							>
								{text}
							</button>
							<h4>有效期限 2025/12/31</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}