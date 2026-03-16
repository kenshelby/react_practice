import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./catSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;