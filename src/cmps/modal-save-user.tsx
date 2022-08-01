import { User } from "../models/user.model";

type ModalSaveProps = {
  setIsModalOpen: Function;
  userToSave: User;
  handleImgUpload: Function;
  setUserToSave: Function;
  onSaveUser: Function;
  setIsSignup: Function;
  isSignup: boolean;
};
export const ModalSave = ({
  setIsModalOpen,
  userToSave,
  handleImgUpload,
  setUserToSave,
  onSaveUser,
  isSignup,
  setIsSignup,
}: ModalSaveProps) => {
  return (
    <div className="station-modal">
      <div className="station-modal-content">
        <div className="edit-details-title">
          <h1>User details</h1>
          <span></span>
          <svg
            role="img"
            fill="#fff"
            height="16"
            width="16"
            aria-label="Close"
            viewBox="0 0 16 16"
            className="Svg-sc-1bi12j5-0 jgfuCe exit-button"
            onClick={() =>{
                 setIsModalOpen(false)
                 setIsSignup(false)
                }}
          >
            <path d="M1.47 1.47a.75.75 0 011.06 0L8 6.94l5.47-5.47a.75.75 0 111.06 1.06L9.06 8l5.47 5.47a.75.75 0 11-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 01-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 010-1.06z"></path>
          </svg>
        </div>
        <div className="edit-details-inputs">
          <label htmlFor="inputImg">
            <div className="hero-img modal-hero-img">
              {userToSave.imgUrl && <img src={userToSave.imgUrl} alt="" />}
            </div>
          </label>
          <input
            className="img-input"
            id="inputImg"
            onInput={(event: any) => {
              handleImgUpload(event);
            }}
            type="file"
          ></input>
          <div className="bttns-input">
            <input
              onInput={(event: any) => {
                setUserToSave((prevCred: any) => ({
                  ...prevCred,
                  fullName: event.target.value,
                }));
              }}
              className="title-input"
              type="text"
              value={userToSave.fullName}
              placeholder="Enter full name"
            />
            <input
              onInput={(event: any) => {
                setUserToSave((prevCred: any) => ({
                  ...prevCred,
                  username: event.target.value,
                }));
              }}
              className="title-input"
              type="text"
              value={userToSave.username}
              placeholder="Enter username"
            />
            {isSignup && (
              <input
                onInput={(event: any) => {
                  setUserToSave((prevCred: any) => ({
                    ...prevCred,
                    password: event.target.value,
                  }));
                }}
                className="title-input"
                type="text"
                value={userToSave.password}
                placeholder="Enter password"
              />
            )}
            <button className="save-button" onClick={() => onSaveUser()}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};