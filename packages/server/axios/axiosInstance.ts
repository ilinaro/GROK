import axios from 'axios'

const BASE_URL = 'https://ya-praktikum.tech/api/v2'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})
