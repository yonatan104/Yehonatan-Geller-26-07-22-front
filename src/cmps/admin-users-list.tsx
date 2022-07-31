import { User } from "../models/user.model";
import { AccountPreview } from "./account-preview";
type UsersProps = {
  users: User[];
  onRemove: Function
};
export const AdminUsersList = ({ users, onRemove }: UsersProps) => {
  return (
    <div className="account-list">
      {users.map((user) => (
        <div key={user._id}>
          <button onClick={() => onRemove(user._id)}>
            Delete User and his activities
          </button>
          <AccountPreview user={user} type={""} />
        </div>
      ))}
    </div>
  );
};
