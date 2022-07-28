import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChatFooter } from "../cmps/chat-footer";
import { MessageList } from "../cmps/message-list";
import { ChatRoom, Message } from "../models/chat-room.model";
import { chatRoomService } from "../services/chat-room.service";
import { userService } from "../services/user.service";
import { utilService } from "../services/util.service";

export const Chat = () => {
    const [chatRoom,setChatRoom] = useState({}as ChatRoom)
    const [user, setUser] = useState(null);
    const params = useParams();
  useEffect(() => {
    loadChatRoom();
  },[]);
  const loadChatRoom = async () => {
    try {
      const {friendId, chatRoomId} = params
        if (!friendId || !chatRoomId)return console.error("There is not id in params");
        const user = await userService.getById(friendId);
        console.log("🚀 ~ file: chat-page.tsx ~ line 19 ~ loadChatRoom ~ user", user)
        const chatRoomFromData = await chatRoomService.getById(chatRoomId);
        console.log("🚀 ~ file: chat-page.tsx ~ line 16 ~ loadChatRoom ~ chatRoomFromData", chatRoomFromData)
        setChatRoom(chatRoomFromData);
        setUser(user);
    } catch (error) {
        console.error('Can not load chat room', error);
    }
  };
  const onSendMsg = (text:string) =>{
    const loggedUser = userService.getLoggedinUser()
    if (text === '') return 
    const message = {
      _id: utilService.makeId(),
      createAt:Date.now(),
      text:text,
      fromUser:{
        username:loggedUser.username,
        imgUrl:loggedUser.imgUrl,
        userId:loggedUser._id,
      } 
    } as Message;
    const chatRoomTosend = chatRoom
    chatRoomTosend.messages.push({ ...message });
    console.log("🚀 ~ file: chat-page.tsx ~ line 46 ~ onSendMsg ~ chatRoomTosend", chatRoomTosend)

    // this.webSocketService.emit('send-message', this.chatRoom)
    chatRoomService.save(chatRoomTosend);
  }
  if (!chatRoom||!chatRoom.messages) return <div>loading...</div>;
  return (
    <div className="chat-page-container">
      <MessageList messages={chatRoom.messages} />
      <ChatFooter sendMsg={onSendMsg} />
    </div>
  );
};
