import { Friend, User } from "../models/user.model";
import { AccountPreview } from "./account-preview";
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
          <AccountPreview user ={friend} type={'Click me!! lets chat!'}/>
        </div>
      ))}
    </div>
  );
};
