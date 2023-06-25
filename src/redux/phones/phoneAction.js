import {add_phone, sell_phone} from './actionType'


export function addPhone(noOfPhones) {
    return {
        type: add_phone,
        payload: noOfPhones,
    }
}

export function sellPhone(noOfPhones) {
    return {
        type: sell_phone,
        payload: noOfPhones,
    }
}