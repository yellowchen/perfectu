import { useEffect, useState, useContext} from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

import { PaymentContext } from "./FrontLayout";
import OrderCard from "../../components/front/Card/OrderCard";
import Banner from "./../../components/front/Banner";

import { thousandFormat } from './../../utils/string-utils';
import { ProgressBar } from "../../utils/data-utils";


const Success = () => {
    const [orderData, setOrderData] = useState([]);
	const { orderId } = useParams();
    const { payment } = useContext(PaymentContext);
    console.log(payment);

	const getOrder = async () => {
		try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/order/${orderId}`);
            console.log(res);
            // console.log(res.data.order);
            setOrderData(res.data.order);
		} catch (err) {
			console.log(err);
		}
	};
    console.log(orderData);


    useEffect(() => {
        getOrder();
    });

	console.log(orderId);
	return (
		<>
			<ProgressBar step={3} />
			<Banner
				imgUrl='url(https://res.cloudinary.com/da85u8p5e/image/upload/v1759912280/pexels-vlada-karpovich-4452373_p9rs8a.jpg)'
				position='center 40%'
			/>
			<div className='container'>
				<div className='row text-center'>
					<div className='col-md-6 mt-5 p-3'>
						<h3 className='mb-4 limelight'>Checkout Success</h3>
						<p className='mt-5'>Your Order is Completed.</p>
						<NavLink to='/' className='btn btn-outline-dark rounded-0 mt-5'>
							Back To Home
						</NavLink>
					</div>
					<div className='card col-md-6 p-3 mt-5 bg-light rounded-0 uoq_mun'>
						<h3 className='mb-4 text-center limelight'>
							Order
                            <br />
                            <small className="fs-5 text-primary">【{orderData.id}】</small>
						</h3>
						{Object.values(orderData?.products || {}).map((item) => (
							<OrderCard item={item} key={item.id} />
						))}
						<hr />
						<div className='d-flex justify-content-between'>
							<p className='fw-bolder mb-0'>Payment</p>
							<p className='mb-0'>{payment}</p>
						</div>
						<hr />
						<div className='d-flex justify-content-between'>
							<h5 className='fw-bolder'>Total</h5>
							<h5 className='fw-bolder'>NT$ {thousandFormat(orderData.total)}</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Success;
