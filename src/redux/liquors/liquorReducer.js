import { add_black_lable, add_red_wine, add_rose_wine, sell_black_lable, sell_red_wine, sell_rose_wine } from "./liquorActionTypes"



const initialState = {
    noOfRedWines: 10,
    noOfRoseWines: 15,
    noOfBlackLables: 25,
}
export default function liquorReduser(state = initialState, action) {

        switch(action.type) {
            case add_red_wine:
               return {
                ...state,
                    noOfRedWines: state.noOfRedWines + action.payload,
            }
            case add_rose_wine:
                return {
                    ...state,
                    noOfRoseWines: state.noOfRoseWines + action.payload,
                }
            case add_black_lable:
                return {
                    ...state,
                    noOfBlackLables: state.noOfBlackLables + action.payload,
                }
            case sell_red_wine:
               return {
                ...state,
                    noOfRedWines: state.noOfRedWines - action.payload,
            }
            case sell_rose_wine :
                return {
                    ...state,
                    noOfRoseWines: state.noOfRoseWines - action.payload,
                }
            case sell_black_lable:
                return {
                    ...state,
                    noOfBlackLables: state.noOfBlackLables - action.payload,
                }
            default:
                return state
        }
}
