import { NavLink, useOutletContext } from "react-router-dom";
import { thousandFormat } from '../../../../Common/utils/stringUtils/string-utils';
import { ClickedButton } from '../../../../Common/form/Button';


const ProductCard = ({ item, wish, toggleWishlist }) => {
	const { addToCart } = useOutletContext();
	const { id, imageUrl, title, price, description } = item;

	return (
		<div className='p-0 card-product bg-light'>
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
							color: "#f7ae5b",
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

			<NavLink
				to={`/detail/${id}`}
				style={{}}
				className='border-0'
			>
				<img
					src={imageUrl}
					className='card-img-top position-relative'
					alt={title}
					style={{
						height: "220px",
						borderRadius: "20px 20px 0 0 ",
						clipPath: "polygon(0 0, 50% 0, 100% 25%, 100% 100%, 50% 100%, 0 75%)",
					}}
				/>
			</NavLink>

			<div
				style={
					{
						// color: "#fff",
						// borderRadius: " 0 0 30px 30px",
						// background: "blue",
						// height: "190px",
						// width: "100%",
						// marginLeft: "0%",
						// marginTop: "0%",
					}
				}
			>
				<div className='card-product-content m-3 w-100'>
					<div className='card-text'>
						<div
							className='card-title'
							style={{
								position: "absolute",
								top: "50%",
								left: "7%",
								color: "#309dc1",
							}}
						>
							<h4
								className='text-start'
								style={{
									letterSpacing: ".2rem",
								}}
							>
								{title}
							</h4>
							<p
								className='text-start noto_serif'
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
									width: "86%",
									top: "68%",
									left: "7%",
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
						<ClickedButton
							className='py-1 px-5 rounded-4'
							style={{}}
							action={() => {
								addToCart(id);
							}}
							content={<i className='bi bi-cart-fill'></i>}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
