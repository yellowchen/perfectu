
import { useDispatch } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { thousandFormat } from "./../../utils/ThousandFormat";
import { toggleWishItem } from "../../slice/wishSlice";

const ProductCard = ({ item, wish }) => {
	const { addToCart } = useOutletContext();
	const { id, imageUrl, title, price } = item;
	// console.log("p-card: ", wish);

	const dispatch = useDispatch();
	const toggleWishlist = (wishItem) => {
		dispatch(toggleWishItem(wishItem));
	};

	return (
		<div className='card p-0 border-0' style={{ width: "18rem", background: "#EA9C3F" }}>
			<Link to={`/product/${id}`}>
				<img
					src={imageUrl}
					className='card-img-top position-relative'
					alt={title}
					style={{
						height: "200px",
					}}
				/>
				<div className='card-body card-products'>
					<h5
						className='card-title'
						style={{
							position: "absolute",
							top: "55%",
							color: "#fff",
						}}
					>
						{title}
					</h5>
					<p className='text-end'>NT$ {thousandFormat(price)}</p>
				</div>
			</Link>
			<div className='row justify-content-center gap-3 mb-3'>
				<button
					className='btn col-4'
					style={{ background: "#fff" }}
					onClick={() => {
						toggleWishlist(item);
					}}
				>
					{wish?.wishlistItems?.some((wish) => wish.id === item.id) ? (
						<i
							className='bi bi-suit-heart-fill'
							style={{
								color: "red",
							}}
						></i>
					) : (
						<i
							className='bi bi-suit-heart-fill'
							style={{
								color: "#EA9C3F",
							}}
						></i>
					)}
				</button>
				<button
					className='btn col-4'
					style={{ background: "#fff", color: "#EA9C3F" }}
					onClick={() => {
						addToCart(id);
					}}
				>
					<i className='bi bi-cart-fill'></i>
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
