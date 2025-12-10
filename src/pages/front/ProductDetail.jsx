import { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
// import axios from "axios";

//Api
import { getProduct } from "../../api/front";

import Tab from "../../components/front/Tab";
// import { AccordionItem } from "../../components/front/AccordionItem";
import { DetailInformation } from "../../components/front/Data/DetailInformation";
import { TextButton } from "../../utils/button/Button";
import { thousandFormat } from "./../../utils/string-utils";


const ProductDetail = () => {
	const [product, setProduct] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
	const navigate = useNavigate();
	const { id } = useParams();
	const { setCartQuantity, cartQuantity, addToCart, setIsLoading } = useOutletContext();
	const { imageUrl, price, title, category, unit, content, origin_price, description } = product;

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
		getProductDetail(id);
	}, [id, setIsLoading]);

	return (
		<div className='container my-5 clearfix'>
			<h1 className='title limelight text-uppercase'>{category}</h1>

			<div className='mx-3 mb-5'>
				<div className='row g-0'>
					<div className='col-md-5'>
						<img
							src={imageUrl}
							className='card-img-top'
							alt={title}
							style={{ maxHeight: "400px", aspectRatio: "1/2" }}
						/>
					</div>
					<div className='col-md-7 p-3 bg-light'>
						<div className='card-body d-flex flex-column'>
							<div className='card-txt'>
								<div className='card-title d-flex justify-content-between align-items-end'>
									<div>
										<h3 className='uoq_mun'>{title}</h3>/ <small>{unit}</small>
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

								<p className='mt-3 lh-lg text-justify noto_serif'>{content}</p>
							</div>
							<div className='card-btn d-flex gap-2 flex-column flex-lg-row my-3'>
								<div className='input-group w-50 mt-2 align-self-end'>
									<button
										className='input-group-text'
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
										className='input-group-text'
										onClick={() => {
											setCartQuantity((prev) => prev + 1);
										}}
									>
										<i className='bi bi-plus-lg'></i>
									</button>
								</div>
								<TextButton
									className={`form-control w-100 mt-2 rounded-4 fw-bolder`}
									action={() => {
										addToCart(id);
									}}
									text={`加入購物車`}
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
				<hr className='my-5' />
				<div className="">
					<h5
						className='text-center'
						style={{
                            fontSize: "18px",
							color: "#309dc1",
							border: "transparent",
						}}
					>
						產品香味
					</h5>
					<p className='mx-lg-5 mt-4 mb-5 bg-light p-3 lh-lg'>{description}</p>
				</div>

				<Tab
					TabData={DetailInformation}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</div>
		</div>
	);
};

export default ProductDetail;
