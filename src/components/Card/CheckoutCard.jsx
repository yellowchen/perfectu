import { thousandFormat } from "./../../utils/ThousandFormat";

const CheckoutCard = ({ item }) => {
	const {product, qty, final_total} = item;

	return (
		<div className='mb-3'>
			<div className='d-flex align-items-center'>
				<div>
					<img
						src={product.imageUrl}
						className='img-fluid'
						alt={product.title}
						style={{ width: "48px", height: "48px" }}
					/>
				</div>
				<div className='w-100 px-1'>
					<div className='d-flex justify-content-between fw-bold'>
						<p className='mb-0'>{product.title}</p>
						<p className='mb-0'>x {qty}</p>
					</div>
					<div className='d-flex justify-content-between'>
						<p className='text-muted mb-0'>
							<small>NT$ {thousandFormat(product.price)}</small>
						</p>
						<p className='mb-0'>NT$ {thousandFormat(final_total)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutCard;
