import { BASE_URL } from '@config/apiRoutes.config';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
