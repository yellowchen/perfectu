

const Banner = ({imgUrl}) => {
    return (
		<div className='position-relative'>
			<img
				className='banner'
				src={imgUrl}
				alt='cover'
				style={{
					width: "100%",
					height: "350px",
					opacity: "0.8",
				}}
			/>
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
				<h1
					className='playWrite position-absolute'
					style={{
						top: "30%",
						left: "10%",
						fontSize: "3.2rem",
						textShadow: "3px 5px #f7ebbb",
					}}
				>
					Perfect You
					<div
						className='navbar-brand d-block position-absolute'
						to='/'
						style={{
							width: "50px",
							top: "7%",
							left: "-16%",
							aspectRatio: "1/1",
							overflow: "hidden",
							// border: "2px solid red"
						}}
					>
						<img
							src='https://res.cloudinary.com/da85u8p5e/image/upload/v1754450026/logo_gozatp.png'
							alt='logo'
							style={{
								width: "110px",
								height: "auto",
								marginTop: "-11px",
								marginLeft: "-32px",
								objectFit: "cover",
							}}
						/>
					</div>
				</h1>
				<h3
					className='position-absolute playWrite'
					style={{
						bottom: "30%",
						left: "15%",
						fontSize: "2rem",
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