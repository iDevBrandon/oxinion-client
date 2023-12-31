import { api } from "./axios";

export function loadPostsAPI(lastId?: number) {
  return api
    .get(`/posts?lastId=${lastId || 0}`)
    .then((response) => response.data);
}

export function addPostAPI(data: any) {
  return api.post("/posts", data).then((response) => response.data);
}

export function fetchNearbyPostsAPI(data: any) {
  return api
    .get(`/posts/nearby?lat=${data.lat}&lng=${data.lng}`)
    .then((response) => response.data);
}

// POST /post/1/comment
export function addCommentAPI(data: {
  postId: number;
  content: string;
  author: string;
}) {
  return api
    .post(`/post/${data.postId}/comment`, data)
    .then((response) => response.data);
}

// Remove a post
// DELETE http://localhost:8800/api/posts/656de58033a404f5cadb7606
export function removePostAPI(data: string) {
  return api.delete(`/post/${data}`).then((response) => response.data);
}
