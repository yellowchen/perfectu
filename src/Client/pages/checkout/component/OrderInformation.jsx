import OrderCard from "./card/OrderCard";
import { FormatDateTimesK } from "../../../../Common/utils/dateUtils/date-utils";
import { thousandFormat } from "../../../../Common/utils/stringUtils/string-utils";

export const OrderInformation = ({ orderData, user, payment }) => {
	return (
		<div className='mb-5 w-100 bg-white p-3 card-shadow'>
			<div className=''>
				<h3 className='mb-4 text-center'>寄件資訊</h3>
				<hr className='mx-1' />
				<div className='p-2'>
					<h5 className='d-flex'>
						<p className='pe-3 fw-bolder'>姓名：</p>
						<p>{user?.name}</p>
					</h5>
					<h5 className='d-flex'>
						<p className='pe-3 fw-bolder'>信箱：</p>
						<p>{user?.email}</p>
					</h5>
					<h5 className='d-flex'>
						<p className='pe-3 fw-bolder'>手機：</p>
						<p>{user?.tel}</p>
					</h5>
					<h5 className='d-flex'>
						<p className='pe-3 fw-bolder'>地址：</p>
						<p>{user?.address}</p>
					</h5>
				</div>
			</div>

			<div className='mb-4'>
				<h3 className='mb-4 text-center'>訂單資訊</h3>
				<hr className='my-3 mx-1' />
				<div className='p-2'>
					<h5 className='d-flex flex-wrap'>
						<p className='pe-3 fw-bolder'>訂單編號：</p>
						<p>{orderData?.id}</p>
					</h5>
					<h5 className='d-flex'>
						<p className='pe-3 fw-bolder'>訂單日期：</p>
						<p>{FormatDateTimesK(orderData?.create_at)}</p>
					</h5>
					<h5 className='d-flex'>
						<p className='pe-3 fw-bolder'>訂單狀態：</p>
						<p>{orderData?.is_paid ? "已付款" : "待付款"}</p>
					</h5>
					{orderData?.is_paid ? (
						<h5 className='d-flex'>
							<p className='pe-3 fw-bolder'>付款方式：</p>
							<p>{payment}</p>
						</h5>
					) : (
						<></>
					)}
				</div>
			</div>

			<div>
				<h3 className='mb-4 text-center'>商品明細</h3>
				<hr className='my-3 mx-1' />
				<div className='p-3'>
					{Object.values(orderData?.products || {})
						?.sort((a, b) => (a.product.category > b.product.category ? -1 : 1))
						?.map((item) => (
							<OrderCard
								item={item}
								key={item.id}
							/>
						))}
					<hr
						className=''
						style={{ border: "1px solid #aaa" }}
					/>
					<div className='d-flex justify-content-between'>
						<h5 className='fw-bolder'>總計：</h5>
						<h5 className='fw-bolder'>NT$ {thousandFormat(orderData.total)}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
