import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChatFooter } from "../cmps/chat-footer";
import { ChatHeader } from "../cmps/chat-header";
import { MessageList } from "../cmps/message-list";
import { ChatRoom, Message } from "../models/chat-room.model";
import { User } from "../models/user.model";
import { chatRoomService } from "../services/chat-room.service";
import { socketService } from "../services/socket.service";
import { userService } from "../services/user.service";
import { utilService } from "../services/util.service";

export const Chat = () => {
  const [chatRoom, setChatRoom] = useState({} as ChatRoom);
  const [user, setUser] = useState({} as User);
  const params = useParams();
  useEffect(() => {
    loadChatRoom();
  }, []);
  useEffect(() => {
    socketService.on("new-message", onSetChatRoom);
  }, []);

  const onSetChatRoom = async (chatRoom: SetStateAction<ChatRoom>) => {
    setChatRoom(chatRoom);
  };
  const loadChatRoom = async () => {
    try {
      const { friendId, chatRoomId } = params;
      if (!friendId || !chatRoomId)
        return console.error("There is not id in params");
      const user = await userService.getById(friendId);
      const chatRoomFromData = await chatRoomService.getById(chatRoomId);
      setChatRoom(chatRoomFromData);
      setUser(user);
    } catch (error) {
      console.error("Can not load chat room", error);
    }
  };
  const onSendMsg = async (text: string) => {
    const loggedUser = userService.getLoggedinUser();
    if (text === "") return;
    const message = {
      _id: utilService.makeId(),
      createAt: Date.now(),
      text: text,
      fromUser: {
        username: loggedUser.username,
        imgUrl: loggedUser.imgUrl,
        userId: loggedUser._id,
      },
    } as Message;
    const chatRoomTosend = chatRoom;
    chatRoomTosend.messages.push({ ...message });
    socketService.emit("send-message", chatRoomTosend);
    const savedChatRoom = await chatRoomService.save(chatRoomTosend);
    setChatRoom(savedChatRoom);
  };
  if (!chatRoom || !chatRoom.messages) return <div>loading...</div>;
  return (
    <div className="chat-page-container">
      <div className="chat-page">
        <ChatHeader user={user} />
        <MessageList messages={chatRoom.messages} />
        <ChatFooter sendMsg={onSendMsg} />
      </div>
    </div>
  );
};
