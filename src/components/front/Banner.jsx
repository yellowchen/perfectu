

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
								top: "130%",
								left: "10%",
								fontSize: "1.8rem",
                                lineHeight: "1.5",
                                textIndent: "-2rem",
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