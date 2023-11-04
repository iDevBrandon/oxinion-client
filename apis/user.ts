import { AxiosRequestConfig } from "axios";
import { api } from "./axios";

// export function loadMyInfoAPI(data: any) {
//   return api.get(`/users/${data}`).then((response) => response.data);
// }

// export function loadUsersAPI(data: any) {
//   return api.get("/users", data).then((response) => response.data);
// }

export function loadUserAPI(data: number) {
  return api.get(`/user/${data}`).then((response) => response.data);
}
