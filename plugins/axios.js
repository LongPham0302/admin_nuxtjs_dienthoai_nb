import axios from "axios";

// Lấy token từ localStorage
const data = JSON.parse(localStorage.getItem("key"));
const apiUrl = process.env.apiUrl; // Lấy apiUrl từ biến môi trường

const { access_token, id } = data;
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    accept: "application/json",
    Authorization: access_token ? `Bearer ${access_token}` : "",
  },
});

export default axiosInstance;
