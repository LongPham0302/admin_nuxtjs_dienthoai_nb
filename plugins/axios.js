import axios from 'axios';

// Lấy token từ localStorage
const token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'accept': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export default axiosInstance;
