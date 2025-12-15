import {Routes, Route, Navigate} from "react-router-dom";
import { AuthProvider } from "./Server/common/context/AuthContext";

import Login from './Server/pages/login/Login';
import Dashboard from "./Server/pages/Dashboard";
import AdminProducts from "./Server/pages/product/AdminProducts";
import AdminCoupons from "./Server/pages/coupon/AdminCoupons";
import AdminOrders from "./Server/pages/order/AdminOrders";
import AdminArticles from "./Server/pages/article/AdminArticles";

import FrontLayout from "./Client/pages/FrontLayout";
import Intro from "./Client/pages/intro/Intro";
import Home from "./Client/pages/home/Home";
import Product from "./Client/pages/product/Product";
import ProductDetail from "./Client/pages/product/ProductDetail";
import Wishlist from "./Client/pages/wishlist/Wishlist";
import Cart from "./Client/pages/cart/Cart";
import Checkout from "./Client/pages/checkout/Checkout";
import Payment from "./Client/pages/checkout/Payment";
import Success from "./Client/pages/checkout/Success";
import Service from "./Client/pages/service/Service";
import NotFound from "./Client/pages/NotFound";


function App() {
    return (
		<div className='App'>
			<AuthProvider>
				<Routes>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/admin'
						element={<Dashboard />}
					>
						<Route
							path='products'
							element={<AdminProducts />}
						/>
						<Route
							path='orders'
							element={<AdminOrders />}
						/>
						<Route
							path='coupon'
							element={<AdminCoupons />}
						/>
						<Route
							path='articles'
							element={<AdminArticles />}
						/>
					</Route>
					<Route
						path='/'
						element={<FrontLayout />}
					>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/intro'
							element={<Intro />}
						/>
						<Route
							path='/product'
							element={<Product />}
						/>
						<Route
							path='/product/:id'
							element={<ProductDetail />}
						/>
						<Route
							path='/wishlist'
							element={<Wishlist />}
						/>
						<Route
							path='/cart'
							element={<Cart />}
						/>
						<Route
							path='/checkout'
							element={<Checkout />}
						/>
						<Route
							path='/payment/:orderId'
							element={<Payment />}
						/>
						<Route
							path='/success/:orderId'
							element={<Success />}
						/>
						<Route
							path='/service'
							element={<Service />}
						/>
						<Route
							path='/notFound'
							element={<NotFound />}
						/>
						<Route
							path='*'
							element={<Navigate to='/NotFound' />}
						/>
					</Route>
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
