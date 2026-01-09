
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = ({cartData}) => {
    const { carts } = cartData;
    const wish = useSelector(state => state.wishlists);

    return (
		<div
			className='sticky-top flex-shrink-0 py-1'
			style={{
				backgroundColor: "#eee",
			}}
		>
			<div
				className='container'
				style={{
					backgroundColor: "#eee",
				}}
			>
				<div className=''>
					<nav className='navbar navbar-expand-lg m-0 m-md-3 p-0 '>
						{/* logo */}
						<NavLink
							className='navbar-brand d-block'
							to='/'
						>
							<div className='nav-logo'>
								<img
									src='https://res.cloudinary.com/da85u8p5e/image/upload/v1763018369/perfectU_r0eyla.png'
									alt='nav-logo'
								/>
							</div>
						</NavLink>

						{/* cart */}
						<div
							className='position-absolute text-center cart-icon'
							style={{
								top: "0",
								right: "0",
								transform: "translate(0%, 15%)",
							}}
						>
							<NavLink
								className='nav-link position-relative'
								to='/cart'
								style={{ color: "#309DC1" }}
							>
								<i className='bi bi-bag-fill'></i>
								{carts?.length !== 0 && (
									<span
										className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
										style={{ aspectRatio: "1", verticalAlign: "top", badgePadding: "2rem" }}
									>
										{carts?.length}
									</span>
								)}
							</NavLink>
						</div>

						{/* toggle */}
						<button
							className='navbar-toggler me-0 btn border-0 collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'
							style={{ color: "#309DC1" }}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>

						{/* menu */}
						<div
							className='collapse navbar-collapse'
							id='navbarNav'
							style={{
								transition: ".3s ease-out",
							}}
						>
							<ul className='navbar-nav mt-3 mt-lg-0 pe-1 text-end uoq_mun'>
								<li className='nav-item'>
									<NavLink
										className='nav-link'
										aria-current='page'
										to='/product/perfume'
									>
										<span
											className='nav-list'
											data-bs-toggle='collapse'
											data-bs-target='#navbarNav'
										>
											產品介紹
											<i className='bi bi-box-seam-fill ps-2'></i>
										</span>
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										className='nav-link'
										aria-current='page'
										to='/intro'
									>
										<span
											className='nav-list'
											data-bs-toggle='collapse'
											data-bs-target='#navbarNav'
										>
											品牌故事
											<i className='bi bi-book-fill ps-2'></i>
										</span>
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink
										className='nav-link'
										aria-current='page'
										to='/wishlist'
									>
										<span
											className='nav-list'
											data-bs-toggle='collapse'
											data-bs-target='#navbarNav'
										>
											願望清單
											<i className='bi bi-suit-heart-fill ps-2'></i>
										</span>
									</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Navbar