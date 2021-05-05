import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://agro-plus-309200.rj.r.appspot.com/api',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default api;
