import {useEffect, useState, useRef} from "react";
import { Modal } from "bootstrap";
import { useDispatch } from "react-redux";

import CouponModal from "./CouponModal";

import { getCoupons, deleteCoupon } from '../../common/api/admin';
import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import { DeleteMessage } from '../../../Common/DeleteMessage';
import Pagination from './../../../Common/Pagination';


const AdminCoupons = () => {
	const [coupons, setCoupons] = useState([]);
	const [type, setType] = useState("create");
	const [tempCoupon, setTempCoupon] = useState({});
	const [pagination, setPagination] = useState({});
    const dispatch = useDispatch();

    const getAllCoupons = (page = 1) => {
        getCoupons(page)
            .then(res => {
                setCoupons(res.data.coupons);
                setPagination(res.data.pagination);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDeleteCoupon = (id) => {
        deleteCoupon(id)
            .then(res => {
                if (res.data.success) {
                    dispatch(createAsyncMessage(res.data));
                    closeDeleteMessage();
                    getAllCoupons();
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

	const couponModal = useRef(null);
	const deleteMessage = useRef(null);
	useEffect(() => {
		couponModal.current = new Modal("#couponModal", {
			backdrop: "static",
		});
		deleteMessage.current = new Modal("#deleteMessage", {
			backdrop: "static",
		});
		getAllCoupons();
	}, []);

	const openCouponModal = (type, item) => {
		setType(type);
		setTempCoupon(item);
		couponModal.current.show();
	};
	const closeCouponModal = () => {
		couponModal.current.hide();
	};

	const openDeleteMessage = (item) => {
		setTempCoupon(item);
		deleteMessage.current.show();
	};
	const closeDeleteMessage = () => {
		deleteMessage.current.hide();
	};

	return (
		<div className='p-1'>
			<CouponModal
				closeModal={closeCouponModal}
				type={type}
				tempCoupon={tempCoupon}
				getCoupons={getAllCoupons}
			/>
			<DeleteMessage
				closeModal={closeDeleteMessage}
				deleteItem={handleDeleteCoupon}
				id={tempCoupon.id}
				title={tempCoupon.title}
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
											openDeleteMessage(item);
										}}
									>
										Del
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination
				changePage={getAllCoupons}
				pagination={pagination}
			/>
		</div>
	);
};

export default AdminCoupons