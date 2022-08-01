import { useEffect, useState } from "react";
import { AccountList } from "../cmps/accounts-list";
import { Friend, User } from "../models/user.model";
import { chatRoomService } from "../services/chat-room.service";
import { socketService } from "../services/socket.service";
import { userService } from "../services/user.service";

export const Search = () => {
  const [users, setUsers] = useState([] as User[]);
  useEffect(() => {
    loadAccounts();
  }, []);
  const loadAccounts = async () => {
    const users = (await userService.getUsers()) as User[];
    const loggedUser = userService.getLoggedinUser() as User;
    const notMyFriendsUsers = users.filter((user) => {
      return !loggedUser.friends.some((friend) => friend._id === user._id);
    });
    if (loggedUser.friends.length === 0) setUsers(users);
    else setUsers(notMyFriendsUsers);
  };
  const onAdd = async (friendToAdd: User) => {
    const loggedUser = userService.getLoggedinUser();
    if (
      loggedUser.friends.some((friend: any) => friend._id === friendToAdd._id)
    ){
      return
    }
    const chatRoom = await chatRoomService.addChatRoom(loggedUser, friendToAdd);
    if (!chatRoom?._id) return console.error("chat room saved with not id");
    loggedUser.friends.push(makeFriend(friendToAdd, chatRoom._id));
    const userToAdd = await userService.getById(friendToAdd._id);
    userToAdd.friends.push(makeFriend(loggedUser, chatRoom._id));

    await userService.update(loggedUser);
    const userAdded = await userService.update(userToAdd);
    socketService.emit("add-friend", userAdded);
    setUsers((prevUsers) => [
      ...prevUsers.filter((user) => user._id !== userAdded._id),
    ]);
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
      <h1>Add more friends just click them</h1>
      <AccountList users={users} onAdd={onAdd} />
    </div>
  );
};
