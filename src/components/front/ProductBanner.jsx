import { NavLink } from 'react-router-dom';

export const ProductBanner = ({ imgUrl, position }) => {
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
					opacity: ".8",
				}}
			></div>
			<div>
				<div
					className='position-absolute'
					style={{
						top: "0%",
						width: "100%",
						height: "350px",
						backgroundColor: "#f7e1f6",
						clipPath: "polygon(28% 0, 8% 50%, 28% 100%, 25% 100%, 5% 50%, 25% 0)",
					}}
				></div>
				<div
					className='position-absolute'
					style={{
						top: "0%",
						left: "0%",
						width: "100%",
						height: "350px",
						clipPath: "polygon(25% 0, 100% 0%, 100% 100%, 25% 100%, 5% 50%)",
						backdropFilter: "hue-rotate(80deg) blur(3px)",
						opacity: "0.5",
					}}
				></div>
				<div className=''>
					<div
						className='position-absolute'
						style={{
							top: "0%",
							width: "100%",
							height: "350px",
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
									textShadow: "3px 5px #ede6e7",
									lineHeight: "1.8",
								}}
							>
								純手工製成
								<br />
								好評販售中
							</h1>
						</div>
					</div>
				</div>
			</div>
			<NavLink
				type='button'
				className='btn position-absolute'
				style={{
					bottom: "0%",
					right: "8%",
				}}
				to={`/product`}
			>
				<p
					className='text-light fs-4'
					style={{
						letterSpacing: "6px",
					}}
				>
					前往購買<i className='bi bi-chevron-double-right'></i>
				</p>
			</NavLink>
		</div>
	);
};
