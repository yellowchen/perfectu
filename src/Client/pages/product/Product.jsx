import { useState, useEffect } from 'react';
import { useOutletContext, useParams, NavLink } from "react-router-dom";
import ProductCard from "./component/ProductCard";
import Pagination from './../../../Common/Pagination';
import selection from "../../../Common/data/ProductSelect.json";

import { getProductSort } from './../../common/api/front';


const Product = () => {
    const { wish, toggleWishlist, setCartQuantity, setIsLoading } = useOutletContext();
    const [pagination, setPagination] = useState({});
    const [productSort, setProductSort] = useState([]);
    const { sort } = useParams();

    const getProductCategory = async (page = 1) => {
		setIsLoading(true);
		try {
			const res = await getProductSort(page, sort);
			setProductSort(res.data.products);
			setPagination(res.data.pagination);
			setCartQuantity(1);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

    useEffect(() => {
		getProductCategory();
	}, [sort]);

    // console.log("products: ", products);

    return (
		<div className='product container my-5'>
			{/* <h1 className='title uoq_mun'>產品介紹</h1> */}
			<div className='mb-4 limelight'>
				<div className='row g-0 tabs-container text-center'>
					<div className='col-12 col-md-2 tabs-header'>
						<h4
							className='fw-bolder py-3'
							style={{ borderBottom: "1px solid #ccc", letterSpacing: "2px" }}
						>
							產品列表
						</h4>
						{selection.productCategory.map((item) => (
							<NavLink
								key={item.id}
								to={`/product/${item.sort}`}
								className={`product-tab hover-text-btn fw-bolder mb-3 mx-2 mx-md-0 fs-4 ${
									item.sort === sort && "underline"
								}`}
							>
								{item.title}
							</NavLink>
						))}
					</div>
					<div className='col-12 col-md-10 '>
						<div className='tabs-content d-flex flex-wrap justify-content-center'>
							{productSort
								.sort((a, b) => (a.num > b.num ? -1 : 1))
								?.map((item) => (
									<ProductCard
										item={item}
										key={item.id}
										wish={wish}
										toggleWishlist={toggleWishlist}
									/>
								))}
							<i></i>
							<i></i>
							<i></i>
						</div>
						<Pagination
							changePage={getProductCategory}
							pagination={pagination}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product