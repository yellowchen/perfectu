import { useState } from "react";
import { useOutletContext, Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { thousandFormat } from "./../../utils/string-utils";
import CartCard from './../../components/Card/CartCard';
import { createAsyncMessage } from "../../slice/messageSlice";



const Cart = () => {
	const { cartData, getCart } = useOutletContext();
	const [loadingItems, setLoadingItems] = useState([]);
	const { carts, total } = cartData;
    const dispatch = useDispatch();

	const updateCartItem = async (item, quantity) => {
		// console.log(item);
		// console.log(quantity);
		const data = {
			data: {
				product_id: item.product_id,
				qty: quantity,
			},
		};
        setLoadingItems([...loadingItems, item.id]);
		try {
			const res = await axios.put(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`, data);
			console.log(res);
            dispatch(createAsyncMessage(res.data));
			getCart();
            setLoadingItems(loadingItems.filter((loadingObj) => loadingObj.id !== item.id));
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.response.data));
		}
	};

    const removeFromCart = async(id) => {
        try {
            const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`);
            // console.log("remove: ", res);
            dispatch(createAsyncMessage(res.data))
            getCart();
        }catch(err) {
            console.log(err);
        }
    };

	return (
		<div className='container'>
			<h1 className='title limelight'>My Cart</h1>
			{carts?.length === 0 ? (
				<div className='text-center limelight mt-5'>
					<h4 className='mb-3'>Your Cart is empty</h4>
					<Link to='/product'>Continue Shopping</Link>
				</div>
			) : (
				<div className='row g-0'>
					<div className='col-md-6 m-auto'>
						{carts?.map((item) => (
							<CartCard item={item} remove={removeFromCart} update={updateCartItem} key={item.id} />
						))}
						<div className='d-flex justify-content-between my-3'>
							<h4>Total</h4>
							<h4>NT${thousandFormat(total)}</h4>
						</div>
						<NavLink type='button' className='btn btn-dark py-3 my-5 w-100' to='/checkout'>
							Fill In Order Information
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
