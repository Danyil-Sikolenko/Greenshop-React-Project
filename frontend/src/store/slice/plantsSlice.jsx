import { createSlice } from "@reduxjs/toolkit";
import { getAllPlants } from "../thunk/plantsThunk";

const initialState = {
  items: [],
  loading: false,
  error: null,
  categoriesCount: {}, // количество растений в каждой категории
  sizePlantsCount: {} //количество растений в каждом размере 
};

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;

        //  считаем количество категорий
        const countByCategory = {};
        action.payload.forEach((plant) => {
          const category = plant.category;
          countByCategory[category] = (countByCategory[category] || 0) + 1;
        });
        state.categoriesCount = countByCategory;

         //  считаем количество размеров 
        const countBySize = {};
        action.payload.forEach((plant) => {
          const size = plant.size;
          countBySize[size] = (countBySize[size] || 0)+ 1;
        })
        state.sizePlantsCount = countBySize
      })
      .addCase(getAllPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default plantsSlice.reducer;