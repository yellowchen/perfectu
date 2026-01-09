import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "bootstrap";

import ProductModal from "./ProductModal";
import { getProducts, deleteProduct } from "../../common/api/admin";

import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import { thousandFormat } from '../../../Common/utils/stringUtils/string-utils';
import { DeleteMessage } from '../../../Common/DeleteMessage';
import Pagination from "../../../Common/Pagination";


const AdminProducts = () => {
	const [products, setProducts] = useState([]);
	const [type, setType] = useState("create");
	const [tempProduct, setTempProduct] = useState({});
	const [pagination, setPagination] = useState({});
    const dispatch = useDispatch();

    const getAllProducts = useCallback(
        async (page) => {
            try {
                const res = await getProducts(page);
                setProducts(res.data.products);
                setPagination(res.data.pagination);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }, []
    );

    const handleDeleteProduct = (id) => {
        deleteProduct(id)
			.then((res) => {
				if (res.data.success) {
					dispatch(createAsyncMessage(res.data));
					closeDeleteMessage();
					getAllProducts();
				}
			})
			.catch((err) => {
				console.log(err);
			});
    }

	const productModal = useRef(null);
	const deleteMessage = useRef(null);
	useEffect(() => {
		productModal.current = new Modal("#productModal", {
			backdrop: "static",
		});
		deleteMessage.current = new Modal("#deleteMessage", {
			backdrop: "static",
		});
		getAllProducts();
	}, [getAllProducts]);


	const openProductModal = (type, item) => {
		setType(type);
		setTempProduct(item);
		productModal.current.show();
	};
	const closeProductModal = () => {
		productModal.current.hide();
	};


	const openDeleteMessage = (item) => {
		setTempProduct(item);
		deleteMessage.current.show();
	};
	const closeDeleteMessage = () => {
		deleteMessage.current.hide();
	};
    console.log(products);

	return (
		<div className='p-1'>
			<ProductModal
				closeModal={closeProductModal}
				type={type}
				tempItem={tempProduct}
				getProducts={getAllProducts}
			/>
			<DeleteMessage
				closeModal={closeDeleteMessage}
				deleteItem={handleDeleteProduct}
				id={tempProduct.id}
				title={tempProduct.title}
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
						.sort((a, b) => (a.category < b.category ? -1 : 1))
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
				changePage={getAllProducts}
				pagination={pagination}
			/>
		</div>
	);
}

export default AdminProducts