import { configureStore } from "@reduxjs/toolkit";
import order_by_pymnt_type_SLICE from "./Slices/order_by_pymnt_type";


export const sotre = configureStore({
    reducer: {
        OrderPymntTypeSlice: order_by_pymnt_type_SLICE,
    }
})