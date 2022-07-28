import { PropsWithChildren } from "react";
import { User } from "../models/user.model";
import { AccountPreview } from "./account-preview";
type UsersProps = {
  users: User[];
  onAdd: Function;
};
export const AccountList = ({ users, onAdd }: UsersProps) => {
  return (
    <div className="account-list">
      {users.map((user) => (
        <div onClick={() => onAdd(user)} key={user._id}>
          <AccountPreview user={user} />
        </div>
      ))}
    </div>
  );
};
