export const StoryCard = ({borderRadius_out, direction, imgUrl, name, borderRadius_in, shape, content}) => {
    return (
		<div>
			<div
				className={`row g-0 mb-3 ${direction}`}
				style={{
					background: "#efdebf",
					borderRadius: borderRadius_out,
					border: "1rem double #E47C01",
					overflow: "hidden",
				}}
			>
				<div className='col-md-4 m-auto'>
					<img
						src={imgUrl}
						className='img-fluid'
						alt='cedar'
						style={{
							minHeight: "250px",
							borderRadius: borderRadius_in,
						}}
					/>
				</div>
				<div className='col-md-8 m-0 p-3' style={{ height: "200px" }}>
					<div className='card-body'>
						<h4 className='card-title subTitle limelight'>Principle</h4>
						<div className={shape}></div>
						<p className='card-text lh-lg' style={{ textAlign: "justify" }}>
							{content}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
