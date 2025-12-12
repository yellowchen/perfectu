import { NavLink } from "react-router-dom";

const Banner = ({ imgUrl, position }) => {
	return (
		<div className='position-relative mx-0 mx-md-3'>
			<div
				className='banner'
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
						backdropFilter: "blur(4px)",
					}}
				>
					<div
						className='play_write position-absolute text-center text-sm-start ps-sm-5'
						style={{
							width: "100%",
							top: "30%",
							left: "0%",
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
								top: "140%",
								left: "0%",
								fontSize: "2.3rem",
								lineHeight: "1.5",
								letterSpacing: "8px",
							}}
						>
							<p style={{ color: "#eee" }}>
								完美你<span className='me-4'></span>的香水
							</p>
						</div>
					</div>
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
					瞭解我們<i className='bi bi-chevron-double-right'></i>
				</p>
			</NavLink>
		</div>
	);
};

export default Banner;
