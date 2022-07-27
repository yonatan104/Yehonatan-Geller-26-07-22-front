export interface User{
    _id: string
    username: string
    fullName: string
    password?: string
    imgUrl:string
    chatRoomsIds: string[]
    isAdmin:false
}