
import { NavLink } from 'react-router-dom';
import Wave from './Effect/Wave';

const Footer = () => {
    return (
		<div className='flex-shrink-0 position-relative roboto_slab'>
			<Wave />
			<div className='px-4' style={{ backgroundColor: "#309dc1" }}>
				<div className='d-flex flex-column flex-md-row align-items-center justify-content-around justify-content-md-center gap-md-5'>
					<div className='footer-logo'>
						<div className='d-flex flex-column flex-md-row align-items-center gap-0 gap-md-4'>
							<NavLink
								className='col-8'
								to='/'
								style={{
									width: "170px",
									top: "0",
									left: "45%",
									aspectRatio: "1/1",
									overflow: "hidden",
								}}
							>
								<img
									src='https://res.cloudinary.com/da85u8p5e/image/upload/v1754450026/logo_gozatp.png'
									alt='logo'
									style={{
										width: "300px",
										height: "auto",
										marginTop: "-50px",
										marginLeft: "-70px",
										objectFit: "cover",
									}}
								/>
							</NavLink>
							<ul
								className='d-flex flex-row flex-md-column list-unstyled gap-4 gap-md-0 ms-0 ms-md-3'
								style={{ fontSize: "2.5rem" }}
							>
								<li>
									<NavLink to='/' className='text-white'>
										<i className='fab fa-facebook' style={{ color: "#E47C01" }}></i>
									</NavLink>
								</li>
								<li>
									<NavLink to='/' className='text-white'>
										<i
											className='fab fa-instagram'
											style={{
												color: "#E47C01",
											}}
										></i>
									</NavLink>
								</li>
								<li>
									<NavLink to='/' className='text-white'>
										<i className='fab fa-line' style={{ color: "#E47C01" }}></i>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className='footer-contact text-white mx-md-5'>
						<h4 className='mb-4 text-center text-md-start'>Contact Us</h4>
						<ul className='p-0 m-auto' style={{ fontSize: "1.2rem" }}>
							<li>
								<p>
									<i className='bi bi-house pe-3'></i>
									708 台南市安平區永華路二段6號
								</p>
							</li>
							<li>
								<p>
									<i className='bi bi-telephone pe-3'></i>
									(06)299-1111
								</p>
							</li>
							<li>
								<p>
									<i className='bi bi-envelope pe-3'></i>
									PerfectU@mail.perfectu.tw
								</p>
							</li>
						</ul>
					</div>
				</div>
				<hr className='m-0 text-white border-2' />
				<div className='copyright text-white text-center py-2 d-flex flex-column flex-md-row justify-content-center'>
					<small>© Copyright perfectU All right Reserved.</small>
					<small>本網站為技術練習作品，不具任何商業行為</small>
				</div>
			</div>
		</div>
	);
}

export default Footer