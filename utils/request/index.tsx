import api from "@/api";
import axios, { AxiosRequestConfig } from "axios";
function request<T>(data: AxiosRequestConfig) {
  return axios<T>({ ...data, baseURL: api.BASE_URL });
}

export default request;
