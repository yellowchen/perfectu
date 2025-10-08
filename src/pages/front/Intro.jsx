

const Intro = () => {

    
    return (
		<div className='container'>
			<h1 className='title limelight'>Our Story</h1>

			<div
				className='mb-3 p-2 m-auto border-0 row row-cols-lg-2 justify-content-center'
				style={{ maxWidth: "100%" }}
			>
				<div>
					<div
						className='row g-0 mb-3'
						style={{
							background: "#efdebf",
							borderRadius: "0 35% 0 35%",
							border: "1rem double #E47C01",
							overflow: "hidden",
						}}
					>
						<div className='col-md-4 m-auto'>
							<img
								src='https://res.cloudinary.com/da85u8p5e/image/upload/v1759912247/cedar_sra7c4.jpg'
								className='img-fluid'
								alt='...'
								style={{
									minHeight: "250px",
									// boxShadow: "1rem -1rem #E37B00",
									borderRadius: "0 35% 0 35%",
									top: "0",
									left: "0",
								}}
							/>
						</div>
						<div className='col-md-8 m-auto p-3' style={{ height: "200px" }}>
							<div className='card-body'>
								<h4 className='card-title subTitle limelight'>Principle</h4>
								<div className='shape-RB'></div>
								<p className='card-text lh-lg' style={{ textAlign: "justify" }}>
									四時運轉，是為季節；生命即在此周而復始的規律變化裡流逝、滋長。PerfectU結合季節花草、在地花農，把生活中瞬變的獨特記憶轉化為香氛產品，伴你歲月。
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div
						className='row g-0 mb-3'
						style={{
							background: "#efdebf",
							borderRadius: "35% 0 35% 0",
							border: "1rem double #E47C01",
							overflow: "hidden",
						}}
					>
						<div className='col-md-8 m-auto p-3' style={{ height: "200px" }}>
							<div className='card-body'>
								<h4 className='card-title subTitle limelight'>Perfect</h4>
								<div className='shape-RT'></div>
								<p className='card-text lh-lg' style={{ textAlign: "justify" }}>
									PerfectU的堅持手作，傳承古法，細心選作原料，每款皆為純天然香氛，亦不經動物測試，愛惜自己同時為地球出一分力。
								</p>
							</div>
						</div>
						<div className='col-md-4 m-auto d-flex justify-content-end'>
							<img
								src='https://res.cloudinary.com/da85u8p5e/image/upload/v1759912263/lavender_jjblw0.jpg'
								className='img-fluid'
								alt='...'
								style={{
									minHeight: "250px",
									// boxShadow: "-1rem 1rem #E37B00",
									borderRadius: "35% 0 0 0",
									// aspectRatio: "1/1"
								}}
							/>
						</div>
					</div>
				</div>

				<div>
					<div
						className='row g-0 mb-3'
						style={{
							background: "#efdebf",
							borderRadius: "35% 0 35% 0",
							border: "1rem double #E47C01",
							overflow: "hidden",
						}}
					>
						<div className='col-md-4 m-auto'>
							<img
								src='https://res.cloudinary.com/da85u8p5e/image/upload/v1759912258/jerry-wang-02yj-33Wfxw-unsplash_mforjr.jpg'
								className='img-fluid'
								alt='...'
								style={{
									minHeight: "250px",
									// boxShadow: "1rem -1rem #E37B00",
									borderRadius: "0 0 35% 0",
									// aspectRatio: "1/1"
								}}
							/>
						</div>
						<div className='col-md-8 m-auto p-3' style={{ height: "200px" }}>
							<div className='card-body'>
								<h4 className='card-title subTitle limelight'>Present</h4>
								<div className='shape-LB'></div>
								<p className='card-text lh-lg' style={{ textAlign: "justify" }}>
									您可以將PerfectU的每一份作品，作為禮物呈現給你和家人朋友，或獻給自己，視作美好的祝福。
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div
						className='row g-0 mb-3'
						style={{
							background: "#efdebf",
							borderRadius: "0 35% 0 35%",
							border: "1rem double #E47C01",
							overflow: "hidden",
						}}
					>
						<div className='col-md-8 m-auto p-3' style={{ height: "200px" }}>
							<div className='card-body'>
								<h4 className='card-title subTitle limelight'>Pease</h4>
								<div className='shape-LT'></div>
								<p className='card-text lh-lg' style={{ textAlign: "justify" }}>
									透過專屬的香氛，自己決定擁有：好天氣與壞天氣、喜悅與痛苦、冬天與夏天、沮喪與快樂。在這兩極之間，學習如何保持平衡，學到了如何去生活。
								</p>
							</div>
						</div>
						<div className='col-md-4 m-auto'>
							<img
								src='https://res.cloudinary.com/da85u8p5e/image/upload/v1759912270/rose_ukxdqq.jpg'
								className='img-fluid'
								alt='...'
								style={{
									minHeight: "250px",
									// boxShadow: "1rem -1rem #E37B00",
									borderRadius: "0 35% 0 35%",
									// aspectRatio: "1/1"
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro