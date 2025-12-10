import { useState, useEffect } from "react";
// import axios from "axios";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { PaymentProvider } from "../../context/PaymentContext";
import Navbar from "../../components/front/Navbar";
import Footer from "../../components/front/Footer";
import MessageToast from "../../components/share/MessageToast";
import {toggleWishItem} from "../../slice/wishSlice";

import { getCart, postCart, getProducts } from "../../api/front";
import { createAsyncMessage } from "../../slice/messageSlice";
import Loading from "../../components/share/Loading";


// export const PaymentContext = createContext();

const FrontLayout = () => {
	const [cartData, setCartData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(1);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    //getCart
	const getAllCart = async () => {
		try {
			const res = await getCart();
			setCartData(res.data.data);
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
            const res = await postCart(data)
            dispatch(createAsyncMessage(res.data));
			getAllCart();
		} catch (err) {
            dispatch(createAsyncMessage(err.response.data));
		}
	};

	useEffect(() => {
		getAllCart();
	}, []);

    //getProducts
    const getAllProducts = async (page = 1) => {
        setIsLoading(true);
		try {
            const res = await getProducts(page);
			setProducts(res.data.products);
		} catch (err) {
			console.log(err);
		} finally {
            setIsLoading(false);
        }
	};

    //getWish
    const wish = useSelector((state) => state.wishlists);
    useEffect(() => {
		localStorage.setItem("wishlistItems", JSON.stringify(wish.wishlistItems));
	}, [wish]);

    const toggleWishlist = (wishItem) => {
        dispatch(toggleWishItem(wishItem));
    };

	return (
		<PaymentProvider>
			<Loading isLoading={isLoading} />
			<div className='d-flex flex-column min-vh-100'>
				<Navbar cartData={cartData} />
				<MessageToast />
				<main className='flex-grow-1 flex-shrink-0'>
					<Outlet
                        context={{
                            addToCart,
                            setCartQuantity,
                            cartQuantity,
                            cartData,
                            getAllCart,
                            setIsLoading,
                            isLoading,
                            products,
                            setProducts,
                            getAllProducts,
                            wish,
                            toggleWishlist
                        }} />
				</main>
				<Footer />
			</div>
		</PaymentProvider>
	);
};

export default FrontLayout;
