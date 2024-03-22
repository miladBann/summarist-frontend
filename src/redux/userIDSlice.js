import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userID: ""
}

export const userIdSlice = createSlice({
    name: "userID",
    initialState,
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        }
    }
})

export const {setUserID} = userIdSlice.actions;
export default userIdSlice.reducer;