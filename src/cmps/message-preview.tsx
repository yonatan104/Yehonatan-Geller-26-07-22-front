import { Message } from "../models/chat-room.model";

type MessageProps = {
  message: Message;
}
export const MessagePreview = ({ message }: MessageProps) => {
return <div className="message-container">{message.text}</div>;
}
