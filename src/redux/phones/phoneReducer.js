import { add_phone, sell_phone } from "./actionType";


const initialState = {
        noOfPhones: 20,
}

export default function phoneReducer(state = initialState, action) {

    switch(action.type) {
        case add_phone:
            return {
                ...state,
                noOfPhones: state.noOfPhones + action.payload,
            }
        case sell_phone:
            return {
                ...state,
                noOfPhones: state.noOfPhones - action.payload,
            }
        default:
            return state
    }
}

