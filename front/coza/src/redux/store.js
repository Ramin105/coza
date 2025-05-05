import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./reducer/productSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
