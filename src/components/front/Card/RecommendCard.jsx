import { NavLink } from "react-router-dom";
import { TextButton } from "../../../utils/button/Button";

export const RecommendCard = ({recommend, slideRef}) => {
	return (
		<div className='my-5 pb-5 container'>
			{recommend
				.filter((item) => item.title === "秋鴛")
				.map((item) => (
					<div
						key={item.id}
						className='recommend'
						ref={slideRef}
					>
						<div className='txt'>
							<h1>
								<small>秋季推薦 - </small>
								{item.title}
							</h1>
							<div className='p-4'>
								<h5 className='lh-lg'>{item.content}</h5>
								<NavLink
									to={`/product/${item.id}`}
									className='btn align-self-end text-light'
								>
									<TextButton
										className='rounded-4 py-2'
										style={{}}
										text={`瞭解更多`}
									/>
								</NavLink>
							</div>
						</div>
						<div className='img'>
							<img
								className='img-fluid'
								src={item.imageUrl}
								alt={item.title}
							/>
						</div>
					</div>
				))}
		</div>
	);
};

