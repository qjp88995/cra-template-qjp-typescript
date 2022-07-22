import { message } from "antd";
import axios from "axios";

const instance = axios.create();

instance.defaults.responseType = 'json';

instance.interceptors.request.use((config) => {
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(res => res.data, error => {
  if (error.response.status === 404) {
    message.error(error.message);
  }
  return Promise.reject(error); 
});

export default instance;
