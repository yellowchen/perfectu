import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WishCard from '../../components/front/Card/WishCard';
import { BackButton } from './../../utils/button/Button';

const Wishlist = () => {
    const navigate = useNavigate();
    const wish = useSelector((state) => state.wishlists);
    console.log("wish: ", wish);

    return (
		<div className='container'>
			<h1 className='title limelight'>My Wishlist</h1>
			{wish.wishlistItems?.length === 0 ? (
				<div className='text-center limelight mt-5'>
					<h4 className='mb-3'>Your wishlist is empty.</h4>
					<Link to='/product'>Continue Shopping</Link>
				</div>
			) : (
				<div className='row justify-content-center'>
					<div className='col-md-6 py-5'>
						{wish.wishlistItems?.map((item) => (
							<WishCard item={item} key={item.id} />
						))}
						{/* <button
							className='btn btn-outline-primary rounded-circle float-end mt-5 noto_serif'
							style={{ width: "60px", height: "60px" }}
							onClick={() => {
								navigate(-1);
							}}
						>
							Back
						</button> */}
                        {/* <BackButton
                            action={() => {
                                navigate(-1);
                            }}
                        /> */}
					</div>
				</div>
			)}
		</div>
	);
}

export default Wishlist