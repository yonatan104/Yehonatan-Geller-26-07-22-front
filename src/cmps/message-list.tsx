import { Message } from "../models/chat-room.model";
import { MessagePreview } from "./message-preview";
type MessageProps = {
  messages:Message[]
};
export const MessageList = ({ messages }: MessageProps) => {
  return (
    <div className="message-list-container">
      {messages.map((message) => (
        <div key={message._id}>
          <MessagePreview message={message} />
        </div>
      ))}
    </div>
  );
};