import { configureStore } from "@reduxjs/toolkit";
import order_by_pymnt_type_SLICE from "./Slices/order_by_pymnt_type";
import persistedReducer from "./Redux_persist/Main";
import persistStore from "redux-persist/es/persistStore";

export const sotre = configureStore({
    reducer: {
        OrderPymntTypeSlice: persistedReducer,
    }
})
export const persistor = persistStore(sotre)
