import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

import { DetailInformation } from "./data/DetailInformation";
import { getProduct } from "../../common/api/front";
import { ClickedButton } from "../../common/utils/Button";
import { Tabs } from "../../common/Tabs";
import { thousandFormat } from '../../../Common/utils/stringUtils/string-utils';


const ProductDetail = () => {
	const [product, setProduct] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
	const { id } = useParams();
	const { setCartQuantity, cartQuantity, addToCart, setIsLoading } = useOutletContext();
	const { imageUrl, price, title, unit, content, origin_price, description } = product;

	useEffect(() => {
        const getProductDetail = async (id) => {
			setIsLoading(true);
			try {
                const res = await getProduct(id);
				setProduct(res.data.product);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
        setCartQuantity(1);
		getProductDetail(id);
	}, [id, setIsLoading, setCartQuantity]);

	return (
		<div className='container my-5 clearfix'>
			{/* <h1 className='title limelight text-uppercase'>{category}</h1> */}

			<div className='mx-3 mb-5'>
				<div className='row g-0'>
					<div className='col-md-5'>
						<img
							src={imageUrl}
							className='card-img-top h-100'
							alt={title}
						/>
					</div>
					<div className='col-md-7 px-3 px-sm-4 py-3 bg-light'>
						<div className='card-body d-flex flex-column'>
							<div className='card-txt'>
								<div className='card-title d-flex justify-content-between align-items-end'>
									<div>
										<h3 className=''>{title}</h3>/ <small>{unit}</small>
									</div>
									<div>
										<p className='m-0'>NT$ {thousandFormat(price)}</p>
										<small
											className='text-decoration-line-through'
											style={{ color: "#aaa" }}
										>
											NT$ {thousandFormat(origin_price)}
										</small>
									</div>
								</div>

								<p className='mt-3 lh-lg text-justify fs-5'>{content}</p>
							</div>
							<div className='card-btn d-flex gap-2 flex-column flex-lg-row my-2'>
								<div className='input-group w-50 mt-2 align-self-end'>
									<button
										className='input-group-text bg-secondary'
										onClick={() => {
											setCartQuantity((prev) => (prev === 1 ? 1 : prev - 1));
										}}
									>
										<i className='bi bi-dash-lg'></i>
									</button>
									<input
										className='form-control text-center'
										readOnly
										value={cartQuantity}
									/>
									<button
										className='input-group-text bg-secondary'
										onClick={() => {
											setCartQuantity((prev) => prev + 1);
										}}
									>
										<i className='bi bi-plus-lg'></i>
									</button>
								</div>
								<ClickedButton
									className={`w-100 mt-2 rounded-4 fw-bolder`}
									action={() => {
										addToCart(id);
									}}
									content={`加入購物車`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-0'>
				<h4
					className='text-center text-capitalize noto_serif'
					style={{ wordSpacing: "10px", margin: "6rem 0 2rem" }}
				>
					產品資訊
				</h4>
				<hr className='my-4' />
				<div className=''>
					<h5
						className='text-start mx-lg-5 ps-3'
						style={{
							// fontSize: "18px",
							color: "#309dc1",
							border: "transparent",
						}}
					>
						產品香味
					</h5>
					<p className='mx-lg-5 mt-4 mb-5 bg-light p-3 lh-lg'>{description}</p>
				</div>
				<Tabs
					tabData={DetailInformation}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
                    tabHeaderClass={`text-start`}
					tabContentClass={`m-auto bg-light p-3 text-justify`}
					tabContentStyle={{ lineHeight: 2.5, whiteSpace: "pre-line" }}
				>
					{DetailInformation[activeTab].content}
				</Tabs>
			</div>
		</div>
	);
};

export default ProductDetail;
