import axios, { AxiosRequestConfig } from "axios";
function request<T>(data: AxiosRequestConfig) {
  return axios<T>(data);
}

export default request;
