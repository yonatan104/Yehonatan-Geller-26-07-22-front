import { AppHeader } from "../cmps/app-header";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./chat-page";
import { MyFriends } from "./my-friends-page";
import { Search } from "./search-page";
export const ChatApp = () => {
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
