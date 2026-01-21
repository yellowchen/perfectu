import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import WishCard from './component/WishCard';

const Wishlist = () => {
    const wish = useSelector((state) => state.wishlists);
    console.log("wish: ", wish);

    return (
		<div className='container'>
			<h1 className='title uoq_mun'>願望清單</h1>
			{wish.wishlistItems?.length === 0 ? (
				<div className='text-center limelight mt-5'>
					<h4 className='my-5'>您的願望清單目前是空的...</h4>
					<NavLink
						to='/product/perfume'
						className='fs-2 fw-bold'
					>
						<i className='bi bi-person-walking fs-1'></i> 來逛逛我們的商品吧
					</NavLink>
				</div>
			) : (
				<div className='row gx-5 row-cols-1 row-cols-lg-2 justify-content-center'>
					{wish.wishlistItems?.map((item) => (
						<div className='col mb-4'>
							<WishCard
								item={item}
								key={item.id}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Wishlist