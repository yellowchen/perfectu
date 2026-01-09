
import { Link, useOutletContext } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { removeWishItem } from "../../../common/slice/wishSlice";
import { thousandFormat } from './../../../../Common/utils/stringUtils/string-utils';
import { ClickedButton } from './../../../../Common/form/Button';

const WishCard = ({item}) => {
    const {id, imageUrl, price, title} = item;
    const {addToCart} = useOutletContext();
    const dispatch = useDispatch();
    const removeFromWishlist = (wishItem) => {
        dispatch(removeWishItem(wishItem));
    }

    return (
		<div
			className='row g-0 align-items-center bg-light rounded-3'
			style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}
		>
			<div className='col-1'>
				<button
					className='btn fs-5 p-0 mx-auto d-block'
					style={{ color: "#f7ae5b" }}
					onClick={() => {
						removeFromWishlist(item);
					}}
				>
					<i className='bi bi-suit-heart-fill'></i>
				</button>
			</div>
			<div className='col-11 row g-0 align-items-center text-center fw-bolder'>
				<div className='col-2 p-0'>
					<Link to={`/product/${id}`}>
						<img
							src={imageUrl}
							className='img-fluid'
							alt={title}
							style={{ aspectRatio: "1/1" }}
						/>
					</Link>
				</div>
				<div className='col-4 m-0 fs-6'>
					<p className='my-0'>
						{title}
						<small className='text-dark'> / 50ml</small>
					</p>
				</div>
				<div className='col-4 col-md-3 my-0 fs-6'>
					<p className='my-0'>NT$ {thousandFormat(price)}</p>
				</div>
				<div className='col-2 col-md-3 my-0'>
					<ClickedButton
						className='rounded-4 fs-6 px-md-4 px-xxl-5'
						action={() => {
							addToCart(id);
						}}
						content={<i className='bi bi-cart-fill'></i>}
					/>
				</div>
			</div>
		</div>
	);
}

export default WishCard