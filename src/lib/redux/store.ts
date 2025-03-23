import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cartSlice";
import favoritesReducer from "./features/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorites"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          ignoredPaths: ["register"],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
export type AppStore = ReturnType<typeof makeStore>["store"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
