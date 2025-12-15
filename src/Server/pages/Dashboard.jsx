import { useEffect, useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

import MessageToast from './../../Common/MessageToast';
import { AuthContext } from '../../Server/common/context/AuthContext';


const Dashboard = () => {
    const navigate = useNavigate();
    const {isAuthenticated, logOut} = useContext(AuthContext);

    const handleLogOut = async () => {
        await logOut();
        navigate("/login");
    }

    useEffect(() => {
        if(!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate])

	return (
		<div className='d-flex flex-column min-vh-100'>
			<MessageToast />
			<nav className='navbar bg-body-tertiary p-0'>
				<div className='container-fluid bg-dark'>
					<p className='navbar-brand text-light my-2'>Backend Admin</p>
					<button className='btn btn-outline-light' type='submit' onClick={handleLogOut}>
						LogOut
					</button>
				</div>
			</nav>
			<div className='bg-light d-flex flex-md-row flex-column'>
				<ul className='list-group list-group-flush d-flex flex-row flex-md-column'>
					<li className='flex-1'>
						<NavLink
							to='products'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-archive'></i>
							<br />
							Products
						</NavLink>
					</li>
					<li className='flex-1'>
						<NavLink
							to='coupon'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-ticket-fill'></i>
							<br />
							Coupons
						</NavLink>
					</li>
					<li className='flex-1'>
						<NavLink
							to='orders'
							className='list-group-item list-group-item-action text-center'
							aria-current='true'
						>
							<i className='bi bi-list-ul'></i>
							<br />
							Orders
						</NavLink>
					</li>
					<li className='flex-1'>
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
				<div className='w-100'>{isAuthenticated && <Outlet />}</div>
			</div>
		</div>
	);
};

export default Dashboard;
