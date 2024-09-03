import { updateProducts } from "./ProductsSlice";
import store from "../../store";

export const fetchProducts = (): any => {
  return async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      store.dispatch(updateProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

