import { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { thousandFormat } from './../../utils/string-utils';
import { AccordionItem } from "../../components/AccordionItem";
import { DetailInformation } from "../../components/Data/DetailInformation";
import { TextButton, BackButton } from "../../utils/button/Button";


const ProductDetail = () => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();
	const { setCartQuantity, cartQuantity, addToCart, setIsLoading } = useOutletContext();
	const { imageUrl, price, title, category, unit, content, origin_price } = product;

	useEffect(() => {
        const getProduct = async (id) => {
			setIsLoading(true);
			try {
				const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`);
				setProduct(res.data.product);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		getProduct(id);
	}, [id, setIsLoading]);

	return (
		<div className='container my-5 clearfix'>
			<h1 className='title uoq_mun text-uppercase'>{category}</h1>

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
										<small className='text-decoration-line-through' style={{ color: "#aaa" }}>
											NT$ {thousandFormat(origin_price)}
										</small>
									</div>
								</div>

								<p className='mt-3 lh-lg text-justify'>{content}</p>
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
									<input className='form-control text-center' readOnly value={cartQuantity} />
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
									className={`form-control w-100 mt-2`}
									action={() => {
										addToCart(id);
									}}
									text={`Add To Cart`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-2 mx-lg-5'>
				<h4
					className='text-center text-capitalize text-wrao'
					style={{ wordSpacing: "10px", margin: "6rem 0 2rem" }}
				>
					Product Information
				</h4>
				<div className='accordion px-2 mx-0 mx-lg-5 lxgw_wenkai' id='accordionPanel'>
					{DetailInformation.map((item) => (
						<AccordionItem key={item.id} id={item.id} title={item.title} content={item.content} />
					))}
				</div>
			</div>
			<BackButton
				action={() => {
					navigate(-1);
				}}
			/>
		</div>
	);
};

export default ProductDetail;
