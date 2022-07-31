import { useEffect, useState } from "react";
import { AdminUsersList } from "../cmps/admin-users-list";
import { User } from "../models/user.model";
import { userService } from "../services/user.service";

export const Admin = () => {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const users = (await userService.getUsers()) as User[];
    setUsers(users);
  };
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
