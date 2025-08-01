import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import plantsSlice from "./slice/plantsSlice";
import cartSlice from "./slice/cartSlice";
import favoritePlantsSlice from "./slice/favoritePlantsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        plants: plantsSlice,
        cart: cartSlice,
        favorite: favoritePlantsSlice
    }
})