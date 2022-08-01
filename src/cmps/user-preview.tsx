import { User } from "../models/user.model";

type UserPreviewProps = {
  user: User;
  idx: number;
  onRemove: Function;
};
export const UserPreview = ({ user, idx, onRemove }: UserPreviewProps) => {
  return (
    <div className="user-preview-container">
      <div className="serial-number">{idx + 1}</div>
      <div className="avatar-container">
        <img src={user.imgUrl} alt="" />
      </div>
      <div className="full-name">{user.fullName}</div>
      <div className="friends-list-container-table">
        {user.friends.length > 0 &&
          user.friends.map((friend) => (
            <div className="friend-container" key={friend._id}>
              <div className="avatar-container">
                <img src={friend.imgUrl} alt="" />
              </div>
              <div className="friend-name">{friend.username}</div>
            </div>
          ))}
      </div>
      <div className="actions">
        <button onClick={() => onRemove(user._id)}>Remove</button>
        <button>Update</button>
      </div>
    </div>
  );
};
