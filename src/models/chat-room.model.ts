export class ChatRoom {

    constructor(
        public miniUsers: miniUser[],
        public messages: Message[],
        public _id?: string,
    ) {

    }
}
export interface miniUser{
    username:string
    fullName: string
    _id: string
    imgUrl: string
}
export interface Message {
    _id?: string
    fromUser: {
        username: string
        imgUrl: string
        userId: string
    }
    text: string
    createAt?: number
}

