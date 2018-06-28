import {WALLET_VALUE} from '../constants/validation'

const initialState = '';


export default function walletValue(state = initialState, action) {
    switch (action.type) {
        case WALLET_VALUE:
            return action.payload;
        default :
            return state
    }
}