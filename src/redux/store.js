
import { createStore, combineReducers } from "redux";
import phoneReducer from "./phones/phoneReducer";
import liquorReduser from "./liquors/liquorReducer";


const rootReducer = combineReducers({
        phones: phoneReducer,
        liquors: liquorReduser,
})



const store = createStore(rootReducer)




export default store