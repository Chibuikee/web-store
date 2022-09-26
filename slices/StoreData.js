import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const WholestoreSlice = createSlice({
  name: "Wholestore",
  initialState,
  reducers: {
    FetchedAllItems: (state, action) => {
      return [...action.payload];
    },
    UpdatedAllItems: (state, action) => {
      return [...state, action.payload];
    },
  },
});
export const { FetchedAllItems, UpdatedAllItems } = WholestoreSlice.actions;
export default WholestoreSlice.reducer;
