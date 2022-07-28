import { Friend } from "../models/user.model";
import { FriendPreview } from "./friend-preview";

type FriendsProps = {
  friends: Friend[];
  enterChatRoom:Function
};
export const FriendsList = ({ friends, enterChatRoom }: FriendsProps) => {
  return (
    <div className="friends-list-container">
      {friends.map((friend) => (
        <div onClick={() => enterChatRoom(friend)} key={friend._id}>
          <FriendPreview friend={friend} />
        </div>
      ))}
    </div>
  );
};
