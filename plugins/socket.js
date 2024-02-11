// services/socketService.js
import io from 'socket.io-client';
const apiUrl = process.env.apiUrl; // Lấy apiUrl từ biến môi trường

const socket = io(apiUrl); // Điều chỉnh URL tới địa chỉ của server NestJS

export default socket;
