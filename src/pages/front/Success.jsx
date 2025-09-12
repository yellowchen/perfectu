import { useEffect, useState, useContext} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CheckoutCard from './../../components/Card/CheckoutCard';
import { thousandFormat } from './../../utils/string-utils';
import { PaymentContext } from './FrontLayout';
import Banner from './../../components/Banner';


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
		<div className='container'>
			<Banner imgUrl={`/pexels-vlada-karpovich-4452373.jpg`} />
			<div className='row'>
				<div className='col-md-6 my-5 p-3'>
					<h3 className='mb-4'>Checkout Success</h3>
					<p>Your Payment is Completed</p>
					<Link to='/' className='btn btn-outline-dark rounded-0'>
						Back To Home
					</Link>
				</div>
				<div className='card col-md-6 p-3 my-5 bg-light rounded-0'>
					<h3 className='mb-4'>Order Detail</h3>
					{Object.values(orderData?.products || {}).map((item) => (
						<CheckoutCard item={item} key={item.id} />
					))}
					<hr />
					<div className='d-flex justify-content-between'>
						<p className='fw-bolder'>SubTotal</p>
						<p className=''>NT$ {thousandFormat(orderData.total)}</p>
					</div>
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
	);
};

export default Success;
