import { MiniChatRoom } from "../models/chat-room.model";
import { ChatRoomPreview } from "./chat-room-preview";

type ChatRoomsListProps = {
  chatRooms: MiniChatRoom[]
};
export const ChatRoomsList = ({ chatRooms }: ChatRoomsListProps) => {
    return (
      <div className="chat-room-list-container">
        {chatRooms.map((chatRoom) => (
          <div key={chatRoom._id}>
            <ChatRoomPreview chatRoom={chatRoom}/>
          </div>
        ))}
      </div>
    );
};
