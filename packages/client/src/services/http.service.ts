import axios from 'axios';

const AxiosAuth = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2/',
  withCredentials: true,
});

// AxiosAuth.interceptors.response.use(
//   (res) => res,
//   function (error) {
//     // if (error.response.status === 404) {
//     //   window.location.replace('/404');
//     // }
//     // if (error.response.status === 403) {
//     // authService.update();
//     // }
//     const expectedErrors =
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 500;

//     if (!expectedErrors) {
//       // if (error.response.status === 500) {
//       //   console.log('Сервер лег!');
//       // }
//     }
//     return Promise.reject(error);
//   }
// );

const httpService = {
  get: AxiosAuth.get,
  post: AxiosAuth.post,
  put: AxiosAuth.put,
  patch: AxiosAuth.patch,
  delete: AxiosAuth.delete,
};

export default httpService;
