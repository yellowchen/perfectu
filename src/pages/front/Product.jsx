import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/front/Card/ProductCard";


const Product = () => {
    const [activeTab, setActiveTab] = useState(0);
	const category = ["season", "nature"];
    const {products, getAllProducts, wish, toggleWishlist} = useOutletContext();

    useEffect(() => {
        getAllProducts(1);
    }, []);

    return (
		<div className='product container my-5'>
			<h1 className='title limelight'>Products</h1>
			<div className='d-flex justify-content-center mb-4 limelight'>
				<div className='tabs-container text-center'>
					<div className='tabs-header'>
						{category.map((item, index) => (
							<button
                                key={index}
								type='button'
								className={`btn-tab text-uppercase ${index === activeTab && "underline"}`}
								onClick={() => setActiveTab(index)}
							>
								{item}
							</button>
						))}
					</div>
					<div className='tabs-content d-flex flex-wrap justify-content-center'>
						{products
							.filter((item) => item.category === category[activeTab])
							.sort((a, b) => (a.num > b.num ? -1 : 1))
							.map((item) => (
								<ProductCard
									item={item}
									key={item.id}
									wish={wish}
                                    toggleWishlist={toggleWishlist}
								/>
							))}
						<i></i>
						<i></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product