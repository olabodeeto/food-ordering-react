import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import loginReducer from "./LoginSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    isLogin: loginReducer,
  },
});
