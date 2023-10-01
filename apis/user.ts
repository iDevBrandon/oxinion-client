import { api } from "./axios";

export function loadUserAPI(data: any) {
  return api.get(`/users/${data}`).then((response) => response.data);
}
