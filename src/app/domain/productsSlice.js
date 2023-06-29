import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "uninitialized",
  data: [],
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.error = action.error;
      });
  },
});

export const getProducts = (state) => state.products.data;

export const { productAdd } = productsSlice.actions;

export default productsSlice.reducer;
