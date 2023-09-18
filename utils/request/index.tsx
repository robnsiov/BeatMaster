import api from "@/api";
import axios, { AxiosRequestConfig } from "axios";
function request<T>(data: AxiosRequestConfig) {
  // if (typeof window !== "undefined") {
  //   const token = window.localStorage.getItem("token");
  //   if (token) {
  //     axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  //   }
  // }
  return axios<T>({ ...data, baseURL: api.BASE_URL });
}

export default request;
