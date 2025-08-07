import {Routes, Route, Navigate} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCoupons from './pages/admin/AdminCoupons';
import AdminOrders from "./pages/admin/AdminOrders";
import AdminArticles from "./pages/admin/AdminArticles";
import FrontLayout from "./pages/front/FrontLayout";
import Intro from "./pages/front/Intro";
import Home from "./pages/front/Home";
import Product from './pages/front/Product';
import ProductDetail from "./pages/front/ProductDetail";
import Wishlist from './pages/front/Wishlist';
import Cart from './pages/front/Cart';
import Checkout from './pages/front/Checkout';
import Success from "./pages/front/Success";
import NotFound from './pages/front/NotFound';




function App() {
    return (
		<div className='App'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/admin' element={<Dashboard />}>
					<Route path='products' element={<AdminProducts />} />
					<Route path='orders' element={<AdminOrders />} />
					<Route path='coupon' element={<AdminCoupons />} />
                    <Route path="articles" element={<AdminArticles/>}  />
				</Route>
				<Route path='/' element={<FrontLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/intro' element={<Intro />} />
					<Route path='/product' element={<Product />} />
					<Route path='/product/:id' element={<ProductDetail />} />
					<Route path='/wishlist' element={<Wishlist />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
                    <Route path="/success/:orderId" element={<Success/>} />
					<Route path='/notFound' element={<NotFound />} />
					<Route path='*' element={<Navigate to='/NotFound' />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
