import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://simple-todo-server.vercel.app',
});

export default instance;