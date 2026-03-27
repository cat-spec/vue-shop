import axios from "axios";

const http=axios.create({
  baseURL: 'http://pcapi-aiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
});

//请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
