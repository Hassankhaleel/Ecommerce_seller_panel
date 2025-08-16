import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import { orderby } from '../Rediux_main'
import Dispacting_system_redux_SLice from '../Slices/Dispacting_system_redux'
import { sotre } from '../Rediux_main'
const persisirConfig = {
    key: "persist-key",
    storage,
    whitelist: ['value']
}

// export const persistor = persistStore(sotre);
const persistedReducer = persistReducer(persisirConfig, Dispacting_system_redux_SLice)
export default persistedReducer