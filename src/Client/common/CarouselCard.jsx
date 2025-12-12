import { NavLink } from 'react-router-dom';
import { thousandFormat } from '../../../utils/string-utils';

const CarouselCard = ({id, img, title, price}) => {
    return (
		<>
			<NavLink
				to={`/product/${id}`}
				className='d-flex flex-column align-items-center gap-3 uoq_mun'
				style={{ padding: "1.5vw" }}
			>
				<img className='rounded-2' src={img} alt={title} style={{ maxWidth: "100%", aspectRatio: "3/2" }} />
				<div
					className='d-flex flex-column align-items-center'
					style={{ maxWidth: "100%", aspectRatio: "3/2", color: "#f29e3e" }}
				>
					<p className='fs-4'>{title}</p>
					<hr
						style={{ width: "25%", color: "black", borderWidth: "1px", borderColor: "black" }}
						className='pb-2'
					/>
					<small className='fs-6'>NT$ {thousandFormat(price)}</small>
				</div>
			</NavLink>
		</>
	);
}

export default CarouselCard