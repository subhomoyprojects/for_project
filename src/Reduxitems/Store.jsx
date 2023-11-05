import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProductSlice from "./ProductSlice";
export const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Pro:ProductSlice.reducer,
  },
});
