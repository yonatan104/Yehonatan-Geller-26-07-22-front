import { User } from "../models/user.model";
import { AccountPreview } from "./account-preview";
type UsersProps = {
  users: User[];
  onAdd: Function;
};
export const AccountList = ({ users, onAdd }: UsersProps) => {
  return (
    <div className="account-list">
      {users.map((user) => {
        if(!user?.isAdmin)return(
        <div onClick={() => onAdd(user)} key={user._id}>
          <AccountPreview user={user} type={'Click to add me to your friend list'} onAction={null}/>
        </div>
      )})}
    </div>
  );
};
