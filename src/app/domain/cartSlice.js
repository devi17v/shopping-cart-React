import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAdd(state, action) {
      state.products.push({
        ...action.payload,
        count: 1,
      });
    },
    cartRemove(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    cartUpdate(state, action) {
      const product = state.products.findIndex(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const cartCount = (state) => state.cart?.products?.length;

export const cartProduct = (state) => state.cart.products;

export const { cartAdd, cartRemove } = cartSlice.actions;

export default cartSlice.reducer;
