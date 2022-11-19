import axios from "axios";

const request = axios.create();

request.defaults.responseType = 'json';

export default request;
