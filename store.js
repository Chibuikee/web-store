import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import cartSlice from "./slices/Cart";
import wishListSlice from "./slices/Wishlist";
import StoreData from "./slices/StoreData";
const combinedReducer = combineReducers({
  cart: cartSlice,
  wishList: wishListSlice,
  mainData: StoreData,
});
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, mainData: [...action.payload.mainData] };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });
export const wrapper = createWrapper(makeStore);
