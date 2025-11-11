import { Link } from "react-router-dom";
import { thousandFormat } from "../../../utils/string-utils";

const CartCard = ({ item, remove, update }) => {
	const { id, qty, product_id, product, total } = item;

	return (
		<div className='row g-0 mb-4 position-relative uoq_mun' key={id}>
			<button className='btn p-0 border-0' type='button'>
				<i
					className='bi bi-x-lg position-absolute pe-3'
					style={{
						right: "0",
						top: "0",
					}}
					onClick={() => {
						remove(id);
					}}
				></i>
			</button>
			<div className='col-4'>
				<Link to={`/product/${product_id}`}>
					<img
						src={product.imageUrl}
						className='img-fluid'
						alt={product.title}
						style={{ aspectRatio: "1/1" }}
					/>
				</Link>
			</div>
			<div className='col-8 p-3'>
				<h5 className='card-title'>{product.title}</h5>
				<p>NT$ {thousandFormat(product.price)}</p>
				<div className='row align-items-center'>
					<div className='col-6'>
						<div className='input-group'>
							<button
								type='button'
								className='input-group-text p-0'
								onClick={() => {
									update(item, qty > 1 ? qty - 1 : 1);
								}}
							>
								<i className='bi bi-dash-lg'></i>
							</button>
							<input
								className='form-control text-center p-0'
								value={item.qty < 1 ? 1 : item.qty}
								onChange={(e) => {
									update(item, e.target.value * 1);
								}}
							/>
							<button
								type='button'
								className='input-group-text p-0'
								onClick={() => {
									update(item, qty + 1);
								}}
							>
								<i className='bi bi-plus-lg'></i>
							</button>
						</div>
					</div>
					<div className='col-6 text-end'>NT${thousandFormat(total)}</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
