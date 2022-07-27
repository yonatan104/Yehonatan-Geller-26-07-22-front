import { useEffect, useState } from "react";
import { AccountList } from "../cmps/accounts-list";
import { User } from "../models/user.model";
import { userService } from "../services/user.service";
type usersProps = {
  users: User[];
};
export const Search = () => {
  const [users, setUsers] = useState([] as User[]);
  useEffect(() => {
    loadAccounts();
  }, []);
  const loadAccounts =async () => {
    const users = await userService.getUsers();
    setUsers(users);
    console.log("🚀 ~ file: search-page.tsx ~ line 13 ~ loadAccounts ~ users", users)
  };
  return <div className="search-page-contatiner">
    <AccountList users={users} />
    </div>;
};
