import { configureStore } from "@reduxjs/toolkit";
import { headerReducer } from "../headerToggler/headerPart";
import rootReducer from "../rootReducer";
export const store= configureStore({
    reducer:{
        header:rootReducer
    },
})

