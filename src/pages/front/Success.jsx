import { useEffect, useState, useContext} from "react";
import { useParams, NavLink, useOutletContext } from "react-router-dom";

//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImageSetting } from "../../utils/data-utils";

//API
import { getOrder } from "../../api/front";

import { PaymentContext } from "./../../context/PaymentContext";
import OrderCard from "../../components/front/Card/OrderCard";
import Banner from "./../../components/front/Banner";
import { OrderInformation } from "../../components/front/OrderInformation";

import { thousandFormat } from './../../utils/string-utils';
import { ProgressBar } from "../../utils/data-utils";
import { TextButton } from "../../utils/button/Button";



const Success = () => {
    const { products, getAllProducts } = useOutletContext();
    console.log(products);
    const [orderData, setOrderData] = useState([]);
	const { orderId } = useParams();
    const { payment } = useContext(PaymentContext);
    const { user } = orderData;

	const getOrderData = async () => {
		try {
            const res = await getOrder(orderId);
            console.log(res);
            console.log(res.data.order);
            setOrderData(res.data.order);
		} catch (err) {
			console.log(err);
		}
	};
    useEffect(() => {
        getOrderData();
        getAllProducts();
    }, []);

	console.log(orderId);
    console.log(orderData);
    console.log(new Date(1765082164).getFullYear());
	return (
		<>
			<ProgressBar step={4} />
			<div className='container'>
				<div className='row g-0 mt-5 mx-0 mx-md-5 p-0'>
					<h1 className='mb-4 title'>訂購完成</h1>
					<OrderInformation
						orderData={orderData}
						user={user}
						payment={payment}
					/>
					<div className='my-5'>
						<NavLink
							to='/'
							className='d-flex justify-content-center'
						>
							<TextButton
								className='rounded-4 py-2 w-50'
								style={{}}
								text='返回首頁'
							/>
						</NavLink>
					</div>
				</div>
			</div>
			{/* 商品推薦 */}
			<div className='my-5 py-5 bg-light'>
				<div className='container d-flex justify-content-between mb-5'>
					<h2>其他商品推薦</h2>

					<h4 className=''>
						<NavLink
							to='/product'
							// className='btn btn-outline-dark rounded-0 mt-5'
						>
							<TextButton
								className='rounded-4 px-4 py-1'
								style={{}}
								text='查看更多'
							/>
						</NavLink>
					</h4>
				</div>
				<div className=''>
					<Slider {...sliderImageSetting}>
						{products?.map((item) => (
							<div
								key={item.id}
								className=''
							>
								<NavLink
                                    to={`/product/${item.id}`}
                                >
									<img
										className='mx-auto'
										src={item.imageUrl}
										alt={item.title}
										style={{ width: "280px", aspectRatio: "2/1" }}
									/>
								</NavLink>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default Success;
