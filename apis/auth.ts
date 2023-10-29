import { AxiosRequestConfig } from "axios";
import { api } from "./axios";

export function loadUsersAPI(options: AxiosRequestConfig) {
  return api.get("/users", options).then((response) => response.data);
}

export function registerAPI(data: {
  email: string;
  username: string;
  password: string;
}) {
  return api.post("/auth/register", data).then((response) => response.data);
}

export function signInAPI(data: { email: string; password: string }) {
  return api.post("/auth/login").then((response) => response.data);
}
