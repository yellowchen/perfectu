import { useState, useEffect } from 'react';
import { useOutletContext, useParams} from "react-router-dom";

import SideBar from './component/SideBar';
import ProductCard from "./component/ProductCard";
import { getProductSort } from './../../common/api/front';
import Pagination from "./../../../Common/Pagination";

const Product = () => {
    const { wish, toggleWishlist, setCartQuantity, setIsLoading} = useOutletContext();
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

    return (
		<div className='product container my-5'>
			<div className='mb-4 limelight'>
				<div className='row g-0 tabs-container text-center justify-content-center'>
					<div className='col-12 col-md-3 col-lg-2 tabs-header'>
						<SideBar sort={sort} />
					</div>
					<div className='col-12 col-md-9 col-lg-10'>
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