import { combineReducers } from "redux";
import { alaramlistReducer, chartReducer, firstReducer, wheelcountReducer } from "./reducer";


 export const appstate=  combineReducers({
    reduxdata:firstReducer,
    alaramreduxdata:alaramlistReducer,
    chartdata:chartReducer,
    wheelcount:wheelcountReducer
})