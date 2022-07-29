import { AnyAction } from 'redux'
import { User } from '../../models/user.model'
import { userService } from '../../services/user.service'

// export function loadAccounts() {
//     return async (dispatch: any) => {
//         try {
//             dispatch({ type: 'LOADING_START' })
//             const users = await userService.getUsers() as User[]
//             const loggedUser = userService.getLoggedinUser() as User
//             const notMyFriendsUsers = users.filter(user => {
//                 return !loggedUser.friends.some(friend => friend._id === user._id)
//             })
//             if (loggedUser.friends.length === 0) dispatch({ type: 'SET_USERS', users })
//             else dispatch({ type: 'SET_USERS', notMyFriendsUsers })
//         } catch (err) {
//             console.log('UserActions: err in loadUsers', err)
//         } finally {
//             dispatch({ type: 'LOADING_DONE' })
//         }
//     }
// }

// export function removeUser(userId: string) {
//     return async (dispatch: any) => {
//         try {
//             await userService.remove(userId)
//             dispatch({ type: 'REMOVE_USER', userId })
//         } catch (err) {
//             console.log('UserActions: err in removeUser', err)
//         }
//     }
// }

// export function onLogin(credentials: any) {
//     return async (dispatch: any) => {
//         const user = await userService.login(credentials)
//         dispatch({
//             type: 'SET_USER',
//             user,
//         })
//     }
// }

// export function onSignup(credentials: User) {
//     return async (dispatch: any) => {
//         try {
//             const user = await userService.signup(credentials)
//             dispatch({
//                 type: 'SET_USER',
//                 user,
//             })
//         } catch (err) {
//             console.log('Cannot signup', err)
//         }
//     }
// }

// export function onLogout() {
//     return async (dispatch) => {
//         try {
//             await userService.logout()
//             dispatch({
//                 type: 'SET_USER',
//                 user: null,
//             })
//         } catch (err) {
//             console.log('Cannot logout', err)
//         }
//     }
// }

// export function setUserMsg(msg) {

//     return (dispatch) => {
//         dispatch({
//             type: 'SET_MSG',
//             msg,
//         })
//     }
// }
