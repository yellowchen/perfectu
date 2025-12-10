import {useEffect, useState, useRef} from "react";
import { Modal } from "bootstrap";

import ArticleModal from "../../components/admin/Modal/ArticleModal";
import Pagination from "../../components/admin/Pagination";
import { DeleteMessage } from "../../components/share/DeleteMessage";

import { getArticles, getArticle, deleteArticle } from "../../api/admin";

import { createAsyncMessage } from "../../slice/messageSlice";
import { useDispatch } from 'react-redux';


const AdminArticles = () => {
	const [articles, setArticles] = useState([]);
	const [type, setType] = useState("create");
	const [tempArticle, setTempArticle] = useState({});
	const [pagination, setPagination] = useState({});

	//04 Message推播處理
	const dispatch = useDispatch();

	//01取得所有項目API
    const getAllArticles = (page = 1) => {
        getArticles(page)
            .then(res => {
                setArticles(res.data.articles);
                setPagination(res.data.pagination);
            })
            .catch(err => {

            })
    }
	// const getArticles = async (page = 1) => {
	// 	try {
	// 		const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/articles?page=${page}`);
	// 		setArticles(res.data.articles);
	// 		setPagination(res.data.pagination);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	//getArticle
    const getOneArticle = async(id) => {
        // setIsLoading(true);
        try {
            const res = await getArticle(id);
            await setTempArticle(res.data.article);
        }catch(err) {
            console.log(err);
        }
        // getArticle(id)
        //     .then(res => {
        //         setTempArticle(res.data.article);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
	// const getArticle = async (id) => {
	// 	try {
	// 		const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/article/${id}`);
    //         await setTempArticle(res.data.article);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	//02刪除單個項目API
    const handleDeleteArticle = (id) => {
        deleteArticle(id)
            .then(res => {
                if (res.data.success) {
					dispatch(createAsyncMessage(res.data));
					closeDeleteMessage();
					getAllArticles();
				}
            })
            .catch(err => {
                console.log(err);
            })
    }
	// const deleteArticle = async (id) => {
	// 	try {
	// 		const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/article/${id}`);
	// 		if (res.data.success) {
	// 			dispatch(createAsyncMessage(res.data));
	// 			closeDeleteModal();
	// 			getAllArticles();
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	//03 各功能Modal製作
	const articleModal = useRef(null);
	const deleteMessage = useRef(null);

	useEffect(() => {
		articleModal.current = new Modal("#articleModal", {
			backdrop: "static",
		});
		deleteMessage.current = new Modal("#deleteMessage", {
			backdrop: "static",
		});
		getAllArticles();
	}, []);


	//ArticleModal
	const openArticleModal = async (type, item) => {
		setType(type);
        if(item.id) {
            await getOneArticle(item.id);
        }else {
            setTempArticle(item);
        }
		articleModal.current.show();
	};
	const closeArticleModal = () => {
		articleModal.current.hide();
	};

	//DeleteModal
	const openDeleteMessage = (item) => {
		setTempArticle(item);
		deleteMessage.current.show();
	};
	const closeDeleteMessage = () => {
		deleteMessage.current.hide();
	};

	return (
		<div className='p-1'>
			<ArticleModal
				closeModal={closeArticleModal}
				type={type}
				tempArticle={tempArticle}
				getArticles={getAllArticles}
			/>
			<DeleteMessage
                closeModal={closeDeleteMessage}
                deleteItem={handleDeleteArticle}
                id={tempArticle.id}
                title={tempArticle.title}
            />
			<h4 className='pt-3'>Articles</h4>
			<hr />
			<div className='addNew text-end mb-3'>
				<button
					type='button'
					className='btn btn-outline-primary p-1 me-2'
					onClick={() => {
						openArticleModal("create", {});
					}}
				>
					Create New
				</button>
			</div>
			<table className='table text-center align-middle table-modal'>
				<thead>
					<tr>
						<th scope='col'>創建</th>
						<th scope='col'>作者</th>
						<th scope='col'>標題</th>
						<th scope='col'>縮圖</th>
						<th scope='col'>狀態</th>
						<th scope='col'>編輯</th>
					</tr>
				</thead>
				<tbody>
					{articles
						.sort((a, b) => (a.create_at > b.create_at ? -1 : 1))
						.map((item) => (
							<tr key={item.id}>
								<td>{new Date(item.create_at).toDateString()}</td>
								<td>{item.author}</td>
								<td>{item.title}</td>
								<td>
									<img
										src={item?.image || null}
										alt={item.title}
										style={{ width: "60px", height: "60px" }}
										className='rounded-1'
									/>
								</td>
								<td>{item.is_enabled ? "啟用" : "未啟用"}</td>
								<td>
									<button
										type='button'
										className='btn btn-outline-primary p-1 m-1'
										onClick={() => {
											openArticleModal("edit", item);
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

			<Pagination changePage={getAllArticles} pagination={pagination} />
		</div>
	);
}

export default AdminArticles