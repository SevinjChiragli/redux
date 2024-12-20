import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import bagSlice from "./slices/bagSlice";
import ordersSlice from "./slices/ordersSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        bag: bagSlice,
        orders:ordersSlice
    }
})

export default store