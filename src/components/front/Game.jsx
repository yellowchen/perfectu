import { NavLink } from "react-router-dom";

const Game = ({article, getArticle, tag, tagId}) => {
	return (
		<div className='game p-3 my-0'>
			<div className='neumorphism limelight'>
				<h3 className=''>Which flower are you today?</h3>
				<button
					type='button'
					className='circle btn'
					onClick={() => {
						getArticle();
					}}
				>
					Click
				</button>
			</div>
			{article && (
				<div>
					<div className='cloud'>
						<div
							className='rounded-circle'
							style={{
								position: "absolute",
								bottom: "38%",
								right: "14%",
								border: ".5rem solid transparent",
								width: "43%",
							}}
						>
							<img
								src={article?.image}
								alt={article?.title}
								className='rounded-circle'
								style={{
									height: "auto",
									maxWidth: "96%",
									aspectRatio: "1 / 1",
								}}
							/>
						</div>

						<div className='text'>
							<p className='limelight'>{article?.title}</p>
							<p>
								<i className='bi bi-flower1 me-1'></i>
								{article?.description}
							</p>
							<div className='m-0 d-flex'>
								<div>
									<i className='bi bi-flower1 me-1'></i>推薦：
								</div>
								{tag.map((item, index) => (
									<div key={index} className='d-flex'>
										<NavLink to={`/product/${tagId}`} className='mx-1'>
											#{item}
										</NavLink>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='cloud'></div>
					<div className='cloud'></div>
					<div className='cloud'></div>
				</div>
			)}
		</div>
	);
};

export default Game;
