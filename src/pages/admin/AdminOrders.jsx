import {useEffect, useState, useRef} from "react";
import { Modal } from "bootstrap";
import axios from "axios";

import OrderModal from "../../components/admin/Modal/OrderModal";
import Pagination from "./../../components/admin/Pagination";
import { thousandFormat } from "./../../utils/string-utils";


const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [tempOrder, setTempOrder] = useState({});
    const [pagination, setPagination] = useState({});

    //01取得所有項目API
    const getOrders = async (page = 1) => {
        try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/orders?page=${page}`);
            setOrders(res.data.orders);
            setPagination(res.data.pagination);
        } catch (err) {
            console.log(err);
        }
    };

    //03 各功能Modal製作
    const orderModal = useRef(null);
    useEffect(() => {
        orderModal.current = new Modal("#orderModal", {
            backdrop: "static",
        });
        getOrders();
    }, []);

    //OrderModal
    const openOrderModal = (item) => {
        setTempOrder(item);
        orderModal.current.show();
    };
    const closeOrderModal = () => {
        orderModal.current.hide();
    };
    return (
		<div className='p-1'>
			<OrderModal 
                closeModal={closeOrderModal} 
                tempOrder={tempOrder} 
                getOrders={getOrders} 
            />
			<h4 className='pt-3'>Orders</h4>
			<hr />
			<table className='table text-center align-middle table-fixed'>
				<thead>
					<tr>
						<th scope='col'>訂單</th>
						<th scope='col'>日期</th>
						<th scope='col'>用戶</th>
						<th scope='col'>金額</th>
						<th scope='col'>狀態</th>
						<th scope='col'>進度</th>
						<th scope='col'>留言</th>
						<th scope='col'>編輯</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((item) => (
						<tr key={item.id}>
							<td className='text-ellipsis'>{item.id}</td>
							<td>{new Date(item.create_at * 1000).toDateString()}</td>
							<td>{item.user.name}</td>
							<td className='text-ellipsis'>{thousandFormat(item.total)}</td>
							<td>{item.is_paid ? <span className='text-success fw-bold'>付款完成</span> : "未付款"}</td>
							<td>{item.status ? <span>{item.status}</span> : "1"}</td>
							<td>{item.message}</td>
							<td>
								<button
									type='button'
									className='btn btn-outline-primary p-1 me-2'
									onClick={() => {
										openOrderModal(item);
									}}
								>
									查看
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination changePage={getOrders} pagination={pagination} />
		</div>
	);
}

export default AdminOrders