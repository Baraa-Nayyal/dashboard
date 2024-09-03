import { createSlice } from "@reduxjs/toolkit";

interface UpdateProductsState {
  products: any[];
}

const initialState: UpdateProductsState = {
  products: [],
};

const updateProductsSlice = createSlice({
  name: "updateProducts",
  initialState,
  reducers: {
    updateProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { updateProducts } = updateProductsSlice.actions;

export default updateProductsSlice.reducer;
