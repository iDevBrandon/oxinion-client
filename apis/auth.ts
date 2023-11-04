import { AxiosRequestConfig } from "axios";
import { api } from "./axios";

export function registerAPI(data: {
  email: string;
  username: string;
  password: string;
}) {
  return api.post("/auth/register", data).then((response) => response.data);
}

export function signInAPI(data: { email: string; password: string }) {
  return api.post("/auth/login", data).then((response) => response.data);
}

export function loadMyInfoAPI(options?: AxiosRequestConfig) {
  return api.get("/users", options).then((response) => response.data);
}

export function logoutAPI() {
  return api.post("/auth/logout").then((response) => response.data);
}
