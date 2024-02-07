import axios from "axios";

// Lấy token từ localStorage
const data = JSON.parse(localStorage.getItem("key"));
const { access_token, id } = data;
console.log("access_token", access_token);
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    accept: "application/json",
    Authorization: access_token ? `Bearer ${access_token}` : "",
  },
});

export default axiosInstance;
