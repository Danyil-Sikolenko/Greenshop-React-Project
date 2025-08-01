import { createSlice } from '@reduxjs/toolkit';

const favoritePlantslice = createSlice({
  name: 'favorite-Plants',
  initialState: [],
  reducers: {
    addItemLike: (state, action) => {
      const item = action.payload;
      const existing = state.find(i => i.id === item.id);
      if (!existing) {
        state.push(item);
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    clearCart: () => {
      return [];
    }
  }
});

export const { addItemLike, removeItem, clearCart ,} = favoritePlantslice.actions;
export default favoritePlantslice.reducer