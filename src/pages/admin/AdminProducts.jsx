import {useEffect, useState, useRef} from "react";
import { Modal } from "bootstrap";
import axios from "axios";

import ProductModal from '../../components/Modal/ProductModal';
import DeleteModal from '../../components/Modal/DeleteModal';
import Pagination from './../../components/Pagination';

import { createAsyncMessage } from "../../slice/messageSlice";
import { thousandFormat } from "./../../utils/string-utils";
import { useDispatch } from 'react-redux';


const AdminProducts = () => {
	const [products, setProducts] = useState([]);
	const [type, setType] = useState("create");
	const [tempProduct, setTempProduct] = useState({});
	const [pagination, setPagination] = useState({});

	//04 Message推播處理
    const dispatch = useDispatch();

	//01取得所有項目API
	const getProducts = async (page = 1) => {
		try {
			const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products?page=${page}`);
			setProducts(res.data.products);
			setPagination(res.data.pagination);
		} catch (err) {
			console.log(err);
		}
	};

	//02刪除單個項目API
	const deleteProduct = async (id) => {
		try {
			const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${id}`);
			if (res.data.success) {
                dispatch(createAsyncMessage(res.data));
				closeDeleteModal();
				getProducts();
			}
		} catch (err) {
			console.log(err);
		}
	};

	//03 各功能Modal製作
	const productModal = useRef(null);
	const deleteModal = useRef(null);

	useEffect(() => {
		productModal.current = new Modal("#productModal", {
			backdrop: "static",
		});
		deleteModal.current = new Modal("#deleteModal", {
			backdrop: "static",
		});
		getProducts();
	}, []);

	//ProductModal
	const openProductModal = (type, item) => {
		setType(type);
		setTempProduct(item);
		productModal.current.show();
	};
	const closeProductModal = () => {
		productModal.current.hide();
	};

	//DeleteModal
	const openDeleteModal = (item) => {
		setTempProduct(item);
		deleteModal.current.show();
	};
	const closeDeleteModal = () => {
		deleteModal.current.hide();
	};

	return (
		<div className='p-1'>
			<ProductModal
				closeModal={closeProductModal}
				type={type}
				tempProduct={tempProduct}
				getProducts={getProducts}
			/>
			<DeleteModal 
                closeModal={closeDeleteModal} 
                tempItem={tempProduct} 
                deleteItem={deleteProduct} 
            />
			<h4 className='pt-3'>Products</h4>
			<hr />
			<div className='text-end mb-3'>
				<button
					type='button'
					className='btn btn-outline-primary p-1 me-2'
					onClick={() => {
						openProductModal("create", {});
					}}
				>
					Create New
				</button>
			</div>
			<table className='table text-center align-middle table-modal'>
				<thead>
					<tr>
						<th scope='col'>分類</th>
						<th scope='col'>縮圖</th>
						<th scope='col'>名稱</th>
						<th scope='col'>售價</th>
						<th scope='col'>狀態</th>
						<th scope='col'>編輯</th>
					</tr>
				</thead>
				<tbody>
					{products
						.sort((a, b) => (a.num > b.num ? -1 : 1))
						.map((item) => (
							<tr key={item.id}>
								<td>{item.category}</td>
								<td>
									<img
										src={item?.imageUrl || null}
										alt={item.title}
										style={{ width: "70px", height: "70px" }}
										className='rounded-1'
									/>
								</td>
								<td>{item.title}</td>
								<td>{thousandFormat(item.price)}</td>
								<td>{item.is_enabled ? "啟用" : "未啟用"}</td>
								<td>
									<button
										type='button'
										className='btn btn-outline-primary p-1 m-1'
										onClick={() => {
											openProductModal("edit", item);
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
			<Pagination changePage={getProducts} pagination={pagination} />
		</div>
	);
}

export default AdminProducts