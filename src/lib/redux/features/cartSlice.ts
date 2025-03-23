import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as number[],
  reducers: {
    toggleCart: (state, action) => {
      const index = state.indexOf(action.payload);

      if (index >= 0) state.splice(index, 1);
      else state.push(action.payload);
    },
  },
});

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
