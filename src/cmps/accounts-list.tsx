import { PropsWithChildren } from "react";
import { User } from "../models/user.model";
import { AccountPreview } from "./account-preview";
type usersProps = {
    users:User[]
}
export const AccountList = ({ users }: usersProps) => {
    return <div className="account-list">
        {users.map(user=> 
            <div key={user._id}>
                <AccountPreview user={user}/>

            </div>
            )}
    </div>;
    
};
