import { Friend, User } from "../models/user.model";

type UserProps = {
  user: User | Friend;
  type: string;
  onAction: Function | null;
};

export const AccountPreview = ({ user, type, onAction }: UserProps) => {
  return (
    <div className="account-preview-container">
      <div className="inner-container">
        <div className="account-cover">
          <div className="img-container">
            <div className="icon-container">
              {user.imgUrl && <img src={user.imgUrl} alt="" />}
              {!user.imgUrl && (
                <img
                  src="https://e7.pngegg.com/pngimages/69/512/png-clipart-computer-icons-contact-monochrome-silhouette-thumbnail.png"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="account-details">
          <div className="account-name">{user.username}</div>
          {onAction && (
            <div
              onClick={() => onAction(user._id)}
              className="account-preview-info"
            >
              {type}
            </div>
          )}
          {!onAction && <div className="account-preview-info">{type}</div>}
        </div>
      </div>
    </div>
  );
};
