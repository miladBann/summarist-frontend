import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fontSize: "16px"
}

export const fontSizeSlice = createSlice({
    name: "fontSize",
    initialState,
    reducers: {
        extraSmall: (state) => {
            state.fontSize = "16px";
        },

        small: (state) => {
            state.fontSize = "18px";
        },

        big: (state) => {
            state.fontSize = "22px";
        },

        extraBig: (state) => {
            state.fontSize = "26px";
        }
    }
})

export const {extraSmall, small, big, extraBig} = fontSizeSlice.actions;
export default fontSizeSlice.reducer;