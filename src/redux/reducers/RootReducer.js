import fetchUserReducer from "./FetchUserReducer";
import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
    user: userReducer,
    fetchUser: fetchUserReducer
})

export default rootReducer