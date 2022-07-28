import { ChatRoom } from "../models/chat-room.model"
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
        chatRoomToSave.usersIds = [
            loggedUser._id as string,
            secondUser._id as string,
        ];
        const savedChatRoom = await save(chatRoomToSave);
        return savedChatRoom as ChatRoom
    } catch (error) {
        console.error("can not add chat room", error);
    }
};

function getEmptyChatRoom() {
    return {
        usersIds: [],
        messages: []
    }
}