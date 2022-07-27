// import { storageService } from './async-storage.service'
// import { socketService } from './socket.service'
import { User } from '../models/user.model'
import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  saveLocalUser,
  getUsers,
  getById,
  remove,
  update,
}


function getUsers() {
  return httpService.get(`user`, { logedInUserId:getLoggedinUser()._id } )
}

async function getById(userId:string) {
  const user = await httpService.get(`user/${userId}`)
  return user
}
function remove(userId: string) {
  return httpService.delete(`user/${userId}`)
}

async function update(user: User) {
  user = await httpService.put(`user/${user._id}`, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) saveLocalUser(user)
  return user
}

async function login(userCred:{username:string, password:string}) {
  const user = await httpService.post('auth/login', userCred)
  // socketService.emit('set-user-socket', user._id);
  if (user) {
    // socketService.login(user._id)
    return saveLocalUser(user)
  }
}
async function signup(userCred: User) {
  console.log("🚀 ~ file: user.service.ts ~ line 49 ~ signup ~ userCred", userCred)
  const user = await httpService.post('auth/signup', userCred)
  // socketService.emit('set-user-socket', user._id);
  return saveLocalUser(user)
}
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  // socketService.emit('unset-user-socket');
  return await httpService.post('auth/logout')
}



function saveLocalUser(user: User) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
