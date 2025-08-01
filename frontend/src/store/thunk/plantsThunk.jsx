import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATHS } from "../../services/api/index.jsx";

export const getAllPlants = createAsyncThunk( 
   'plants/getAllPlants',
   async (_ , { rejectWithValue }) => {
    try{
       const response = await fetch(API_PATHS.DATA_PLANTS, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
       })

       if(!response.ok) {
        throw new Error ('ERROR!!!')
       }
       const data = await response.json();

       return data
    }
     catch(e) {
         return rejectWithValue(e.message)
     }
   }
)