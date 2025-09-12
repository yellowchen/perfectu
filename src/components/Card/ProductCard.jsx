
import { useDispatch } from "react-redux";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import { thousandFormat } from "./../../utils/string-utils";
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
		<div
			className='card p-0 border-0 card-product'
			style={{
				width: "18rem",
				background: "#f4d3ad",
				borderRadius: "30px",
				boxShadow: "0 5px 15px 0 rgba(0, 0, 0, .4)",
			}}
		>
			<Link to={`/product/${id}`}>
				<img
					src={imageUrl}
					className='card-img-top position-relative'
					alt={title}
					style={{
						height: "200px",
						borderRadius: "30px 30px 0 0 ",
					}}
				/>
				<div className='card-body card-product-content'>
					<h4
						className='card-title'
						style={{
							position: "absolute",
							top: "55%",
							color: "#309dc1",
							fontWeight: "700",
							letterSpacing: "1rem",
						}}
					>
						{title}
					</h4>
					<p
						className='text-end'
						style={{
							color: "#309dc1",
							fontWeight: "700",
						}}
					>
						NT$ {thousandFormat(price)}
					</p>
				</div>
			</Link>
			<div className='d-flex justify-content-around gap-3 mb-3 px-4'>
				<NavLink
					className='btn rounded-circle'
					style={{ background: "#fff", color: "#EA9C3F" }}
					to={`/product/${id}`}
				>
					<i className='bi bi-info-circle-fill'></i>
				</NavLink>
				<button
					className='btn rounded-circle'
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
					className='btn rounded-circle'
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
