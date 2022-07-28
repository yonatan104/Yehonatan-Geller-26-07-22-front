import { Message } from "../models/chat-room.model";

type MessageProps = {
  message: Message;
}
export const MessagePreview = ({ message }: MessageProps) => {
return <div className="message-container">
<div className="message-content {{messageContent}}">
        <div className="text">{message.text}</div>
        {/* <div className="time">{message.createAt| date:'shortTime'}</div> */}
    </div>
</div>;
}
