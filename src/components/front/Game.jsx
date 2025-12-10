import { NavLink } from "react-router-dom";
import { TextButton } from "../../utils/button/Button";

const Game = ({article, getArticle, tag, tagId}) => {
	return (
		<div className='game p-3 m-0'>
			<div className='d-flex align-items-center justify-content-center flex-wrap gap-3 neumorphism'>
				<h3 className='my-5'>看看你今天的幸運花?</h3>
				{/* <TextButton
					className='rounded-circle'
					style={{ width: "80px", height: "80px"}}
					action={() => {
						getArticle();
					}}
					text={`按下`}
				/> */}
				<i
					className='bi bi-flower1 position-relative text-primary'
					style={{ fontSize: "85px" }}
				>
					<TextButton
						className='rounded-circle position-absolute'
						style={{ width: "65px", height: "65px", top: "31px", left: "10px" }}
						action={() => {
							getArticle();
						}}
						text={`按下`}
					/>
				</i>
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
									<div
										key={index}
										className='d-flex'
									>
										<NavLink
											to={`/product/${tagId}`}
											className='mx-1'
										>
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
