import { thousandFormat } from "../../../utils/string-utils";

const CheckoutCard = ({ item }) => {
	const {product, qty, total} = item;

	return (
		<div className='mb-3'>
			<div className='d-flex align-items-center'>
				<div>
					<img
						src={product.imageUrl}
						className='img-fluid rounded-1'
						alt={product.title}
						style={{ width: "48px", height: "48px" }}
					/>
				</div>
				<div className='w-100 px-2'>
					<div className='d-flex justify-content-between fw-bold'>
						<p className='mb-0'>{product.title}</p>
						<p className='mb-0'>x {qty}</p>
					</div>
					<div className='d-flex justify-content-between'>
						<p className='text-muted mb-0'>
							<small className="">NT$ {thousandFormat(product.price)}</small>
						</p>
						<p className='mb-0'>NT$ {thousandFormat(total)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutCard;
