import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/HeaderSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;