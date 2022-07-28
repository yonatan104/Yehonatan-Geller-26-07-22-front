import { Friend } from "../models/user.model";

type FriendProps = {
  friend: Friend;
};
export const FriendPreview = ({friend}:FriendProps) => {
  return <div className="friend-preview-container">{friend.username}</div>;
};
