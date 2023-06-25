import { add_black_lable, add_red_wine, add_rose_wine, sell_black_lable, sell_red_wine, sell_rose_wine } from "./liquorActionTypes"




export function redWineAdd(noOfLiquor) {
     return {
        type: add_red_wine,
        payload: noOfLiquor
    }
}

export function roseWineAdd(noOfLiquor) {
     return {
        type: add_rose_wine,
        payload: noOfLiquor
    }
}

export function blackLableAdd(noOfLiquor) {
     return {
        type: add_black_lable,
        payload: noOfLiquor
    }
}


export function redWineSell(noOfLiquor) {
    return {
       type: sell_red_wine,
       payload: noOfLiquor
   }
}

export function roseWineSell(noOfLiquor) {
    return {
       type: sell_rose_wine,
       payload: noOfLiquor
   }
}

export function blackLableSell(noOfLiquor) {
    return {
       type: sell_black_lable,
       payload: noOfLiquor
   }
}