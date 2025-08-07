
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
		<div className='flex-shrink-0' style={{ backgroundColor: "#dbb292" }}>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='footer-logo col-md-5 col-sm-10'>
						<div className='d-flex flex-column align-items-center border border-danger'>
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
							<ul className='d-flex list-unstyled h4' style={{ fontSize: "2.5rem" }}>
								<li>
									<NavLink to='/' className='text-white me-3'>
										<i className='fab fa-facebook' style={{ color: "#E47C01" }}></i>
									</NavLink>
								</li>
								<li>
									<NavLink to='/' className='text-white mx-3'>
										<i
											className='fab fa-instagram'
											style={{
												color: "#E47C01",
											}}
										></i>
									</NavLink>
								</li>
								<li>
									<NavLink to='/' className='text-white ms-3'>
										<i className='fab fa-line' style={{ color: "#E47C01" }}></i>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className='footer-contact text-white col-md-5 col-sm-10 border border-danger'>
						<h4 className='mb-3'>Contact Us</h4>
						<ul className='p-0 m-auto' style={{ fontSize: "1rem" }}>
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