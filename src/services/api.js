import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {post: {Authorization: window.localStorage.getItem("token")}}
});

export default api;
