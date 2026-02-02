import { NavLink } from 'react-router-dom';

const Banner = ({ imgUrl, position }) => {
	return (
		<div className='position-relative mx-0'>
			<div
				className='banner'
				style={{
					width: "100%",
					height: "400px",
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
						height: "400px",
						backdropFilter: "blur(4px)",
					}}
				>
					<div
						className='play_write position-absolute text-center text-sm-start ps-sm-5'
						style={{
							width: "90%",
							top: "10%",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						<h1
							style={{
								fontSize: "3.2rem",
								textShadow: "3px 5px #f7ebbb",
							}}
						>
							Perfect You
						</h1>
						<div
							className='position-absolute uoq_mun text-center ms-0 text-sm-start ps-sm-5 ms-sm-5'
							style={{
								width: "100%",
								top: "115%",
								left: "0%",
								fontSize: "2.5rem",
								lineHeight: "1.5",
								letterSpacing: "8px",
							}}
						>
							<p style={{ color: "#eee" }}>
								完美你<span className='me-4'></span>的香水
							</p>
						</div>
					</div>
					<div
						className='position-absolute py-3'
						style={{
							width: "100%",
							top: "40%",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						<div
							className='uoq_mun d-flex flex-column mt-4 mt-sm-3 mx-auto gap-0 text-center text-sm-end text-light pe-sm-5 fs-2'
							style={{
								width: "80%",
								textShadow: "0 0 3px #5b947f, 0 0 3px #5b947f, 0 0 3px #5b947f, 0 0 3px #5b947f",
							}}
						>
							<p className='my-1 m-sm-2'>在這裡，找到屬於你的味道</p>
							<p className='my-1 m-sm-2'>找尋"完美你"的香水</p>
						</div>
					</div>
					<NavLink
						type='button'
						className='btn position-absolute banner-link'
						style={{
							bottom: "0%",
							right: "8%",
						}}
						to={`/intro`}
					>
						<p
							className='text-light fs-4 fw-bolder'
							style={{
								letterSpacing: "6px",
							}}
						>
							關於我們<i className='bi bi-chevron-double-right'></i>
						</p>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Banner;
