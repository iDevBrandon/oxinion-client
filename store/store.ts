import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./features/slice";

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
