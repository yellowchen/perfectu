import { ClickedButton } from './../../../../Common/form/Button';

export const CouponTicket = ({copy, text}) => {
    return (
		<div
			className='coupon-ticket my-5 mx-2 mx-lg-5 px-2 px-lg-0 text-center'
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
				<div className='row m-0'>
					<div
						className='coupon-content col-12 col-md-8 py-3 position-relative'
					>
						<div
							className='d-none d-md-block'
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
									className='position-absolute fw-bolder w-100 h-100'
									style={{
										top: "8%",
										right: "-13%",
										fontSize: "2.5rem",
										transform: "rotate(35deg)",
									}}
								>
									COUPON
								</p>
							</div>
						</div>
						<div
							className='py-5 rounded-2'
							style={{
								border: "3px solid #eee",
							}}
						>
							<h1
								style={{
									fontSize: "3rem",
									textShadow: "3px 5px #d3a8a5",
								}}
							>
								年末享優惠
							</h1>
							<p className='fs-1'>
								<i className='bi bi-gift fs-1 pe-3 text-danger'></i>
								15% 折扣
							</p>
							<ClickedButton
								className='d-md-none rounded-5 fs-3 px-4 py-2'
								style={{}}
								action={copy}
								content={text}
							/>
						</div>
					</div>
					<div
						className='coupon-btn d-none d-md-block col-0 col-md-4 align-content-center px-0'
						style={{
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
							<ClickedButton
								className='rounded-5 fs-3 px-4 py-2 mt-2 mb-4'
								style={{}}
								action={copy}
								content={text}
							/>
							<h4>有效期限 2026/12/31</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}