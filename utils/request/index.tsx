import api from "@/api";
import axios, { AxiosRequestConfig } from "axios";
function request<T>(data: AxiosRequestConfig) {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("token");
    if (token) {
      axios.defaults.headers[
        "Authorization"
      ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1MDI1MTc0LCJpYXQiOjE2OTUwMjQ4NzQsImp0aSI6ImNiZTA2NmI2OGZkZDQ0NGJiZjliMjMzZGQzMDcxODVhIiwidXNlcl9pZCI6N30.kmoJ08JiktIEfh-SaUcS3hCvaTjLuvi9lEMeQCwsvio`;
    }
  }
  return axios<T>({ ...data, baseURL: api.BASE_URL });
}

export default request;
