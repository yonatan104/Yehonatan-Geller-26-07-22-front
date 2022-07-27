export interface User{
    _id: string
    username: string
    fullname: string
    password?: string
    imgUrl:string
    chatRoomsIds: string[]
    isAdmin:false
}