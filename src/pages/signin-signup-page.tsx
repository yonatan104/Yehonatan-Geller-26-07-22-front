import { ChangeEvent, useState } from "react";
import { cloudinaryService } from "../services/cloudinary.service";

export const SigninSignupPage = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [imgUrl, setImgUrl] = useState(
    "https://e7.pngegg.com/pngimages/69/512/png-clipart-computer-icons-contact-monochrome-silhouette-thumbnail.png"
  );
  const [credentials, setCredentials] = useState({
    fullname: "",
    username: "",
    password: "",
    imgUrl: "",
  });

  const onToggleSign = () => {
    setIsSignin((prevIsSignin) => !prevIsSignin);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("credentials", credentials);
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
        {isSignin && (
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
          {isSignin && (
            <div className="input-container">
              <input
                onInput={(event: any) => {
                  setCredentials((prevCred) => ({
                    ...prevCred,
                    fullname: event.target.value,
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
            {!isSignin && <button>Login</button>}
            {isSignin && <button>Signup</button>}
          </div>
        </form>
        <div className="bttn-switch-container">
          {isSignin && (
            <div onClick={() => onToggleSign()}>
              Have acount? Switch to Login
            </div>
          )}
          {!isSignin && (
            <div onClick={() => onToggleSign()}>
              Dont have acount yet? Switch to signup
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
