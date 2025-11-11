import { useState } from "react";
import { useOutletContext, Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import CartCard from './../../components/front/Card/CartCard';

import { createAsyncMessage } from "../../slice/messageSlice";
import { ProgressBar } from "../../utils/data-utils";
import { TextButton } from "../../utils/button/Button";
import { removeAllSpace, thousandFormat } from "./../../utils/string-utils";


const Cart = () => {
	const {cartData, getCart} = useOutletContext();
    const [couponCode, setCouponCode] = useState("");
	const {carts, total, final_total} = cartData;
    const [isLoading, setIsLoading] = useState(false);
	const [loadingItems, setLoadingItems] = useState([]);
    const dispatch = useDispatch();

	const updateCartItem = async (item, quantity) => {
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

    //coupon
    const handleCoupon = async(e) => { 
        //要增加判斷是否為 現有的code
        if(e.key === "Enter" || e.target.id === "setCoupon") {
            if(!couponCode.length) return
            setIsLoading(true);
            const data = {
                data: {
                    code: removeAllSpace(couponCode),
                },
            };
            try {
				const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/coupon`, data);
				console.log(res);
                dispatch(createAsyncMessage(res.data));
                getCart();
                setCouponCode("");
			} catch (err) {
				console.log(err.response.data.message);
                dispatch(createAsyncMessage(err.response.data));
			} finally {
                setIsLoading(false);
            }
        }else if(e.target.id === "resetCoupon") {
            try {
                setCouponCode("");
                setIsLoading(false);
            }catch (err) {
                console.log(err);
            }finally {
                setIsLoading(false);
            }
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
			<ProgressBar step={1} />
			<h1 className='title limelight'>Shopping Cart</h1>
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

						<div className='noto_serif'>
							<div className='d-flex justify-content-between my-3'>
								<h5>SubTotal</h5>
								<h5>NT$ {thousandFormat(total)}</h5>
							</div>
							<hr />
							<div className='coupon my-4'>
								<div
									className='w-100 d-flex align-items-center mb-4'
									style={{ height: "40px", borderRadius: "8px" }}
								>
									<input
										id='couponCode'
										type='text'
										name='couponCode'
										placeholder='優惠碼HelloAutumn'
										value={couponCode}
										className='w-50 ps-3'
										onChange={(e) => {
											setCouponCode(e.target.value);
										}}
                                        onKeyDown={handleCoupon}
										style={{
											outline: "none",
											background: "transparent",
											lineHeight: "36px",
											border: "1px solid #aaa",
											borderRadius: "8px 0 0 8px",
										}}
									/>
									<button
										type='button'
										className='btn w-25 fw-bolder'
										id='setCoupon'
										onClick={handleCoupon}
										style={{
											background: "#309DC1",
											borderRadius: "0px",
										}}
									>
										Use
									</button>
									<button
										type='button'
										className='btn w-25 fw-bolder'
										id='resetCoupon'
										onClick={handleCoupon}
										style={{
											background: "#f29e3e",
											borderRadius: "0 8px 8px 0",
										}}
									>
										Cancel
									</button>
								</div>
								<div className='d-flex justify-content-between align-items-center my-3'>
									<h5>優惠券：{carts?.[0]?.coupon?.code}</h5>
									<h5 className='text-danger'>NT$ {thousandFormat(final_total - total)}</h5>
								</div>
							</div>
							<hr />
							<div className='d-flex justify-content-between my-3'>
								<h3>Total</h3>
								<h3>NT$ {thousandFormat(final_total)}</h3>
							</div>
						</div>
						<NavLink className='w-100' type='button' to='/checkout'>
							<TextButton className={`my-5 w-100`} text={`Fill In Order Information`} />
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
