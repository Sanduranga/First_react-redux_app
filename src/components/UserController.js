import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPhone, sellPhone } from '../redux/phones/phoneAction'

export default function UserControler() {

    const noOfAvailablePhones = useSelector((state) => {
        return state.phones.noOfPhones
    })

    const dispatch = useDispatch()

    const handleClick = (pressType) => {
        pressType == "add"? dispatch(addPhone(1)) : dispatch(sellPhone(1))

    }

    return (
        <div>
            <h2>No of available Phones</h2>
            <div>{noOfAvailablePhones}</div>
            <button onClick={() => {handleClick("add")} }>Add</button>
            <button onClick={() => {handleClick("sell")} }>Sell</button>
        </div>
    )
}