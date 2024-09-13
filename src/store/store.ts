import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { basketReducer } from "@/store/reducers/basket/basketSlice";

const rememberedReducers = ["basket"];

const rootReducer = combineReducers({
  basket: basketReducer,
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
