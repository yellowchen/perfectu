import { useEffect, useState, useContext, useRef} from "react";
import { useParams, NavLink, useOutletContext } from "react-router-dom";

//Slider
import Carousel from "./../../common/Carousel";
import CarouselCard from "./../../common/CarouselCard";

import { OrderInformation } from "./component/OrderInformation";
import { getOrder } from "../../common/api/front";
import { PaymentContext } from "../../common/context/PaymentContext";
import { ClickedButton } from "../../../Common/form/Button";

import { ProgressBar } from "./../../../Common/utils/dataUtils/ProgressBar";



const Success = () => {
	const { allProducts, getAllProductsList, setIsLoading } = useOutletContext();
	const [orderData, setOrderData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const { orderId } = useParams();
	const { payment } = useContext(PaymentContext);
	const { user } = orderData;

	const getOrderData = async () => {
		try {
			const res = await getOrder(orderId);
			setOrderData(res.data.order);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getOrderData();
	},);


    const resizeSlides = (setSlidesToShow) => {
		return () => {
			const width = window.innerWidth;
			if (width < 768) setSlidesToShow(1);
			else if (width < 992) setSlidesToShow(2);
			else if (width < 1400) setSlidesToShow(3);
			else setSlidesToShow(4);
		};
	};
	return (
		<>
			<ProgressBar step={4} />
			<div className='container'>
				<h1 className='title uoq_mun'>訂購完成</h1>
				<div className='row g-0 my-5 mx-0 mx-md-5 p-0'>
					<p className='fs-2 fw-bold text-center text-primary lh-lg mb-5'>
						感謝您的惠顧<i className='ps-1 bi bi-person-arms-up fs-1'></i>
						<br />
						商品預計在訂單付款後的3個工作天後出貨
					</p>
					<OrderInformation
						orderData={orderData}
						user={user}
						payment={payment}
					/>
					<div className='my-5 px-0 px-xl-5'>
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

			<div className='my-5 py-5 bg-light'>
				<div className='container d-flex justify-content-between mb-5'>
					<h2>其他推薦商品</h2>

					<h4 className=''>
						<NavLink
							to='/product/perfume'
						>
							<ClickedButton
								className='rounded-4 px-4 py-1'
								style={{}}
								content='查看更多'
							/>
						</NavLink>
					</h4>
				</div>
				<div className='px-0 w-100'>
					<Carousel resizeSlides={resizeSlides}>
						{allProducts?.map((item) => (
							<CarouselCard
								item={item}
								key={item.id}
							/>
						))}
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default Success;
