import { createSlice } from "@reduxjs/toolkit";
import { getPlantById } from "../thunk/plantThunkById";

const initialState = {
  plant: null,
  loading: false,
  error: null,
};

const plantByIdSlice = createSlice({
  name: "plantById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlantById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.plant = null;
      })
      .addCase(getPlantById.fulfilled, (state, action) => {
        state.loading = false;
        state.plant = action.payload;
      })
      .addCase(getPlantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.plant = null;
      });
  },
});

export default plantByIdSlice.reducer;