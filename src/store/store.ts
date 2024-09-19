import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { basketReducer } from "@/store/reducers/basket/basketSlice";
import { favoritesReducer } from "@/store/reducers/favorites/favoritesSlice";
import { orderReducer } from "@/store/reducers/order/orderSlice";

const rememberedReducers = ["basket", "favorites", "order"];

const rootReducer = combineReducers({
  basket: basketReducer,
  favorites: favoritesReducer,
  order: orderReducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(
      rememberEnhancer(window.sessionStorage, rememberedReducers)
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
