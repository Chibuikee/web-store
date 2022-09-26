import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
function findItemInCart(state, product) {
  return state.find((item) => item.id === product.id);
}
export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    AddToWishList: (state, action) => {
      return [action.payload];
    },
    RemoveFromWishList: (state, action) => {
      const insideList = findItemInCart(action.payload);
      if (insideList) {
        const udpatedList = state.filter(
          (item) => item.id !== action.payload.id
        );
        return udpatedList;
      } else {
        return state;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToWishList, RemoveFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
