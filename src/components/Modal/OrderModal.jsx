import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import axios from "axios";
import { createAsyncMessage } from '../../slice/messageSlice';
import { ModalFooter } from '../FormElements';
import { thousandFormat } from './../../utils/string-utils';

const OrderModal = ({closeModal, tempOrder, getOrders}) => {
	const [tempData, setTempData] = useState({
        ...tempOrder,
        is_paid: "",
        status: 0
	});
    
    //01 
	useEffect(() => {
		setTempData({
			...tempOrder,
			is_paid: tempOrder.is_paid,
			status: tempOrder.status,
		});
	}, [tempOrder]);

	//02 <input>輸入值轉型與否
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

	//03 Message處理
    const dispatch = useDispatch();

	//04 遞交輸入內容(新增產品內容、修產品改內容)
	const handleSubmit = async () => {
		try {
			const res = await axios.put(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/order/${tempOrder.id}`, {data: tempData});
            dispatch(createAsyncMessage(res.data));
			closeModal();
			getOrders();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err));
		}
	};
	//有更改資料，卻直接關閉檔案，資料保持原樣
	const handleCancel = (tempOrder) => {
		setTempData(tempOrder);
		closeModal();
	};

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
							<div className='modal-title' id='orderModalLabel'>
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
							<div className='row'>
								<span className='col-sm-2 col-form-label'>Email</span>
								<div className='col-sm-10'>
									<input
										readOnly
										type='email'
										id='email'
										className='form-control-plaintext'
										defaultValue={tempData?.user?.email}
									/>
								</div>
							</div>
							<div className='row'>
								<span className='col-sm-2 col-form-label'>訂購者</span>
								<div className='col-sm-10'>
									<input
										readOnly
										type='text'
										id='name'
										className='form-control-plaintext'
										defaultValue={tempData?.user?.name}
									/>
								</div>
							</div>
							<div className='row'>
								<span className='col-sm-2 col-form-label'>地址</span>
								<div className='col-sm-10'>
									<input
										readOnly
										type='text'
										id='address'
										className='form-control-plaintext'
										defaultValue={tempData?.user?.address}
									/>
								</div>
							</div>
							<div className='row'>
								<span className='col-sm-2 col-form-label'>留言</span>
								<div className='col-sm-10'>
									<input
										readOnly
										type='text'
										id='message'
										className='form-control-plaintext'
										defaultValue={tempData?.message}
									/>
								</div>
							</div>

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
								<span>修改訂單狀態</span>
								<label className='form-check-label' htmlFor='is_paid'>
									<input
										className='form-check-input me-2'
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
								<div className='col-3'>
									<span>處理進度</span>
									<select
										name='status'
										className='form-select'
										value={tempData?.status}
										onChange={handleChange}
									>
										<option value='1' defaultValue>
											未確認
										</option>
										<option value='2'>已確認</option>
										<option value='3'>外送中</option>
										<option value='4'>已送達</option>
									</select>
								</div>
							</div>
						</div>
						{/* Footer */}
						<ModalFooter handleCancel={handleCancel} handleSubmit={handleSubmit} data={tempOrder} />
					</div>
				</div>
			</div>
		</>
	);
}

export default OrderModal