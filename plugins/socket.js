// services/socketService.js
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Điều chỉnh URL tới địa chỉ của server NestJS

export default socket;
