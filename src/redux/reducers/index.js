// import { ADD_ARTICLE } from "../constants/types.js";
// import { truncate } from "fs";
import { combineReducers } from "redux";
import { authentication } from "./auth-reducer";

const rootReducer = combineReducers({ authentication });

export default rootReducer;
