import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FriendsList } from "../cmps/friend-list";
import { Friend } from "../models/user.model";
import { userService } from "../services/user.service";

export const MyFriends = () => {
  const [friends, setFreinds] = useState([]);
  const navigate = useNavigate();
  const location =useLocation()
  useEffect(() => {
    loadFriends();
  }, []);
  const loadFriends = async () => {
    setFreinds(userService.getLoggedinUser().friends);
  };
  const enterChatRoom = (friend: Friend) => {
  
    navigate(`${friend._id}/${friend.sharedChatRoomId}`);
  };
  return (
    <div className="my-friends-page-container">
      <FriendsList friends={friends} enterChatRoom={enterChatRoom} />
    </div>
  );
};
