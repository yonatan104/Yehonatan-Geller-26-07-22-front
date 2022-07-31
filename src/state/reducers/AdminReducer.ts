import { userService } from "../../services/user.service";
import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = 0;

const reducer = async (state: number = initialState, action: Action): Promise<number> => {
    switch (action.type){
        case ActionType.LOADUSERS:
            const users = await userService.getUsers();
            return users
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state
    }
}

export default reducer