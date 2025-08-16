import { configureStore } from "@reduxjs/toolkit";
// import Dispacting_system_redux from "./Slices/Dispacting_system_redux";
import persistedReducer from "./Redux_persist/Main";
import persistStore from "redux-persist/es/persistStore";
import { Dispacting_system_redux_SLice } from "./Slices/Dispacting_system_redux";

export const sotre = configureStore({
    reducer: {
        Dispacting_system_redux_SLice: persistedReducer,
    }
})
export const persistor = persistStore(sotre)
