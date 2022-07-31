import { MiniChatRoom } from "../models/chat-room.model";

type ChatRoomPreviewProps = {
  chatRoom: MiniChatRoom;
};
export const ChatRoomPreview = ({ chatRoom }: ChatRoomPreviewProps) => {
  return (
    <div className="chat-room-preview">
      <h3>ID: {chatRoom._id}</h3>
      <div className="users-container">
        {chatRoom.miniUsers.map((miniUser) => (
          <div className="mini-user-container" key={miniUser._id}>
            <div className="avatar-container">
              <img src={miniUser.imgUrl} alt="" />
            </div>
            <div className="user-name">{miniUser.fullName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
