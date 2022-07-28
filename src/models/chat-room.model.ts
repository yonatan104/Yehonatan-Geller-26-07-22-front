export class ChatRoom {

    constructor(
        public usersIds: string[],
        public messages: Message[],
        public _id?: string,
    ) {

    }
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

