import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.LOADUSERS,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction;