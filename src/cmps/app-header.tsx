import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
    const navigate = useNavigate()
  return (
    <div className="app-header-container">
      <div className="logo">Chat App</div>
      <div className="links-container">
        <button onClick={()=> navigate('')}>My friends</button>
        <button>Search</button>
        <button>Logout</button>
        <div className="avatar-container">{/* <img src="" alt="" /> */}</div>
      </div>
    </div>
  );
};
