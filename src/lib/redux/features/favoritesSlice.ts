import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as number[],
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.indexOf(action.payload);

      if (index >= 0) state.splice(index, 1);
      else state.push(action.payload);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
