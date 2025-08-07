import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WishCard from '../../components/Card/WishCard';

const Wishlist = () => {
    const navigate = useNavigate();
    const wish = useSelector((state) => state.wishlists);
    console.log("wish: ", wish);

    return (
		<div className='container my-5'>
			<div className='row justify-content-center'>
				{wish.wishlistItems?.length === 0 ? (
					<div className='text-center mt-5'>
						<h4>Your Wishlist is empty</h4>
						<Link to='/product'>Continue Shopping</Link>
					</div>
				) : (
					<div className='col-md-6 py-5'>
						{wish.wishlistItems?.map((item) => (
							<WishCard item={item} key={item.id} />
						))}
						<button
							className='btn btn-outline-primary rounded-circle float-end'
							style={{ width: "60px", height: "60px" }}
							onClick={() => {
								navigate(-1);
							}}
						>
							Back
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Wishlist