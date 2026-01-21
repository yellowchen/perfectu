import { thousandFormat } from '../../../../../Common/utils/stringUtils/string-utils';

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
						style={{ width: "65px", height: "60px" }}
					/>
				</div>
				<div className='w-100 px-2'>
					<div className='d-flex justify-content-between'>
						<p className='mb-0 fw-bold'>
							{product.title}
							<small className='text-dark'> / {product.unit}</small>
						</p>
						<p className='text-black-50 mb-0'>
							<small className=''>NT$ {thousandFormat(product.price)}</small>
						</p>
					</div>
					<div className='d-flex justify-content-between'>
						<p className='mb-0 ps-1'>x {qty}</p>

						<p className='mb-0'>NT$ {thousandFormat(total)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutCard;
