import { WALLET_VALUE } from '../constants/validation'

export function walletValue(value) {
    return {
        type: WALLET_VALUE,
        payload: {
            value
        }
    }
}
