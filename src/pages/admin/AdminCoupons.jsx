import {useEffect, useState, useRef} from "react";
import { Modal } from "bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";

import DeleteModal from "../../components/Modal/DeleteModal";
import CouponModal from "../../components/Modal/CouponModal";
import Pagination from "./../../components/Pagination";
import { createAsyncMessage } from "../../slice/messageSlice";


const AdminCoupons = () => {
	const [coupons, setCoupons] = useState([]);
	const [type, setType] = useState("create");
	const [tempCoupon, setTempCoupon] = useState({});
	const [pagination, setPagination] = useState({});

	//04 Message推播處理
    const dispatch = useDispatch();

	//01取得所有項目API
	const getCoupons = async (page = 1) => {
		try {
			const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupons?page=${page}`);
			setCoupons(res.data.coupons);
			setPagination(res.data.pagination);
		} catch (err) {
			console.log(err);
		}
	};

	//02刪除單個項目API
	const deleteCoupon = async (id) => {
		try {
			const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${id}`);
			if (res.data.success) {
                dispatch(createAsyncMessage(res.data));
				closeDeleteModal();
				getCoupons();
			}
		} catch (err) {
			console.log(err);
		}
	};

	//03 各功能Modal製作
	const couponModal = useRef(null);
	const deleteModal = useRef(null);

	useEffect(() => {
		couponModal.current = new Modal("#couponModal", {
			backdrop: "static",
		});
		deleteModal.current = new Modal("#deleteModal", {
			backdrop: "static",
		});
		getCoupons();
	}, []);

	//ProductModal
	const openCouponModal = (type, item) => {
		setType(type);
		setTempCoupon(item);
		couponModal.current.show();
	};
	const closeCouponModal = () => {
		couponModal.current.hide();
	};

	//DeleteModal
	const openDeleteModal = (item) => {
		setTempCoupon(item);
		deleteModal.current.show();
	};
	const closeDeleteModal = () => {
		deleteModal.current.hide();
	};
	console.log(new Date());

	return (
		<div className='p-1'>
			<CouponModal 
                closeModal={closeCouponModal} 
                type={type} 
                tempCoupon={tempCoupon} 
                getCoupons={getCoupons} 
            />
			<DeleteModal 
                closeModal={closeDeleteModal} 
                tempItem={tempCoupon} 
                deleteItem={deleteCoupon} 
            />
			<h4 className='pt-3'>Coupons</h4>
			<hr />
			<div className='addNew text-end mb-3'>
				<button
					type='button'
					className='btn btn-outline-primary p-1 me-2'
					onClick={() => {
						openCouponModal("create", {});
					}}
				>
					Create New
				</button>
			</div>
			<table className='table text-center align-middle table-modal'>
				<thead>
					<tr>
						<th scope='col'>標題</th>
						<th scope='col'>折扣</th>
						<th scope='col'>期限</th>
						<th scope='col'>優惠碼</th>
						<th scope='col'>狀態</th>
						<th scope='col'>編輯</th>
					</tr>
				</thead>
				<tbody>
					{coupons
						.toSorted((a, b) => (a.due_date > b.due_date ? -1 : 1))
						.map((item) => (
							<tr
								key={item.id}
								className={item.due_date < new Date().getTime() ? "table-secondary" : undefined}
							>
								<td>{item.title}</td>
								<td>{item.percent}</td>
								<td>{new Date(item.due_date).toDateString()}</td>
								<td>{item.code}</td>
								<td>
									{item.due_date < new Date().getTime()
										? "未啟用"
										: item.is_enabled
										? "啟用"
										: "未啟用"}
								</td>
								<td>
									<button
										type='button'
										className='btn btn-outline-primary p-1 m-1'
										onClick={() => {
											openCouponModal("edit", item);
										}}
									>
										Edit
									</button>
									<button
										type='button'
										className='btn btn-outline-danger p-1 m-1'
										onClick={() => {
											openDeleteModal(item);
										}}
									>
										Del
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination changePage={getCoupons} pagination={pagination} />
		</div>
	);
};

export default AdminCoupons