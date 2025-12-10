import axios from 'axios';


const baseURL = process.env.REACT_APP_API_URL;
const apiPath = process.env.REACT_APP_API_PATH;

const axiosInstance = axios.create({
    baseURL: `${baseURL}/v2/api/${apiPath}/admin`
});

axiosInstance.interceptors.request.use(
    (config) => {
		const token = document.cookie
			.split(";")
			.find((row) => row.startsWith("perfectToken="))
			?.split("=")[1];
		if (token) {
			config.headers.Authorization = token;
		}
		return config;
	},
    (err) => {
        return Promise.reject(err)
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        return  Promise.reject(err)
    }
)

//product
export const getProducts = async(page) => {
    return await axiosInstance.get(`/products?page=${page}`);
}

export const deleteProduct = async(id) => {
    return await axiosInstance.delete(`/product/${id}`);
}

export const postProduct = async (data) => {
	return await axiosInstance.post(`/product`, { data });
};

export const editProduct = async(id, data) => {
    return await axiosInstance.put(`/product/${id}`, { data });
}

//coupon
export const getCoupons = async(page) => {
    return await axiosInstance.get(`/coupons?page=${page}`);
}

export const deleteCoupon = async(id) => {
    return await axiosInstance.delete(`/coupon/${id}`);
}

export const postCoupon = async (data) => {
	return await axiosInstance.post(`/coupon`, { data });
};

export const editCoupon = async (id, data) => {
	return await axiosInstance.put(`/coupon/${id}`, { data });
};

//order
export const getOrders = async(page) => {
    return await axiosInstance.get(`/orders?page=${page}`);
}

export const editOrder = async (id, data) => {
	return await axiosInstance.put(`/order/${id}`, { data });
}

//article
export const getArticles = async(page) => {
    return await axiosInstance.get(`/articles?page=${page}`);
}

export const getArticle = async(id) => {
    return await axiosInstance.get(`/article/${id}`);
}

export const deleteArticle = async(id) => {
    return await axiosInstance.delete(`/article/${id}`);
}

export const postArticle = async (data) => {
	return await axiosInstance.post(`/article`, { data });
};

export const editArticle = async (id, data) => {
	return await axiosInstance.put(`/article/${id}`, { data });
};