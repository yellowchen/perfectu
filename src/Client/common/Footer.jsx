
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
		<div className='flex-shrink-0 position-relative mt-5'>
			<div
				className='px-4 mt-5'
				style={{ backgroundColor: "#309dc1" }}
			>
				<div className='container d-flex flex-column flex-xxl-row align-items-center justify-content-between gap-lg-1 py-5'>
					<div className='d-xxl-none d-block footer-logo mx-3 mb-4 px-4'>
						<div className=''>
							<ul
								className='d-flex flex-row list-unstyled gap-5 ms-0'
								style={{ fontSize: "2.5rem" }}
							>
								<li>
									<NavLink
										to='https://github.com/yellowchen/perfectu'
										className='text-white'
										target='_blank'
									>
										<i
											className='fab fa-facebook'
											style={{ color: "#fff" }}
										></i>
									</NavLink>
								</li>
								<li>
									<NavLink
										to='https://github.com/yellowchen/perfectu'
										className='text-white'
										target='_blank'
									>
										<i
											className='fab fa-instagram'
											style={{
												color: "#fff",
											}}
										></i>
									</NavLink>
								</li>
								<li>
									<NavLink
										to='https://github.com/yellowchen/perfectu'
										className='text-white'
										target='_blank'
									>
										<i
											className='fab fa-line'
											style={{ color: "#fff" }}
										></i>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className='footer-contact text-white d-flex flex-column flex-lg-row gap-5'>
						<div
							className='d-none d-xxl-block'
							style={{ width: "285px" }}
						>
							<h4 className='text-center text-lg-start'>關注我們</h4>
							<hr className='border-2 my-4' />
							<ul
								className='p-0 m-auto d-flex justify-content-center justify-content-xl-start  gap-4'
								style={{ fontSize: "2.5rem" }}
							>
								<li>
									<NavLink
										to='https://github.com/yellowchen/perfectu'
										className='text-white'
										target='_blank'
									>
										<i
											className='fab fa-facebook'
											style={{ color: "#fff" }}
										></i>
									</NavLink>
								</li>
								<li>
									<NavLink
										to='https://github.com/yellowchen/perfectu'
										className='text-white'
										target='_blank'
									>
										<i
											className='fab fa-instagram'
											style={{
												color: "#fff",
											}}
										></i>
									</NavLink>
								</li>
								<li>
									<NavLink
										to='https://github.com/yellowchen/perfectu'
										className='text-white'
										target='_blank'
									>
										<i
											className='fab fa-line'
											style={{ color: "#fff" }}
										></i>
									</NavLink>
								</li>
							</ul>
						</div>
						<div style={{ width: "285px" }}>
							<h4 className='text-center text-lg-start'>聯絡我們</h4>
							<hr className='border-2 my-4' />
							<ul
								className='p-0 m-auto d-flex flex-column gap-3'
								style={{ fontSize: "1.2rem" }}
							>
								<li>
									<p className='m-0'>
										<i className='bi bi-house pe-3'></i>
										320 桃園市中壢區潮州街3號
									</p>
								</li>
								<li>
									<a
										href='tel:+886-3-2291111'
										className='text-light d-inline-block'
									>
										<i className='bi bi-telephone pe-3'></i>
										(03) 299-1111
									</a>
								</li>
								<li>
									<a
										href='mailto:PerfectU@mail.perfectu.tw'
										className='text-light d-inline-block'
									>
										<i className='bi bi-envelope pe-3'></i>
										PerfectU@mail.perfectu.tw
									</a>
								</li>
							</ul>
						</div>
						<div style={{ width: "285px" }}>
							<h4 className='text-center text-lg-start'>顧客服務</h4>
							<hr className='border-2 my-4' />
							<ul
								className='p-0 m-auto d-flex flex-column align-items-center align-items-lg-start gap-3'
								style={{ fontSize: "1.2rem" }}
							>
								<li>
									<NavLink
										to='/service/'
										className='text-white'
									>
										常見問題
									</NavLink>
								</li>
							</ul>
						</div>
						<div style={{ width: "285px" }}>
							<h4 className='mb-4 text-center text-lg-start'>後臺管理</h4>
							<hr className='border-2 my-4' />
							<ul
								className='p-0 m-auto d-flex flex-column align-items-center align-items-lg-start gap-3'
								style={{ fontSize: "1.2rem" }}
							>
								<li>
									<NavLink
										to='/login'
										className='text-white'
										target='_blank'
									>
										前往後臺
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='mx-5 my-0 text-white border-2' />
				<div className='copyright text-white text-center py-2 d-flex flex-column flex-md-row justify-content-center'>
					<small>© Copyright perfectU All right Reserved.</small>
					<small>本網站為技術練習作品，不具任何商業行為</small>
				</div>
			</div>
		</div>
	);
}

export default Footer