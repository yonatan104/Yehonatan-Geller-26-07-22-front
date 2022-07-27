import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/app-header";
import { ChatApp } from "./pages/chat-App";
import { Chat } from "./pages/chat-page";
// import { Home } from "./pages/home";
import { MyFriends } from "./pages/my-friends-page";
import { Search } from "./pages/search-page";
import { SigninSignupPage } from "./pages/signin-signup-page";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="chat-app/*" element={<ChatApp />} />
        <Route path="sign" element={<SigninSignupPage />} />
        <Route path="/" element={<SigninSignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
