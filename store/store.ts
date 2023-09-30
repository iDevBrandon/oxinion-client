import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import postSlice from "./features/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
