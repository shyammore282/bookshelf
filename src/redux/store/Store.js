import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from "../slice/FavoritesSlice";

const Store = configureStore({
  reducer: {
    favorites: FavoritesSlice,
  },
});
export default Store;
