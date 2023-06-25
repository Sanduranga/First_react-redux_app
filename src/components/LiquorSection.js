import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { blackLableAdd, blackLableSell, redWineAdd, redWineSell, roseWineAdd, roseWineSell } from "../redux/liquors/liquorAction"

export default function LiquorSection() {

    const availableRedWines = useSelector((state) => state.liquors.noOfRedWines)

    const availableRoseWines = useSelector((state) => state.liquors.noOfRoseWines)

    const availableBlackLables = useSelector((state) => state.liquors.noOfBlackLables)


    const dispatch = useDispatch()

    const handleClick = (pressType,brandType) => {
        switch (true) {
            case(pressType==="add" && brandType=== "redWine"):
                dispatch(redWineAdd(1))
                break
            case(pressType==="sell" && brandType=== "redWine"):
                dispatch(redWineSell(1))
                break
            case(pressType==="add" && brandType=== "roseWine"):
                dispatch(roseWineAdd(1))
                break
            case(pressType==="sell" && brandType=== "roseWine"):
                dispatch(roseWineSell(1))
                break
            case(pressType==="add" && brandType=== "blackLable"):
                dispatch(blackLableAdd(1))
                break
            case(pressType==="sell" && brandType=== "blackLable"):
                dispatch(blackLableSell(1))
                break
        
            default:
                
        }
    }

    return (
        <div>
            <h2>Available liquor types :</h2>
              <h3>Red Wines : {availableRedWines}
                <button onClick={() => {handleClick("add","redWine")} }>Add</button>
                <button onClick={() => {handleClick("sell","redWine")} }>Sell</button>
              </h3>
              <h3>Rose Wines : {availableRoseWines}
                <button onClick={() => {handleClick("add","roseWine")} }>Add</button>
                <button onClick={() => {handleClick("sell","roseWine")} }>Sell</button>
              </h3>
              <h3>Black Lables : {availableBlackLables}
                <button onClick={() => {handleClick("add","blackLable")} }>Add</button>
                <button onClick={() => {handleClick("sell","blackLable")} }>Sell</button>
              </h3>  
            
        </div>
    )
}