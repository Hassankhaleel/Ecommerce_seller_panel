import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import { orderby } from '../Rediux_main'
import order_by_pymnt_type_SLICEs from '../Slices/order_by_pymnt_type'
import { sotre } from '../Rediux_main'
const persisirConfig = {
    key: "persist-key",
    storage,
    whitelist: ['value']
}

// export const persistor = persistStore(sotre);
const persistedReducer = persistReducer(persisirConfig, order_by_pymnt_type_SLICEs)
export default persistedReducer