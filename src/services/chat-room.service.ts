import { ChatRoom, miniUser } from "../models/chat-room.model"
import { User } from "../models/user.model"
import { httpService } from "./http.service"

export const chatRoomService = {
    getById,
    save,
    getEmptyChatRoom,
    addChatRoom,
}

async function getById(_id: string) {
    const chatRoom = await httpService.get(`chatRoom/${_id}`)
    return chatRoom
}

async function save(chatRoom: ChatRoom) {
    if (chatRoom._id) {
        const savedChatRoom = await httpService.put(`chatRoom/${chatRoom._id}`, chatRoom)
        return savedChatRoom
    } else {
        const savedChatRoom = await httpService.post('chatRoom', chatRoom)
        return savedChatRoom
    }
}

async function addChatRoom(loggedUser: User, secondUser: User) {
    try {
        const chatRoomToSave = getEmptyChatRoom() as ChatRoom;
        chatRoomToSave.miniUsers = [
            makeMiniUser(loggedUser),
            makeMiniUser(secondUser)
        ];
        const savedChatRoom = await save(chatRoomToSave);
        return savedChatRoom as ChatRoom
    } catch (error) {
        console.error("can not add chat room", error);
    }
};
function makeMiniUser(user: User){
    return {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        imgUrl: user.imgUrl,
    } as miniUser
}
function getEmptyChatRoom() {
    return {
        miniUsers: [],
        messages: []
    }
}