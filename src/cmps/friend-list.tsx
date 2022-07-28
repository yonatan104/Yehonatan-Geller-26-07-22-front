import { Friend } from "../models/user.model";
import { FriendPreview } from "./friend-preview";

type FriendsProps = {
  friends: Friend[];
};
export const FriendsList = ({ friends }: FriendsProps) => {
  return (
    <div className="friends-list-container">
      {friends.map((friend) => (
        <div key={friend._id}>
          <FriendPreview friend={friend} />
        </div>
      ))}
    </div>
  );
};
