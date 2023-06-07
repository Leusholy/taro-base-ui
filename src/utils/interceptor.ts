import axios from "axios";
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Taro from "@tarojs/taro";

axios.defaults.baseURL = TARO_API_BASE_URL;

const errorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
}, errorHandler);

axios.interceptors.response.use((response: AxiosResponse) => {
  const res = response.data;

  if (res.code !== 200) {
    Taro.showToast({ title: res.msg || "Error", icon: "error" });
    return Promise.reject(new Error(res.msg || "Error"));
  }

  return res;
}, errorHandler);
