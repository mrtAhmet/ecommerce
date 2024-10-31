import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/itemCartSlice";

export const store = configureStore({
  reducer: {
    itemCart: cartReducer,
  },
});
