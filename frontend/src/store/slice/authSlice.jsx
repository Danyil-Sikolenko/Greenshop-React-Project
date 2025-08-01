import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../thunk/authThunk";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('user'))?.token || null,
    loading: false,
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null,
                state.token = null,
                localStorage.removeItem("user");
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true
                state.error = ''
            })
            .addCase((login.fulfilled), (state, action) => {
                state.loading = false,
                    state.error = '',

                    state.user = action.payload
                state.token = action.payload.token
                localStorage.setItem("user", JSON.stringify(action.payload))
            })
            .addCase((login.rejected), (state, action) => {
                state.loading = false,
                    state.error = 'Login Failed'
            })

            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = 'SignUp Failed';
            })

    }
})
export default authSlice.reducer

export const { logout, clearError } = authSlice.actions