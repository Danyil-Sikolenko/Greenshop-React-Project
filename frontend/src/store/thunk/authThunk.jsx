import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATHS } from "../../services/api";

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch(API_PATHS.LOGIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

              if(!response.ok) {
                throw new Error ('ERROR')
            }

            const data = await response.json()
            return data
        }
        catch (e){
            return rejectWithValue(e.message)
        }
    }
) 


export const signUp = createAsyncThunk(
    "auth/signup",
    async ( {name , email , password }, { rejectWithValue } ) => {
        try{
            const response = await fetch(API_PATHS.SIGNUP, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                 body: JSON.stringify({ name, email, password }),
            } )
            if(!response.ok) {
                throw new Error ('ERROR')
            }
            const data = await response.json()
            return data
        }
        catch(e){
             return rejectWithValue(e.message)

        }
    }
)