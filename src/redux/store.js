
import { createStore, combineReducers } from "redux";
import phoneReducer from "./phones/phoneReducer";


const rootReducer = combineReducers({
        phones: phoneReducer, 
})



const store = createStore(rootReducer)




export default store