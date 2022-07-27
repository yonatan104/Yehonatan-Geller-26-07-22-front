import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="app-header">
      <h2 className="logo">Chat App</h2>
      <div className="btns-container">
        <button
          className="btn-dark .tag-text"
          onClick={() => navigate("/friends")}
        >
          My friends
        </button>
        <button className="btn-dark" onClick={() => navigate("/search")}>
          Search
        </button>
        <button className="btn-dark" onClick={() => navigate("/login")}>
          Logout
          {/* TO DO: logoutfunction and than navigate to login page  */}
        </button>
        <div className="avatar-container">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/294124922_417915870353903_2633701057033364199_n.jpg?ccb=11-4&oh=01_AVxyqrmU3dnYMBiECaOkc3v53MFFABv5989lvg1jV84Gpw&oe=62EF7922"
            alt=""
          />
        </div>
        {/* TO DO: to add avatar img  */}
      </div>
    </div>
  );
};
