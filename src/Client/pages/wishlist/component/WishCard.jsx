
import { Link, useOutletContext } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { removeWishItem } from "../../../common/slice/wishSlice";
import { thousandFormat } from './../../../../Common/utils/stringUtils/string-utils';
import { ClickedButton } from './../../../../Common/form/Button';
import selection from "../../../../Common/data/ProductSelect.json";

const WishCard = ({item}) => {
    const {id, imageUrl, price, title, category} = item;
    const {addToCart} = useOutletContext();
    const dispatch = useDispatch();
    const removeFromWishlist = (wishItem) => {
        dispatch(removeWishItem(wishItem));
    }

    return (
		<div
			className='row g-0 align-items-center bg-light rounded-1 card-shadow'
		>
			<div className='col-12 row g-0 align-items-center text-center fw-bolder'>
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
				<div className='col-4 col-md-4 m-0 ps-2 ps-xl-2 fs-6 text-start d-flex flex-column flex-xl-row align-items-start align-items-xl-center'>
					{selection.productCategory
						.filter((item) => item.sort === category)
						.map((item) => (
							<small
								className='px-2 rounded-4'
								style={{
									color: "#777",
									border: "1px solid currentcolor",
									fontSize: "12px",
								}}
							>
								{item.title}
							</small>
						))}
					<p className='my-0 ps-xl-2 fs-6'>
						{title}
						<small
							className='text-dark'
							style={{ fontSize: "12px" }}
						>
							{" "}
							/ 50ml
						</small>
					</p>
				</div>
				<div className='col-3 col-md-3 ps-2 my-0 fs-6 text-start'>
					<p className='my-0'>NT$ {thousandFormat(price)}</p>
				</div>
				<div className='col-3 col-md-3 my-0 d-flex'>
					<ClickedButton
						className='rounded-4 fs-6 px-3 px-md-4'
						action={() => {
							addToCart(id);
						}}
						content={<i className='bi bi-cart-fill'></i>}
					/>
					<button
						className='btn p-0 mx-auto d-block fs-5'
						style={{ color: "#aaa" }}
						onClick={() => {
							removeFromWishlist(item);
						}}
					>
						<i className='bi bi-x-lg'></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default WishCard