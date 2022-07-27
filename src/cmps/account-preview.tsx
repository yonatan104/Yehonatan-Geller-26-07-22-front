import { User } from "../models/user.model";

type userProps = {
  user: User;
};

export const AccountPreview = ({ user }: userProps) => {
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
            <div className="account-name">{user.fullName}</div>
            <div className="account-preview-info"></div>
        </div>
      </div>
    </div>
  );
};
