import { combineReducers } from "@reduxjs/toolkit";
import { headerReducer } from "./headerToggler/headerPart";
// import user, { userReducer } from "./headerToggler/user";
import { Authreducer } from "./headerToggler/Auth";

const rootReducer=combineReducers({
    header:headerReducer.reducer,
    auth:Authreducer.reducer
})
export default rootReducer