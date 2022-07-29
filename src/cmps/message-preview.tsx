import { useEffect, useState } from "react";
import { Message } from "../models/chat-room.model";
import { userService } from "../services/user.service";
import { utilService } from "../services/util.service";

type MessageProps = {
  message: Message;
}
export const MessagePreview = ({ message }: MessageProps) => {
  const [messageContent, setMessageContent] = useState('')
  const [messageContainer, setMessageContainer] = useState("");
  useEffect(()=>{
    if (message &&userService.getLoggedinUser()._id !== message.fromUser.userId) {
      setMessageContent("incoming-message");
      setMessageContainer("incoming-message-container");
    }
  },[])
  const getTime =(date:Number)=>{
    return utilService.dateToString(date)
  }
return (
  <div className={`message-container ${messageContainer}`}>
    <div className={`message-content ${messageContent}`}>
      <div className="text">{message.text}</div>
      {message.createAt&&<div className="time">{getTime(message.createAt)}</div>}
    </div>
  </div>
);
}
