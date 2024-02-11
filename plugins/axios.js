import axios from "axios";

// Lấy token từ localStorage
let data = JSON.parse(localStorage.getItem("key"));
const apiUrl = process.env.apiUrl;
const token = data?.access_token || "";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosInstance;
