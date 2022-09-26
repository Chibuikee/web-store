import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
function findItemInCart(state, product) {
  return state.find((item) => item.id === product.id);
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const insideCart = findItemInCart(state, action.payload);
      if (insideCart) {
        const updatedCart = state.map((item) =>
          item.id === action.payload.id
            ? { ...action.payload, qty: item.qty + 1 }
            : item
        );
        return updatedCart;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const insideCart = findItemInCart(state, action.payload);
      if (insideCart) {
        const updatedCart = state.filter(
          (item) => item.id !== action.payload.id
        );
        return updatedCart;
      } else {
        return state;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
