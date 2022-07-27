import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/app-header";
import { Chat } from "./pages/chat-page";
import { Home } from "./pages/home";
import { MyFriends } from "./pages/my-friends-page";
import { Search } from "./pages/search-page";
import { SigninSignupPage } from "./pages/signin-signup-page";
function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Routes>
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/signin" element={<SigninSignupPage />} />
        <Route path="/login" element={<SigninSignupPage />} />
        <Route path="/friends" element={<MyFriends />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
