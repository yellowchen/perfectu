import { useState, useRef, useEffect } from "react";
import { useOutletContext, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "bootstrap";

import CartCard from "./component/CartCard";
import { editCart, deleteCart, postCoupon } from "../../common/api/front";
import { ProgressBar } from "../../common/utils/dataUtils/ProgressBar";
import { ClickedButton } from "../../common/utils/Button";

import { DeleteMessage } from "../../../Common/DeleteMessage";
import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import { removeAllSpace, thousandFormat } from "../../../Common/utils/stringUtils/string-utils";


const Cart = () => {
	const { cartData, getAllCart, wish, toggleWishlist, setIsLoading } = useOutletContext();
    const { carts, total, final_total } = cartData;
	const [couponCode, setCouponCode] = useState("");
	const [loadingItems, setLoadingItems] = useState([]);
    const [tempItem, setTempItem] = useState({});
	const dispatch = useDispatch();
    const deleteMessage = useRef(null);

	const updateCartItem = async (item, quantity) => {
		const data = {
			data: {
				product_id: item.product_id,
				qty: quantity,
			},
		};
		setLoadingItems([...loadingItems, item.id]);
		try {
            await editCart(item.id, data);
            getAllCart();
		} catch (err) {
			console.log(err);
			dispatch(createAsyncMessage(err.response.data));
		}
        finally {
            setLoadingItems(loadingItems.filter((loadingObj) => loadingObj.id !== item.id));
        }
	};

	const handleCoupon = async (e) => {
		if (e.key === "Enter" || e.target.id === "setCoupon") {
			if (!couponCode.length) return;
			setIsLoading(true);
			const data = {
				data: {
					code: removeAllSpace(couponCode),
				},
			};
			try {
				const res = await postCoupon(data);
				dispatch(createAsyncMessage(res.data));
				getAllCart();
				setCouponCode("");
			} catch (err) {
				dispatch(createAsyncMessage(err.response.data));
			} finally {
				setIsLoading(false);
			}
		} else if (e.target.id === "resetCoupon") {
			try {
				setCouponCode("");
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const removeFromCart = async (id) => {
		try {
            const res = await deleteCart(id);
			dispatch(createAsyncMessage(res.data));
            closeDeleteMessage();
			getAllCart();
		} catch (err) {
			console.log(err);
		}
	};

    useEffect(() => {
		deleteMessage.current = new Modal("#deleteMessage", {
			backdrop: "static",
		});
		getAllCart();
	}, []);


	const openDeleteMessage = (item) => {
		setTempItem(item);
		deleteMessage.current.show();
	};
	const closeDeleteMessage = () => {
		deleteMessage.current.hide();
	};


	return (
		<div className='container'>
			<DeleteMessage
				closeModal={closeDeleteMessage}
				deleteItem={removeFromCart}
				id={tempItem?.id}
				title={tempItem?.product?.title}
			/>
			<ProgressBar step={1} />
			<h1 className='title uoq_mun'>購物車</h1>
			{carts?.length === 0 ? (
				<div className='text-center limelight mt-5'>
					<h4 className='my-5'>您目前的購物車是空的...</h4>
					<NavLink
						to='/product'
						className='fs-2 fw-bold'
					>
						來逛逛我們的商品吧 <i className='bi bi-person-raised-hand fs-1'></i>
					</NavLink>
				</div>
			) : (
				<div className='d-flex gap-4 flex-column flex-lg-row px-0 px-md-2'>

					<div className='px-0'>
						<div className='row g-0 border-top border-bottom px-2 py-3 mb-0 bg-light text-center fw-bolder'>
							<div className='col-5 col-sm-4 text-start'>商品明細</div>
							<div className='col-3 col-sm-2'>單價</div>
							<div className='col-4 col-lg-3'>數量</div>
							<div className='col-0 col-sm-2 d-none d-sm-block'>小計</div>
							<div className='col-0 col-lg-1'></div>
						</div>
						{carts?.map((item) => (
							<CartCard
								key={item.id}
								item={item}
								remove={removeFromCart}
								update={updateCartItem}
								getAllCart={getAllCart}
								openDeleteMessage={openDeleteMessage}
								wish={wish}
								toggleWishlist={toggleWishlist}
							/>
						))}
					</div>

					<div className='col-12 col-lg-5 d-flex flex-column'>
						<div
							className='px-3 bg-light'
							style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}
						>
							<h3 className='text-center mt-3 mb-5'>結帳金額</h3>
							<div>
								<div className='d-flex justify-content-between my-3'>
									<h5>商品小計</h5>
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
											placeholder='請輸入優惠碼'
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
											使用
										</button>
										<button
											type='button'
											className='btn w-25 fw-bolder'
											id='resetCoupon'
											onClick={handleCoupon}
											style={{
												background: "#ced4da",
												borderRadius: "0 8px 8px 0",
											}}
										>
											取消
										</button>
									</div>
									<div className='d-flex justify-content-between align-items-center my-3'>
										<h5>優惠券：{carts?.[0]?.coupon?.code}</h5>
										<h5 className='text-danger'>NT$ {thousandFormat(final_total - total)}</h5>
									</div>
								</div>
								<hr />
								<div className='d-flex justify-content-between my-3'>
									<h5>商品總計</h5>
									<h5>NT$ {thousandFormat(final_total)}</h5>
								</div>
							</div>
						</div>
						<NavLink
							className='w-50 d-block mx-auto'
							type='button'
							to='/checkout'
						>
							<ClickedButton
								className={`my-5 w-100 rounded-4 fw-bolder`}
								content={`填寫訂購資訊`}
							/>
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
