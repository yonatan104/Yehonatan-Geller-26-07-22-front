import { useEffect, useState } from "react";
import { User } from "../models/user.model";
import { AccountPreview } from "./account-preview";
import { UserPreview } from "./user-preview";
type UsersProps = {
  users: User[];
  onRemove: Function;
  onOpenModal: Function;
};

export const AdminUsersList = ({ users, onRemove, onOpenModal }: UsersProps) => {
  return (
    <div className="admin-users-list-container">
      {users.map((user, idx) => (
        <div key={user._id}>
          <UserPreview
            user={user}
            idx={idx}
            onRemove={onRemove}
            onOpenModal={onOpenModal}
          />
        </div>
      ))}
    </div>
  );
};
