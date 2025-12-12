
import { Link, useOutletContext } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { removeWishItem } from "../../../common/slice/wishSlice";
import { thousandFormat } from './../../../../Common/utils/stringUtils/string-utils';
import { ClickedButton } from './../../../common/utils/Button';

const WishCard = ({item}) => {
    const {id, imageUrl, price, title} = item;
    const {addToCart} = useOutletContext();
    const dispatch = useDispatch();
    const removeFromWishlist = (wishItem) => {
        dispatch(removeWishItem(wishItem));
    }

    return (
		<div
			className='row g-0 align-items-center'
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
			<div className='col-11 row g-0 align-items-center bg-light text-center fw-bolder'>
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
				<p className='col-4 my-0 fs-6'>
					{title}
					<small className='text-dark'> / 50ml</small>
				</p>
				<p className='col-4 my-0 fs-6'>NT$ {thousandFormat(price)}</p>
				<div className='col-2 my-0'>
					<ClickedButton
						className='rounded-4 fs-6 px-md-4'
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