import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subscription: "Basic"
}

export const subscriptionSlice = createSlice({
    name: "subscription",
    initialState,
    reducers: {
        setPremium: (state) => {
            state.subscription = "Premium";
        },
    }
})

export const {setPremium, setPremiumPlus} = subscriptionSlice.actions;
export default subscriptionSlice.reducer;