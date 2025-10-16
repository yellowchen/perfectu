
import { Link, useOutletContext } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeWishItem } from "../../slice/wishSlice";
import { thousandFormat } from "./../../utils/string-utils";


const WishCard = ({item}) => {
    const {id, imageUrl, price, title} = item;
    const {addToCart} = useOutletContext();
    const dispatch = useDispatch();
    const removeFromWishlist = (wishItem) => {
        dispatch(removeWishItem(wishItem));
    }

    return (
		<div className='d-flex align-items-center g-0 mb-4 position-relative bg-light border border-1'>
			<div>
				<Link to={`/product/${id}`}>
					<img
						src={imageUrl}
						className='img-fluid'
						alt={title}
						style={{ aspectRatio: "1/1", maxWidth: "100px" }}
					/>
				</Link>
			</div>
			<div className='p-1'>
				<h5 className='card-title'>
					{title}
					<br />
					<small>NT$ {thousandFormat(price)}</small>
				</h5>

				<div className='p-0 d-flex gap-3'>
					<button
						className='btn p-2 rounded-circle'
						style={{ color: "red" }}
						onClick={() => {
							removeFromWishlist(item);
						}}
					>
						<i className='bi bi-suit-heart-fill'></i>
					</button>
					<button
						className='btn p-2 rounded-circle'
						style={{ color: "#EA9C3F" }}
						onClick={() => {
							addToCart(id);
						}}
					>
						<i className='bi bi-cart-fill'></i>
					</button>
				</div>
			</div>
			<button className='btn p-0 border-0' type='button'>
				<i
					className='bi bi-x-lg position-absolute p-2'
					style={{
						right: ".3rem",
						top: ".2rem",
					}}
					onClick={() => {
						removeFromWishlist(item);
					}}
				></i>
			</button>
		</div>
	);
}

export default WishCard