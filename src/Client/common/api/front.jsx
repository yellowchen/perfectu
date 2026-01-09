import axios from 'axios';


const baseURL = process.env.REACT_APP_API_URL;
const apiPath = process.env.REACT_APP_API_PATH;

const axiosInstance = axios.create({
	baseURL: `${baseURL}v2/api/${apiPath}/`,
});

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		return Promise.reject(err);
	}
);

//product
export const getAllProducts = async(page) => {
    return await axiosInstance.get(`products/all`);
}

export const getProduct = async (id) => {
    return await axiosInstance.get(`product/${id}`);
}

export const getProducts = async (page) => {
	return await axiosInstance.get(`products?page=${page}`);
};

export const getProductSort = async(page, category) => {
    return await axiosInstance.get(`products?page=${page}&category=${category}`);
}

//article
export const getArticles = async() => {
    return await axiosInstance.get(`articles`);
}

export const getArticle = async(id) => {
    return await axiosInstance.get(`article/${id}`)
}


//coupon
export const postCoupon = async(data) => {
    return await axiosInstance.post(`coupon`, data);
}

//cart
export const getCart = async() => {
    return await axiosInstance.get(`cart`);
}

export const postCart = async(data) => {
    return await axiosInstance.post(`cart`, data);
}

export const editCart = async(id, data) => {
    return await axiosInstance.put(`cart/${id}`, data);
}

export const deleteCart = async(id) => {
    return await axiosInstance.delete(`cart/${id}`);
}


//order
export const getOrder = async(id) => {
    return await axiosInstance.get(`order/${id}`);
}

export const postOrder = async(data) => {
    return await axiosInstance.post(`order`, data);
}

//payment
export const postPayment = async(id) => {
    return await axiosInstance.post(`pay/${id}`);
}