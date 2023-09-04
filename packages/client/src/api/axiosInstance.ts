import axios from 'axios';
import { BASE_URL, FORUM_API_URL } from '@config/apiRoutes.config';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const forumAxiosInstance = axios.create({
  baseURL: FORUM_API_URL,
  withCredentials: true,
});
