
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
		<div className='flex-shrink-0' style={{ backgroundColor: "#dbb292" }}>
			<div className='container'>
				<div className='d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center'>
					<div className='footer-logo'>
						<div className='d-flex flex-column align-items-center'>
							<NavLink
								className='col-8 mb-2'
								to='/'
								style={{
									width: "150px",
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
										width: "220px",
										height: "auto",
										marginTop: "-20px",
										marginLeft: "-35px",
										objectFit: "cover",
									}}
								/>
							</NavLink>
							<ul className='d-flex list-unstyled gap-4' style={{ fontSize: "2.5rem" }}>
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
						<h4 className='mb-3'>Contact Us</h4>
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
									06-299-1111
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
			</div>
			<div className='copyright bg-black text-white text-center py-1 d-flex flex-column flex-md-row justify-content-center'>
				<small>© Copyright perfectU All right Reserved.</small>
				<small className='ps-3'>本網站為技術練習作品，不具任何商業行為</small>
			</div>
		</div>
	);
}

export default Footer