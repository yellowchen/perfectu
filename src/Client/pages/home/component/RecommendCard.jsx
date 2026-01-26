import { NavLink } from "react-router-dom";
import { ClickedButton } from "../../../../Common/form/Button";

export const RecommendCard = ({recommend, slideRef}) => {
	return (
		<div className='my-5 mx-0 border border-primary'>
			{recommend
				?.filter((item) => item.title === "冬火")
				?.map((item) => (
					<div
						key={item.id}
						className='recommend'
						ref={slideRef}
					>
						<div className='txt'>
							<h1 className='text-light'>{item?.title}</h1>
							<div className='p-4 p-lg-4'>
								<p className='lh-lg fs-5 text-justify'>{item?.content}</p>
								<NavLink
									to={`/product/${item.id}`}
									className='btn align-self-end text-light'
								>
									<ClickedButton
										className='rounded-4 me-0 px-4 py-2'
										content={`瞭解更多`}
									/>
								</NavLink>
							</div>
						</div>
						<div className='img'>
							<img
								className='img-fluid'
								src={item?.imageUrl}
								alt={item?.title}
							/>
						</div>
					</div>
				))}
		</div>
	);
};

