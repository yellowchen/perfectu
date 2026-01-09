import { NavLink } from "react-router-dom";

const CarouselCard = ({ item }) => {

	return (
		<div className='px-5 w-100'>
			<NavLink
				to={`/detail/${item.id}`}
				className='d-block'
				style={{}}
			>
				<img
					className='mx-auto rounded-4 object-fit-cover'
					src={item.imageUrl}
					alt={item.title}
					style={{
						height: "180px",
						aspectRatio: "3/2",
					}}
				/>
			</NavLink>
		</div>
	);
};

export default CarouselCard;
