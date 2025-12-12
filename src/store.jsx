import {configureStore} from "@reduxjs/toolkit";

import wishReducer from "./Client/common/slice/wishSlice";
import messageReducer from "./Common/slice/messageSlice";


export const store = configureStore({
    reducer: {
        message: messageReducer,
        wishlists: wishReducer
    }
})