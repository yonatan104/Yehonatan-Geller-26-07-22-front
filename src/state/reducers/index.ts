import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer"


const reducers = combineReducers({
    AdminModule: AdminReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>