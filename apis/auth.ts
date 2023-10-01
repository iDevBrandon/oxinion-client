import { AxiosRequestConfig } from "axios";
import { api } from "./axios";

export function loadMyInfoAPI(options: AxiosRequestConfig) {
  return api.get("/users", options).then((response) => response.data);
}
