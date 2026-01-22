import { NavLink } from 'react-router-dom';
import selection from "../../../../Common/data/ProductSelect.json"

const RankCard = ({item, index}) => {
    const { id, category, title, description, imageUrl } = item;
    return (
		<>
			<NavLink
				to={`/detail/${id}`}
				className='rank mx-0 mb-3 text-dark border border-2 border-light rounded-3 position-relative'
				style={{ width: "100%" }}
			>
				<div className='mx-0 mx-md-1 px-1 px-lg-2 py-2 px-lg-3 position-relative'>
					<div
						className='position-absolute'
						style={{ zIndex: "2" }}
					>
						<i
							className='bi bi-bookmark-fill text-primary'
							style={{
								fontSize: "2.5rem",
							}}
						></i>
						<span
							className='fs-4 text-white position-absolute'
							style={{ left: ".8rem", top: "8px" }}
						>
							{index + 1}
						</span>
					</div>
					<div className='rank-image row g-0 align-items-center'>
						<div className='rounded-circle px-1 col-5 col-md-12'>
							<img
								className='w-100 rounded-circle object-fit-cover'
								style={{
									aspectRatio: "1/1",
								}}
								src={imageUrl}
								alt={title}
							/>
						</div>
						<div className='rank-text position-relative col-7 col-md-12'>
							<h5 className='text-center position-absolute w-100 py-2 fw-bolder lh-base'>
								{selection.productCategory
									.filter((item) => item.sort === category)
									.map((item) => (
										<small
                                            key={item.id}
											className='px-2 rounded-4'
											style={{
												color: "#777",
												border: "1px solid currentcolor",
												fontSize: "12px",
											}}
										>
											{item.title}
										</small>
									))}
								<br />
								{title}
							</h5>
							<p className='px-2 text-justify fs-5'>{description}</p>
						</div>
					</div>
				</div>
			</NavLink>
		</>
	);
}

export default RankCard