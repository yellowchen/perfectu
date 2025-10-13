
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({cartData}) => {
    const { carts } = cartData;
    const wish = useSelector(state => state.wishlists);
    
    return (
		<div className='sticky-top flex-shrink-0 ps-4 py-1' style={{ backgroundColor: "#eee" }}>
			<div className='container'>
				<nav className='navbar navbar-expand-lg m-0 m-md-3 p-0'>
					{/* logo */}
					<NavLink
						className='navbar-brand d-block'
						to='/'
						style={{
							width: "50px",
							height: "40px",
						}}
					>
						<img
							className='nav-logo'
							src='https://res.cloudinary.com/da85u8p5e/image/upload/v1754450026/logo_gozatp.png'
							alt='nav-logo'
						/>
					</NavLink>

					{/* cart */}
					<div
						className='position-absolute text-center cart-icon'
						style={{
							top: "0",
							right: "0",
							transform: "translate(0%, 40%)",
						}}
					>
						<NavLink className='nav-link position-relative' to='/cart' style={{ color: "#309DC1" }}>
							<i className='bi bi-bag-fill'></i>
							<span
								className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
								style={{ aspectRatio: "1", verticalAlign: "top", badgePadding: "2rem" }}
							>
								{carts?.length}
							</span>
						</NavLink>
					</div>

					{/* toggle */}
					<button
						className='navbar-toggler me-0 btn border-0'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
						style={{ color: "#309DC1" }}
					>
						<i className='bi bi-list fs-2'></i>
					</button>

					{/* menu */}
					<div
						className='collapse navbar-collapse'
						id='navbarNav'
						style={{
							transition: ".3s ease-out",
						}}
					>
						<ul className='navbar-nav mb-lg-0 text-end pe-3 limelight'>
							<li className='nav-item mt-2 mt-lg-0'>
								<NavLink
									className='nav-link mx-lg-2'
									aria-current='page'
									to='/intro'
									style={{ color: "#309DC1" }}
								>
									<span className='nav-menu' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
										Story
										<i className='bi bi-book-fill ps-2'></i>
									</span>
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link mx-lg-2' to='/product' style={{ color: "#309DC1" }}>
									<span className='nav-menu' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
										Product
										<i className='bi bi-box-seam-fill ps-2'></i>
									</span>
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link mx-lg-2'
									aria-current='page'
									to='/wishlist'
									style={{ color: "#309DC1" }}
								>
									<span className='nav-menu' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
										Wishlist
										{wish?.wishlistItems?.length > 0 ? (
											<i className='bi bi-suit-heart-fill ps-2' style={{ color: "red" }}></i>
										) : (
											<i className='bi bi-suit-heart-fill ps-2'></i>
										)}
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navbar