import { useEffect, useState } from "react";
import { FriendsList } from "../cmps/friend-list";
import { userService } from "../services/user.service";

export const MyFriends = () => {
  const [friends, setFreinds] = useState([]);
  useEffect(() => {
    loadFriends();
  }, []);
  const loadFriends = async () => {
    setFreinds(userService.getLoggedinUser().friends);
  };
  return (
    <div className="my-friends-page-container">
      <FriendsList friends={friends}/>
    </div>
  );
};
