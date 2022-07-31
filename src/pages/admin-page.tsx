import { useEffect, useState } from "react";
import { AdminUsersList } from "../cmps/admin-users-list";
import { MiniChatRoom } from "../models/chat-room.model";
import { User } from "../models/user.model";
import { chatRoomService } from "../services/chat-room.service";
import { userService } from "../services/user.service";

export const Admin = () => {
  const [users, setUsers] = useState([] as User[]);
  const [chatRooms, setChatRooms] = useState([] as MiniChatRoom[]);

  useEffect(() => {
    loadUsers();
    loadChatRooms()
  }, []);
  const loadUsers = async () => {
    const users = (await userService.getUsers()) as User[];
    setUsers(users);
  };

  const loadChatRooms = async ()=>{
    const chatRooms = await chatRoomService.query()
    console.log("🚀 ~ file: admin-page.tsx ~ line 23 ~ loadChatRooms ~ chatRooms", chatRooms)
    
    setChatRooms(chatRooms)
  }
  
  const onRemove = async (userId: string) => {
    try {
      await userService.remove(userId);
    } catch (error) {
      console.error('can not delete this user')
    }
  };
  return (
    <div className="admin-page-container">
      <AdminUsersList users={users} onRemove={onRemove} />
    </div>
  );
};
