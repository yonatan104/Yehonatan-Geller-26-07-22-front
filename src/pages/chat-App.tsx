import { AppHeader } from "../cmps/app-header";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./chat-page";
import { MyFriends } from "./my-friends-page";
import { Search } from "./search-page";
import { useEffect } from "react";
import { socketService } from "../services/socket.service";
import { userService } from "../services/user.service";
import { User } from "../models/user.model";
export const ChatApp = () => {
    useEffect(() => {
      socketService.on("someone-added-me", onRefreshLoggedUser);
    }, []);
    const onRefreshLoggedUser = (user:User) =>{
      userService.refreshLoggedUser(user);
    }
  return (
    <div className="chat-app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="friends" element={<MyFriends />} />
        <Route path="search" element={<Search />} />
        <Route path="friends/:friendId/:chatRoomId" element={<Chat />} />
      </Routes>
    </div>
  );
};
