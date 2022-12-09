import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";
import locationReducer from "./locationSlice";
import categoryReducer from "./categorySlice";
import stateReducer from "./stateSlice";
import collectionReducer from "./collectionSlice";
import colorReducer from "./colorSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
    location: locationReducer,
    categories: categoryReducer,
    states: stateReducer,
    collections: collectionReducer,
    colors: colorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
