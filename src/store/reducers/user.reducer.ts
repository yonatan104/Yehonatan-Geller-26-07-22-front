import { userService } from '../../services/user.service'
import { User } from '../../models/user.model'
const initialState = {
    msg: null as any,
    user: userService.getLoggedinUser() as User,
    users: [] as User[],
}

export function userReducer(state = initialState, action: { type: string; user: User; userId: string; users: User[]; msg: any  }) {
    var newState = state
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break
        case 'REMOVE_USER':
            newState = {
                ...state,
                users: state.users.filter(user => {
                    return user._id !== action.userId;
                }),
            }
            break
        case 'SET_USERS':
            newState = { ...state, users: action.users }
            break
        case 'SET_MSG':
            newState = { ...state, msg: action.msg }
            break
        default:
    }

    return newState
}
