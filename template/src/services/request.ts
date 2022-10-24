import axios from "axios";

const instance = axios.create();

instance.defaults.responseType = 'json';

instance.interceptors.request.use((config) => {
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;
