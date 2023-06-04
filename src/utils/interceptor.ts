import axios from "axios";

axios.defaults.baseURL = TARO_API_BASE_URL;

const errorHandler = (error) => {
  return Promise.reject(error);
};

axios.interceptors.request.use(async (config) => {
  return config;
}, errorHandler);

axios.interceptors.response.use((response) => {
  return response;
}, errorHandler);
