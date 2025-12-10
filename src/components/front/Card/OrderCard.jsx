import { thousandFormat } from "../../../utils/string-utils";

const OrderCard = ({ item }) => {
    const { product, qty, final_total } = item;

	return (
		<div className='mb-3'>
			<div className='d-flex align-items-center'>
				<div>
					<img
						src={product.imageUrl}
						className='img-fluid rounded-1'
						alt={product.title}
						style={{ width: "60px", height: "60px" }}
					/>
				</div>
				<div className='w-100 px-2 d-flex justify-content-between'>
					<div className='fw-bold d-flex align-items-center'>
						<p className='mb-0'>{product.title}</p>
					</div>
					<div className=''>
						<p className='mb-0 text-end'>x {qty}</p>
						<p className='mb-0'>NT$ {thousandFormat(final_total)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderCard