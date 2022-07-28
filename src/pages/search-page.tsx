import { useEffect, useState } from "react";
import { AccountList } from "../cmps/accounts-list";
import { ChatRoom } from "../models/chat-room.model";
import { Friend, User } from "../models/user.model";
import { chatRoomService } from "../services/chat-room.service";
import { socketService } from "../services/socket.service";
import { userService } from "../services/user.service";
type usersProps = {
  users: User[];
};
export const Search = () => {
  const [users, setUsers] = useState([] as User[]);
  useEffect(() => {
    loadAccounts();
  }, []);
  const loadAccounts = async () => {
    const users = await userService.getUsers();
    setUsers(users);
  };
  const onAdd = async (userToAdd: User) => {
    const loggedUser = userService.getLoggedinUser();
    const chatRoom = await chatRoomService.addChatRoom(loggedUser, userToAdd);
    if (!chatRoom?._id) return console.error("chat room saved with not id");
    loggedUser.friends.push(makeFriend(userToAdd, chatRoom._id));
    console.log("🚀 ~ file: search-page.tsx ~ line 24 ~ onAdd ~ loggedUser", loggedUser)
    userToAdd.friends.push(makeFriend(loggedUser, chatRoom._id));
    console.log("🚀 ~ file: search-page.tsx ~ line 25 ~ onAdd ~ userToAdd", userToAdd)
    await userService.update(loggedUser);
    const userAdded =  await userService.update(userToAdd);
    socketService.emit("add-friend", userAdded);
  };
  const makeFriend = (user: User, chatRoomId: string) => {
    return {
      _id: user._id,
      username: user.username,
      imgUrl: user.imgUrl,
      sharedChatRoomId: chatRoomId,
    } as Friend;
  };

  return (
    <div className="search-page-contatiner">
      <h3>Add more friends just click them</h3>
      <AccountList users={users} onAdd={onAdd} />
    </div>
  );
};
