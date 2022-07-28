export interface User {
    _id: string
    username: string
    fullName: string
    password?: string
    imgUrl: string
    chatRoomsIds: string[]
    friends: Friend[]
    isAdmin: false
}
export interface Friend {
    _id: string
    username: string
    imgUrl: string
    sharedChatRoomId: string
}