import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  me: any;
  signUpData: object;
  loadMyInfoLoading: boolean;
  loadMyInfoDone: any;
  loadMyInfoError: any;
  loginData: object;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: any;
  loginLoading: boolean;
  loginDone: any;
  loginError: any;
  logoutLoading: boolean;
  logoutDone: any;
  logoutError: any;
  followLoading: boolean;
  followDone: any;
  followError: any;
  unfollowLoading: boolean;
  unfollowDone: any;
  unfollowError: any;
}

const initialState: UserState = {
  me: null,
  signUpData: {},
  loginData: {},
  loadMyInfoLoading: false, // my user info
  loadMyInfoDone: false,
  loadMyInfoError: null,
  signupLoading: false, // 회원가입 시도중
  signupDone: false,
  signupError: null,
  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,
  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
  followLoading: false, // follow
  followDone: false,
  followError: null,
  unfollowLoading: false, // unfollow
  unfollowDone: false,
  unfollowError: null,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
