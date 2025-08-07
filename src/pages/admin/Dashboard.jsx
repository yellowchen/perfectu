import { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import MessageToast from "../../components/MessageToast";



const Dashboard = () => {
    const navigate = useNavigate();

    // 01 取出token
	const token = document.cookie
		.split(";")
		.find((row) => row.startsWith("perfectToken="))
		?.split("=")[1];
    // console.log(token);
	axios.defaults.headers.common["Authorization"] = token;

    //02 登出處理
    const logOut = () => {
        document.cookie = "perfectToken=;";
        navigate("/login");
    }

    useEffect(() => {
		if (!token) {
			navigate("/login");
		}
        //在token、重新導向，兩個變動下要驗證token
		(async () => {
			try {
				await axios.post(`/v2/api/user/check`);
			} catch (err) {
				navigate("/login");
			}
		})();
	}, [navigate, token]);

	return (
		<div className='d-flex flex-column min-vh-100'>
			<MessageToast />
			<nav className='navbar bg-body-tertiary p-0'>
				<div className='container-fluid bg-dark'>
					<p className='navbar-brand text-light my-2'>Backend Admin</p>
					<button className='btn btn-outline-light' type='submit' onClick={logOut}>
						LogOut
					</button>
				</div>
			</nav>
			<div className='bg-light d-flex flex-md-row flex-column'>
				<ul className='list-group list-group-flush d-flex flex-row flex-md-column'>
					<li className='flex-md-grow-0 flex-grow-1'>
						<NavLink
							to='products'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-archive pe-2'></i>
							<br />
							Products
						</NavLink>
					</li>
					<li className='flex-md-grow-0 flex-grow-1'>
						<NavLink
							to='coupon'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-ticket-fill pe-2'></i>
							<br />
							Coupons
						</NavLink>
					</li>
					<li className='flex-md-grow-0 flex-grow-1'>
						<NavLink
							to='orders'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-list-ul pe-2'></i>
							<br />
							Orders
						</NavLink>
					</li>
					<li className='flex-md-grow-0 flex-grow-1'>
						<NavLink
							to='articles'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-file-earmark-text pe-2'></i>
							<br />
							Articles
						</NavLink>
					</li>
				</ul>
				<div className='w-100'>{token && <Outlet />}</div>
			</div>
		</div>
	);
};

export default Dashboard;
