import axios from "axios";


const baseURL = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
    baseURL: `${baseURL}/v2/`
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        return Promise.reject(err);
    }
)

export const logInApi = async ({ username, password }) => {
	return await axiosInstance.post(`/admin/signin`, { username, password });
};

export const checkPermission = async(token) => {
    axiosInstance.defaults.headers.common["Authorization"] = token;
    return await axiosInstance.post(`/api/user/check`)
}
