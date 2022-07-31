import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";
import { userService } from "../services/user.service";

export const AppHeader = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [loggedUser, setLoggedUser] = useState(userService.getLoggedinUser() as User);
  const [src, setSrc] = useState(
    "https://e7.pngegg.com/pngimages/69/512/png-clipart-computer-icons-contact-monochrome-silhouette-thumbnail.png"
  );
  useEffect(() => {
    setLoggedUser(userService.getLoggedinUser());
    if (loggedUser?.imgUrl && loggedUser.imgUrl.length > 0)
      setSrc(loggedUser.imgUrl);
  }, []);
  const onLogout = async () => {
    try {
      await userService.logout();
      navigate("/sign");
    } catch (error) {
      console.error("can not logout", error);
    }
  };
  return (
    <div className="app-header">
      <h2 className="logo" onClick={() => navigate("friends")}>
        Chat App
      </h2>
      <div className="btns-container">
        {!loggedUser.isAdmin &&<button
          className="btn-dark .tag-text"
          onClick={() => navigate("friends")}
        >
          My friends
        </button>}
      { !loggedUser.isAdmin && <button className="btn-dark" onClick={() => navigate("search")}>
          Add
        </button>}
      {loggedUser.isAdmin && <button className="btn-dark" onClick={() => navigate("admin")}>
          Admin
        </button>}
        <button className="btn-dark" onClick={onLogout}>
          Logout
        </button>
        <div className="avatar-container">
          <img src={src} alt="" />
        </div>
      </div>
    </div>
  );
};
