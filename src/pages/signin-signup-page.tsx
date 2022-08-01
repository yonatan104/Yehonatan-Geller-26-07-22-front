import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";
import { cloudinaryService } from "../services/cloudinary.service";
import { userService } from "../services/user.service";

export const SigninSignupPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [imgUrl, setImgUrl] = useState(
    "https://e7.pngegg.com/pngimages/69/512/png-clipart-computer-icons-contact-monochrome-silhouette-thumbnail.png"
  );
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fullName: "",
    username: "",
    password: "",
    imgUrl:
      "https://e7.pngegg.com/pngimages/69/512/png-clipart-computer-icons-contact-monochrome-silhouette-thumbnail.png",
  });

  const onToggleSign = () => {
    setIsSignup((prevIsSignin) => !prevIsSignin);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isSignup) await userService.signup(credentials as User);
      else await userService.login(credentials);
      const loggedUser = userService.getLoggedinUser()
      if(loggedUser.isAdmin)navigate('/chat-app/admin')
      else navigate('/chat-app/search')


    } catch (error) {
      console.error("can not submit credentials", error);
    }
  };

  const handleImgUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const src = await cloudinaryService.uploadImg(event);
      setImgUrl(src);
      setCredentials((prevCred) => ({
        ...prevCred,
        imgUrl: src,
      }));
    } catch {
      console.log("could not upload image");
    }
  };

  return (
    <div className="sign-page-container">
      <div className="sign-modal">
        {isSignup && (
          <div className="img-container-main">
            <div className="img-container">
              <img src={imgUrl} alt="" />
            </div>
            <div className="input-file-container">
              <label htmlFor="inputTag">
                Select Image
                <input id="inputTag" onChange={handleImgUpload} type="file" />
              </label>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="input-container">
              <input
                onInput={(event: any) => {
                  setCredentials((prevCred) => ({
                    ...prevCred,
                    fullName: event.target.value,
                  }));
                }}
                type="text"
                placeholder="Enter full name"
              />
            </div>
          )}
          <div className="input-container">
            <input
              onInput={(event: any) => {
                setCredentials((prevCred) => ({
                  ...prevCred,
                  username: event.target.value,
                }));
              }}
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div className="input-container">
            <input
              onInput={(event: any) => {
                setCredentials((prevCred) => ({
                  ...prevCred,
                  password: event.target.value,
                }));
              }}
              type="text"
              placeholder="Enter password"
            />
          </div>
          <div className="bttn-container">
            {!isSignup && <button>Login</button>}
            {isSignup && <button>Signup</button>}
          </div>
        </form>
        <div className="bttn-switch-container">
          {isSignup && (
            <div onClick={() => onToggleSign()}>
              Have acount? Switch to Login
            </div>
          )}
          {!isSignup && (
            <div onClick={() => onToggleSign()}>
              Dont have acount yet? Switch to signup
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
