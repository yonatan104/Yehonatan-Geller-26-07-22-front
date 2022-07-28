import { DefaultEventsMap } from '@socket.io/component-emitter'
import io, { Socket } from 'socket.io-client'
import { userService } from './user.service'



const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'localhost:3030'
export const socketService = createSocketService()

// for debugging from console
// window.socketService = socketService

socketService.setup()

function createSocketService() {
  let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null
  const socketService = {
    setup() {
      socket = io(baseUrl)
      setTimeout(() => {
        const user = userService.getLoggedinUser()
        if (user) {
          this.login(user._id)
        }
      }, 500)
    },
    on(eventName: any, cb: any) {
      socket?.on(eventName, cb)
    },
    off(eventName: any, cb = null) {
      if (!socket) return
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName: any, data: any) {
      socket?.emit(eventName, data)
    },
    login(userId: string) {
      socket?.emit('set-user-socket', userId)
    },
    logout() {
      socket?.emit('unset-user-socket')
    },
    terminate() {
      socket = null
    },
  }
  return socketService
}


