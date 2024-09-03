import { configureStore } from "@reduxjs/toolkit";
import updateProductsReducer from "./actions/products/ProductsSlice";

const store = configureStore({
  reducer: {
    updateProducts: updateProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
