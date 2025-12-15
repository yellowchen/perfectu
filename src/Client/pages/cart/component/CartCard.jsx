import { Link } from "react-router-dom";
import { thousandFormat } from "../../../../Common/utils/stringUtils/string-utils";

const CartCard = ({ item, update, getAllCart, openDeleteMessage, wish, toggleWishlist }) => {
	const { qty, product_id, product } = item;
	return (
		<div
			className='row g-0 align-items-center mb-2 bg-light text-center'
			style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}
		>
			<div className='col-2 p-0'>
				<Link to={`/product/${product_id}`}>
					<img
						src={product.imageUrl}
						className='img-fluid'
						alt={product.title}
						style={{ aspectRatio: "1/1" }}
					/>
				</Link>
			</div>
			<p className='col-3 col-sm-2 my-0'>
				{product.title}
				<small className='text-dark'>/50ml</small>
			</p>
			<p className='col-3 col-sm-2 my-0'>NT$ {thousandFormat(product.price)}</p>
			<div className='col-4 col-lg-3'>
				<div className='input-group px-3'>
					<button
						type='button'
						className='input-group-text p-1 p-sm-2 bg-secondary'
						onClick={() => {
							update(item, qty > 1 ? qty - 1 : 1);
							qty <= 1 && openDeleteMessage(item);
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
						className='input-group-text p-1 p-sm-2 bg-secondary'
						onClick={() => {
							update(item, qty + 1);
						}}
					>
						<i className='bi bi-plus-lg'></i>
					</button>
				</div>
			</div>
			<p className='col-0 col-sm-2 d-none d-sm-block my-0'>NT$ {thousandFormat(product.price * qty)}</p>
			<div className='col-0 col-lg-1 d-none d-lg-block d-flex flex-column'>
				<button
					className='btn btn-wish p-0 w-50 text-dark d-block mx-auto mb-3'
					onClick={() => {
						toggleWishlist(item.product);
					}}
				>
					{wish?.wishlistItems?.some((wish) => wish.id === item.product.id) ? (
						<>
							<i
								className='bi bi-suit-heart-fill pe-1'
								style={{
									color: "#f7ae5b",
								}}
							></i>
						</>
					) : (
						<>
							<i
								className='bi bi-suit-heart-fill pe-1'
								style={{
									color: "#bdbebf",
								}}
							></i>
						</>
					)}
				</button>
				<button
					className='btn p-0 text-dark d-block mx-auto'
					type='button'
				>
					<i
						className='bi bi-trash3-fill pe-1'
						style={{
							right: "0",
							top: "0",
							color: "#bdbebf",
						}}
						onClick={() => {
							openDeleteMessage(item);
						}}
					></i>
				</button>
			</div>
		</div>
	);
};

export default CartCard;
