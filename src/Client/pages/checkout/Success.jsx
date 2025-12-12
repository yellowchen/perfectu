import { useEffect, useState, useContext} from "react";
import { useParams, NavLink, useOutletContext } from "react-router-dom";

//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImageSetting } from "./../../common/utils/dataUtils/SliderSetting";

import { OrderInformation } from "./component/OrderInformation";

import { getOrder } from "../../common/api/front";
import { ProgressBar } from "../../common/utils/dataUtils/ProgressBar";
import { PaymentContext } from "../../common/context/PaymentContext";
import { ClickedButton } from "../../common/utils/Button";
import { thousandFormat } from '../../../Common/utils/stringUtils/string-utils';


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
	return (
		<>
			<ProgressBar step={4} />
			<div className='container'>
				<h1 className='title uoq_mun'>訂購完成</h1>
				<div className='row g-0 my-5 mx-0 mx-md-5 p-0'>
					<p className='fs-2 fw-bold text-center text-primary'>
						您的訂購已完成，請等待1~3天的時間<i className='bi bi-person-arms-up fs-1'></i>
					</p>
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
							<ClickedButton
								className='rounded-4 py-2 w-50'
								style={{}}
								content='返回首頁'
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
							<ClickedButton
								className='rounded-4 px-4 py-1'
								style={{}}
								content='查看更多'
							/>
						</NavLink>
					</h4>
				</div>
				<div className=''>
					<Slider {...sliderImageSetting}>
						{products?.map((item) => (
							<div
								key={item.id}
								className='position-relative'
							>
								<NavLink to={`/product/${item.id}`}>
									<img
										className='mx-auto rounded-0'
										src={item.imageUrl}
										alt={item.title}
										style={{
											width: "280px",
											aspectRatio: "3/2",
											clipPath: "polygon(0 0, 50% 0, 100% 25%, 100% 100%, 50% 100%, 0 75%)",
										}}
									/>
									{/* <p
										className='position-absolute uoq_mun fs-5'
										style={{
											bottom: "-11%",
											left: "110px",
											letterSpacing: "10px",
										}}
									>
										{item.title}
									</p> */}
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
