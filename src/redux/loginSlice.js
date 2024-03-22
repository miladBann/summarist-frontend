import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}

export const loggedInSlice = createSlice({
    name: "loggedIn",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },

        logout: (state) => {
            state.loggedIn = false;
        }
    }
})

export const {login, logout} = loggedInSlice.actions;
export default loggedInSlice.reducer;