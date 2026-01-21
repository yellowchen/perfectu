import { thousandFormat } from '../../../../../Common/utils/stringUtils/string-utils';
import data from "../../../../../Common/data/ProductSelect.json"

const OrderCard = ({ item }) => {
    const { product, qty, final_total } = item;

	return (
		<div className='mb-3'>
			<div className='d-flex align-items-center'>
				<div className=''>
					<img
						src={product.imageUrl}
						className='img-fluid rounded-1'
						alt={product.title}
						style={{ width: "65px", height: "60px" }}
					/>
				</div>
				<div className='w-100 px-2 d-flex justify-content-between'>
					<div className='fw-bold d-flex flex-column align-items-start'>
						{data.productCategory
							.filter((item) => item.sort === product.category)
							.map((item) => (
								<small
									className='px-2 rounded-4'
									style={{
										color: "#777",
										border: "1px solid currentcolor",
										fontSize: "12px",
									}}
								>
									{item.title}
								</small>
							))}
						<p className='mb-0'>
							{product.title} <small> / {product.unit}</small>
						</p>
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