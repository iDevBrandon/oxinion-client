import { createSlice } from "@reduxjs/toolkit";

export interface PostState {
  mainPosts: any[];
  imagePaths: any;
  hasMorePosts: boolean;
  loadPostsLoading: boolean;
  loadPostsDone: any;
  loadPostsError: any;
  addPostLoading: boolean;
  addPostDone: any;
  addPostError: any;
  removePostLoading: boolean;
  removePostDone: any;
  removePostError: any;
  addCommentLoading: boolean;
  addCommentDone: any;
  addCommentError: any;
  likePostLoading: boolean;
  likePostDone: boolean;
  likePostError: any;
}

const initialState: PostState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice;
