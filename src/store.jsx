import {configureStore} from "@reduxjs/toolkit";
import messageReducer from "./slice/messageSlice";
import wishReducer from "./slice/wishSlice";


export const store = configureStore({
    reducer: {
        message: messageReducer,
        wishlists: wishReducer
    }
})