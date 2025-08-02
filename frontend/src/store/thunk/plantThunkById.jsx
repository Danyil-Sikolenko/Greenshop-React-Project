import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATHS } from "../../services/api";

export const getPlantById = createAsyncThunk(
  'plants/getById',
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${API_PATHS.DATA_PLANTS}/${id}`);
      if (!response.ok) throw new Error('Plant is not difined');
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);