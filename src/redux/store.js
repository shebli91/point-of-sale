import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import unitReducer from "./reducers/unitReducer";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    unit: unitReducer,
    cart: cartReducer,
  },
});

export default store;
