import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.filter((books) => {
        return books.id !== action.payload;
      });
    },
  },
});
export default FavoritesSlice.reducer;
export const { addFavorites, removeFavorite } = FavoritesSlice.actions;
