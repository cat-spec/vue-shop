import axios from "axios";

const http=axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
});

//请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
import { useUserStore } from "@/store/userStore";
import {useRouter} from "vue-router";
//响应拦截器
http.interceptors.response.use(
  (response) => {
    if(response.code==401){
      // 清除token
      useUserStore().clearToken();
      // 跳转到登录页
      useRouter().push('/login');
    }

    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
