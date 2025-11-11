import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "../../components/front/Navbar";
import Footer from "../../components/front/Footer";
import MessageToast from "../../components/share/MessageToast";

import { createAsyncMessage } from "../../slice/messageSlice";
import Loading from "../../components/share/Loading";


export const PaymentContext = createContext();

const FrontLayout = () => {
	const [cartData, setCartData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(1);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    //付款方式
	const [payment, setPayment] = useState("");
	const paymentValue = {
		payment,
		setPayment,
	};

    //cart
	const getCart = async () => {
        setIsLoading(true);
		try {
			const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`);
			setCartData(res.data.data);
            setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const addToCart = async (id) => {
		const data = {
			data: {
				product_id: id,
				qty: cartQuantity,
			},
		};
		try {
			const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`, data);
            dispatch(createAsyncMessage(res.data));
			getCart();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.response.data));
		}
	};

	useEffect(() => {
		getCart();
	}, []);

    //getProducts
    const getProducts = async (page = 1) => {
		try {
			const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
			setProducts(res.data.products);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<PaymentContext.Provider value={paymentValue}>
			<Loading isLoading={isLoading} />
			<div className='d-flex flex-column min-vh-100'>
				<Navbar cartData={cartData} />
				<MessageToast />
				<main className='flex-grow-1 flex-shrink-0'>
					<Outlet context={{ addToCart, setCartQuantity, cartQuantity, cartData, getCart, setIsLoading, isLoading, products, setProducts, getProducts }} />
				</main>
				<Footer />
			</div>
		</PaymentContext.Provider>
	);
};

export default FrontLayout;
