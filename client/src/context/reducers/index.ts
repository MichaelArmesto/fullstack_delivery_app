import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";

const myReducers = combineReducers({
    user: userReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof myReducers>;

export default myReducers;