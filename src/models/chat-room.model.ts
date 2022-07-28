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
        name: string
        imgUrl: string
        userId: string
    }
    text: string
    createAt?: number
}

