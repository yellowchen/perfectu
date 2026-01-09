import { useEffect, useState, useContext, useRef} from "react";
import { useParams, NavLink, useOutletContext } from "react-router-dom";

//Slider
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { sliderImageSetting } from "./../../../Common/utils/dataUtils/SliderSetting";

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
	const sliderRef = useRef();

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


	useEffect(() => {
        console.log("2")
        console.log(sliderRef.current);
        if(sliderRef.current) {
            sliderRef.current.innerSlider.onWindowResized();
        }

	}, [allProducts.length])

	// console.log(loaded);
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
				{/* <div className='px-0 w-100'>
					<Slider
						{...sliderImageSetting}
						ref={sliderRef}
					>
						{allProducts?.map((item) => (
							<div
								key={item.id}
								className='px-5 w-100'
								style={
									{
										// width: "280px",
										// maxHeight: "180px",
										// aspectRatio: "3/2",
									}
								}
							>
								<NavLink
									to={`/detail/${item.id}`}
									className='border border-danger d-block'
                                    style={{}}
								>
									<img
										className='mx-auto rounded-4 d-block object-fit-cover'
										src={item.imageUrl}
										alt={item.title}
										style={{
											// maxWidth: "100%",
											// height: "auto",
											// width: "280px",
											height: "180px",
											aspectRatio: "3/2",
											// display: loaded ? "none" : "none"
										}}
										// onLoad={() => window.dispatchEvent(new Event("resize"))}
										// onLoad={() => setLoaded(true)}
									/>
								</NavLink>
							</div>
						))}
					</Slider>
				</div> */}
			</div>
		</>
	);
};

export default Success;
