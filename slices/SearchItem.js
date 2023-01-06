import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const WholesearchSlice = createSlice({
  name: "Wholesearched",
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      return { ...state, brand: action.payload };
    },
  },
});
export const { selectedItem } = WholesearchSlice.actions;
export default WholesearchSlice.reducer;
