import axios from "axios";

const request = axios.create();

request.defaults.responseType = 'json';

request.interceptors.request.use((config) => {
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default request;
