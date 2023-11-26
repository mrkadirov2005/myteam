import { combineReducers } from "@reduxjs/toolkit";
import { headerReducer } from "./headerToggler/headerPart";

const rootReducer=combineReducers({header:headerReducer.reducer})
export default rootReducer