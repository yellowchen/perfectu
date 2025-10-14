

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
						top: "30%",
						left: "13%",
						textShadow: "3px 5px #f7ebbb",
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
						className='navbar-brand d-block position-absolute border border-danger'
						style={{
							width: "50px",
							top: "7%",
							left: "-15%",
							aspectRatio: "1/1",
							overflow: "hidden",
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
							}}
						/>
					</div>
				</div>
				<h3
					className='position-absolute play_write'
					style={{
						bottom: "30%",
						left: "14%",
						fontSize: "1.8rem",
						// textShadow: "3px 5px #f7ebbb",
					}}
				>
					your perfect perfume
				</h3>
			</div>
		</div>
	);
}

export default Banner