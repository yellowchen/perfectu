
import { useDispatch } from "react-redux";
import { NavLink, useOutletContext } from "react-router-dom";

import { thousandFormat } from "../../../utils/string-utils";
import { toggleWishItem } from "../../../slice/wishSlice";
import { IconButton } from "../../../utils/button/Button";


const ProductCard = ({ item, wish, toggleWishlist }) => {
    console.log(item);
	const { addToCart } = useOutletContext();
	const { id, imageUrl, title, price, description } = item;

	// const dispatch = useDispatch();
	// const toggleWishlist = (wishItem) => {
	// 	dispatch(toggleWishItem(wishItem));
	// };

	return (
		<div
			className='card p-0 border-0 card-product'
			style={{
				// width: "30%",
				minWidth: "330px",
				height: "420px",

				// borderRadius: "5px",
				borderRadius: "20px",

				boxShadow: "0 5px 15px 0 rgba(0, 0, 0, .4)",
				margin: "3rem 2rem",
				// background: "#309dc1",
			}}
		>
			{/* wish */}
			<button
				className='btn rounded-circle btn-wish'
				onClick={() => {
					toggleWishlist(item);
				}}
			>
				{wish?.wishlistItems?.some((wish) => wish.id === item.id) ? (
					<i
						className='bi bi-suit-heart-fill'
						style={{
							color: "#309dc1",
						}}
					></i>
				) : (
					<i
						className='bi bi-suit-heart-fill'
						style={{
							color: "#bdbebf",
						}}
					></i>
				)}
			</button>
			{/* IMG */}
			<NavLink
				to={`/product/${id}`}
				style={{}}
                className="border-0"
			>
				<img
					src={imageUrl}
					className='card-img-top position-relative'
					alt={title}
					style={{
						height: "220px",
						// border: "7px solid #309dc1",
						borderRadius: "20px 20px 0 0 ",
						clipPath: "polygon(0 0, 50% 0, 100% 25%, 100% 100%, 50% 100%, 0 75%)",
					}}
				/>
			</NavLink>
			{/* txt */}
			<div
				style={{
					color: "#fff",
					borderRadius: " 0 0 30px 30px",
					background: "#fff",
					height: "190px",
					width: "96%",
					marginLeft: "2%",
					marginTop: ".5%",
				}}
			>
				<div className='card-product-content m-3 w-100'>
					<div className='card-text'>
						<div
							className='card-title uoq_mun limelight'
							style={{
								position: "absolute",
								top: "50%",
								left: "10%",
								color: "#309dc1",
							}}
						>
							<h4
								style={{
									letterSpacing: "1rem",
								}}
							>
								{title}
							</h4>
							<p
								className='uoq_mun'
								style={{
									color: "#777",
								}}
							>
								NT$ {thousandFormat(price)}
							</p>
						</div>
						<div className='card-description'>
							<p
								className='noto_serif'
								style={{
									position: "absolute",
									width: "80%",
									top: "68%",
									left: "10%",
									color: "#000",
									textAlign: "justify",
								}}
							>
								{description}
							</p>
						</div>
					</div>
					<div
						className='card-btn px-2'
						style={{
							position: "absolute",
							bottom: "5%",
							right: "2%",
						}}
					>
						<IconButton
							style={{ padding: "5px" }}
							action={() => {
								addToCart(id);
							}}
							icon={<i className='bi bi-cart-fill'></i>}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
