
import { useDispatch } from "react-redux";
import { NavLink, useOutletContext } from "react-router-dom";
import { thousandFormat } from "./../../utils/string-utils";
import { toggleWishItem } from "../../slice/wishSlice";

const ProductCard = ({ item, wish }) => {
	const { addToCart } = useOutletContext();
	const { id, imageUrl, title, price } = item;

	const dispatch = useDispatch();
	const toggleWishlist = (wishItem) => {
		dispatch(toggleWishItem(wishItem));
	};

	return (
		<div
			className='card p-0 border-0 card-product'
			style={{
				width: "18rem",
				height: "350px",
				borderRadius: "25px",
				boxShadow: "0 5px 15px 0 rgba(0, 0, 0, .4)",
				margin: "3rem 2rem",
				background: "#fff",
			}}
		>
			<button
				className='btn rounded-circle btn-wish'
				style={{
					background: "#fff",
				}}
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
							color: "#309dc1",
						}}
					></i>
				)}
			</button>
			<NavLink to={`/product/${id}`} style={{}}>
				<img
					src={imageUrl}
					className='card-img-top position-relative'
					alt={title}
					style={{
						height: "230px",
						border: "6px solid #309dc1",
						borderRadius: "25px 25px 0 0 ",
					}}
				/>
			</NavLink>
			<div
				style={{
					// color: "#f7ae5b",
					color: "#fff",
					borderRadius: " 0 0 25px 25px",
					background: "#fff",
				}}
			>
				<div className='card-product-content m-3'>
					<h4
						className='card-title uoq_mun'
						style={{
							position: "absolute",
							top: "60%",
							color: "#309dc1",
							letterSpacing: "1rem",
						}}
					>
						{title}
					</h4>
					<p
						className='limelight'
						style={{
							color: "#309dc1",
						}}
					>
						NT$ {thousandFormat(price)}
					</p>
				</div>
				<div className='d-flex justify-content-between px-3'>
					<NavLink
						className='btn rounded-4 px-5'
						style={{ border: "3px solid #309dc1", color: "#309dc1" }}
						to={`/product/${id}`}
					>
						<i className='bi bi-info-circle-fill'></i>
					</NavLink>

					<button
						className='btn rounded-4 px-5'
						style={{ border: "3px solid #309dc1", color: "#309dc1" }}
						onClick={() => {
							addToCart(id);
						}}
					>
						<i className='bi bi-cart-fill'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
