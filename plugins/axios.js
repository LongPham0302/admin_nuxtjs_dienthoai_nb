import axios from "axios";

const apiUrl = process.env.apiUrl;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage
    let data = JSON.parse(localStorage.getItem("key"));
    const token = data?.access_token || "";

    // Thêm token vào header của yêu cầu Axios
    config.headers.Authorization = token ? `Bearer ${token}` : "";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
