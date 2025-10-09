import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import  axios  from 'axios';
import ProductCard from '../../components/Card/ProductCard';


const Product = () => {
    const [products, setProducts] = useState([]);
    const wish = useSelector((state) => state.wishlists);
    const getProducts = async(page = 1) => {
        try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
            setProducts(res.data.products);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProducts(1);
    }, [])

    useEffect(() => {
		localStorage.setItem("wishlistItems", JSON.stringify(wish.wishlistItems));
	}, [wish]);



    return (
		<div className='container my-5'>
			<h1 className='title limelight'>Products</h1>
			<div className='d-flex flex-wrap justify-content-center gap-5'>
				{products
					.sort((a, b) => (a.num > b.num ? -1 : 1))
					.map((item) => (
						<ProductCard item={item} key={item.id} wish={wish} />
					))}
			</div>
		</div>
	);
}

export default Product