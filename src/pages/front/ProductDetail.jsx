import { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { thousandFormat } from './../../utils/ThousandFormat';



const ProductDetail = () => {
	const [product, setProduct] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();
	// console.log(id);
	const { setCartQuantity, cartQuantity, addToCart, setIsLoading } = useOutletContext();
	const { description, imageUrl, price, title } = product;

	useEffect(() => {
        const getProduct = async (id) => {
			setIsLoading(true);
			try {
				const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`);
				console.log(res.data.product);
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
			<h1 className='title'>{title}</h1>

			<div className='card mb-3 border-0'>
				<div className='row g-0'>
					<div className='col-md-5'>
						<img
							src={imageUrl}
							className='card-img-top'
							alt={title}
							style={{ maxHeight: "400px", aspectRatio: "1/2" }}
						/>
					</div>
					<div className='col-md-7'>
						<div className='card-body'>
							<p>NT$ {thousandFormat(price)}</p>
							<p className='card-text'>{description}</p>
							<div className='input-group mb-3'>
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
							<button
								className='form-control btn btn-dark'
								onClick={() => {
									addToCart(id);
								}}
							>
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			</div>

			<button
				className='btn btn-outline-primary rounded-circle float-end'
				style={{ width: "60px", height: "60px" }}
				onClick={() => {
					navigate(-1);
				}}
			>
				Back
			</button>
		</div>
	);
};

export default ProductDetail;
