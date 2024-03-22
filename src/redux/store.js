import {configureStore} from '@reduxjs/toolkit';
import { loggedInSlice } from './loginSlice';
import { fontSizeSlice } from './fontSizeSlice';
import {emailSlice} from "./userEmailSlice";
import { subscriptionSlice } from './subscription';
import { userIdSlice } from './userIDSlice';


export const store = configureStore({
    reducer: {
        loggedIn: loggedInSlice.reducer,
        fontSize: fontSizeSlice.reducer,
        email: emailSlice.reducer,
        subscription: subscriptionSlice.reducer,
        userID: userIdSlice.reducer
    },
});