import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./domain/cartSlice";
import productsReducer from "./domain/productsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
