import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://be-web-p8nb.onrender.com/',
    headers: {
        'accept': 'application/json'
    }
});

export default axiosInstance;