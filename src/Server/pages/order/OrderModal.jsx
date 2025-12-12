import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { editOrder } from '../../common/api/admin';

import { createAsyncMessage } from '../../../Common/slice/messageSlice';
import { DefaultValueInput, ModalFooterBtn } from "../../../Common/FormElements";
import { thousandFormat } from '../../../Common/utils/stringUtils/string-utils';


const OrderModal = ({closeModal, tempOrder, getOrders}) => {
	const [tempData, setTempData] = useState({
        ...tempOrder,
        is_paid: "",
        status: 0
	});
    const dispatch = useDispatch();

	useEffect(() => {
		setTempData({
			...tempOrder,
			is_paid: tempOrder.is_paid,
			status: tempOrder.status,
		});
	}, [tempOrder]);


	const handleChange = (e) => {
		const { value, name, checked } = e.target;
		if (["is_paid"].includes(name)) {
			setTempData((prevState) => ({
                ...prevState,
                [name]: checked
            }));
		} else {
			setTempData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async () => {
		try {
            const res = await editOrder(tempOrder.id, tempData)
            dispatch(createAsyncMessage(res.data));
			closeModal();
			getOrders();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err));
		}
	};

	const handleCancel = (tempOrder) => {
		setTempData(tempOrder);
		closeModal();
	};

    const OrderDefaultValue = [
		{
			title: "Email",
			value: tempData?.user?.email,
		},
		{
			title: "訂購者",
			value: tempData?.user?.name,
		},
		{
			title: "地址",
			value: tempData?.user?.address,
		},
		{
			title: "留言",
			value: tempData?.user?.message,
		},
	];

	return (
		<>
			<div
				className='modal fade'
				id='orderModal'
				tabIndex='-1'
				aria-labelledby='orderModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='modal-header'>
							<div
								className='modal-title'
								id='orderModalLabel'
							>
								<h5>{`編輯訂單： ${tempData?.id}`}</h5>
							</div>
							<button
								type='button'
								className='btn btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={closeModal}
							></button>
						</div>
						{/* content */}
						<div className='modal-body d-flex flex-column row-gap-3'>
							{OrderDefaultValue.map((item) => (
								<DefaultValueInput
                                    key={item.title}
                                    title={item.title}
                                    value={item.value}
                                />
							))}
							<div className='row'>
								<span className='col-sm-2 col-form-label'>商品</span>
								{tempData?.products && (
									<table className='table'>
										<thead>
											<tr>
												<th className='text-center'>品項名稱</th>
												<th className='text-center'>數量</th>
											</tr>
										</thead>
										<tbody>
											{Object.values(tempData.products).map((item) => (
												<tr key={item.id}>
													<td className='text-center'>{item.product.title}</td>
													<td className='text-center'>{item.qty}</td>
												</tr>
											))}
										</tbody>
										<tfoot>
											<tr>
												<td className='border-0 text-center'>總金額</td>
												<td className='border-0 text-center'>
													$ {thousandFormat(tempData.total)}
												</td>
											</tr>
										</tfoot>
									</table>
								)}
							</div>
							<div className='row'>
								<span className='col-2'>修改訂單狀態</span>
								<label
									className='form-check-label col-5'
									htmlFor='is_paid'
								>
									<input
										className='form-check-input me-2 border-1 border-secondary'
										type='checkbox'
										id='is_paid'
										name='is_paid'
										checked={!!tempData?.is_paid}
										onChange={handleChange}
									/>
									付款狀態 ({tempData?.is_paid ? "已付款" : "未付款"})
								</label>
							</div>
							<div className='row'>
								<div className='col-5 col-md-3'>
									<span>處理進度</span>
									<select
										name='status'
										className='form-select'
										value={tempData?.status}
										onChange={handleChange}
									>
										<option
											value='1'
											defaultValue
										>
											未確認
										</option>
										<option value='2'>已確認</option>
										<option value='3'>外送中</option>
										<option value='4'>已送達</option>
									</select>
								</div>
							</div>
						</div>
						<ModalFooterBtn
							handleCancel={handleCancel}
							handleSubmit={handleSubmit}
							data={tempOrder}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default OrderModal