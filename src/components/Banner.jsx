

const Banner = ({imgUrl, position}) => {
    return (
		<div className='position-relative'>
			<div
				className='banner'
				style={{
					width: "100%",
					height: "350px",
					backgroundImage: imgUrl,
					backgroundSize: "cover",
					backgroundPosition: position,
					opacity: ".9",
				}}
			></div>
			{/* <div
				className='navbar-brand d-block position-relative'
				style={{
					width: "50px",
					top: "7%",
					left: "-15%",
					aspectRatio: "1/1",
					overflow: "hidden",
					zIndex: "-1",
				}}
			>
				<img
					src='https://res.cloudinary.com/da85u8p5e/image/upload/v1754450026/logo_gozatp.png'
					alt='logo'
					style={{
						width: "110px",
						height: "auto",
						marginTop: "-11px",
						marginLeft: "-30px",
						objectFit: "cover",
						zIndex: "1",
					}}
				/>
			</div> */}
			<div>
				<div
					className='position-absolute'
					style={{
						top: "0%",
						width: "100%",
						height: "350px",
						backdropFilter: "blur(4px)",
						// border: "2px solid red",
					}}
				>
					<div
						className='play_write position-absolute'
						style={{
                            width: "90%",
							top: "30%",
							left: "10%",
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
						<h3
							className='position-absolute'
							style={{
								// bottom: "30%",
								// left: "14%",
								top: "130%",
								left: "7%",
								fontSize: "1.8rem",
							}}
						>
							your perfect perfume
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner