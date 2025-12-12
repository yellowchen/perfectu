
import { Link, useOutletContext } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { removeWishItem } from "../../../common/slice/wishSlice";
import { thousandFormat } from './../../../../Common/utils/stringUtils/string-utils';


const WishCard = ({item}) => {
    const {id, imageUrl, price, title} = item;
    const {addToCart} = useOutletContext();
    const dispatch = useDispatch();
    const removeFromWishlist = (wishItem) => {
        dispatch(removeWishItem(wishItem));
    }

    return (
		<div className='d-flex align-items-center g-0 mb-4 position-relative bg-light border border-1 uoq_mun'>
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
			<div className='px-3'>
				<h5 className='card-title'>
					{title}
					<small> / 50ml</small>
					<br />
					<small>NT$ {thousandFormat(price)}</small>
				</h5>

				<div className='pt-1 d-flex'>
					<button
						className='btn ps-1'
						style={{ color: "#f7ae5b" }}
						onClick={() => {
							removeFromWishlist(item);
						}}
					>
						<i className='bi bi-suit-heart-fill'></i>
					</button>
					<button
						className='btn'
						style={{ color: "#309DC1" }}
						onClick={() => {
							addToCart(id);
						}}
					>
						<i className='bi bi-cart-fill'></i>
					</button>
				</div>
			</div>
			<button
				className='btn p-0 border-0'
				type='button'
			>
				<i
					className='bi bi-x-lg position-absolute p-2'
					style={{
						right: ".3rem",
						top: ".2rem",
						color: "#aaa",
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