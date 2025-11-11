import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
// import  axios  from 'axios';

import ProductCard from "../../components/front/Card/ProductCard";



const Product = () => {
    const [category, setCategory] = useState("all");
    const {products, getProducts} = useOutletContext();
    // const [products, setProducts] = useState([]);

    //category
    const allProducts = products.filter(item => item);
    const seasonProducts = products.filter(item => item.category === "season");
    const natureProducts = products.filter(item => item.category === "nature");

    //wishlist
    const wish = useSelector((state) => state.wishlists);
    useEffect(() => {
		localStorage.setItem("wishlistItems", JSON.stringify(wish.wishlistItems));
	}, [wish]);

    //products info
    // const getProducts = async(page = 1) => {
    //     try {
    //         const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
    //         setProducts(res.data.products);
    //     }catch(err) {
    //         console.log(err);
    //     }
    // }
    useEffect(() => {
        getProducts(1);
    }, []);



    return (
		<div className='product container my-5'>
			<h1 className='title'>Products</h1>
			<div className='d-flex justify-content-center mb-4'>
				<button
					type='button'
					className={`btn-category ${category === "all" && "underline"}`}
					onClick={() => {
						setCategory("all");
					}}
				>
					All
				</button>
				<button
					type='button'
					className={`btn-category ${category === "season" && "underline"}`}
					onClick={() => {
						setCategory("season");
					}}
				>
					SEASON
				</button>
				<button
					type='button'
					className={`btn-category ${category === "nature" && "underline"}`}
					onClick={() => {
						setCategory("nature");
					}}
				>
					Nature
				</button>
			</div>
			<div className='d-flex flex-wrap justify-content-center'>
				{(() => {
					if (category === "season") {
						return seasonProducts
							.sort((a, b) => (a.num > b.num ? -1 : 1))
							.map((item) => <ProductCard item={item} key={item.id} wish={wish} />);
					} else if (category === "nature") {
						return natureProducts
							.sort((a, b) => (a.num > b.num ? -1 : 1))
							.map((item) => <ProductCard item={item} key={item.id} wish={wish} />);
					} else if (category === "all") {
						return allProducts
							.sort((a, b) => (a.num > b.num ? -1 : 1))
							.map((item) => <ProductCard item={item} key={item.id} wish={wish} />);
					}
				})()}
				<i></i>
				<i></i>
			</div>
		</div>
	);
}

export default Product