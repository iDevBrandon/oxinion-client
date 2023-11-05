import { api } from "./axios";

export function loadPostsAPI(lastId?: number) {
  return api
    .get(`/posts?lastId=${lastId || 0}`)
    .then((response) => response.data);
}

export function addPostAPI(data: any) {
  return api.post("/post", data).then((response) => response.data);
}
