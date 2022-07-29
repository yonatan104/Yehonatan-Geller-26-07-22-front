import { Route, Routes } from "react-router-dom";
import { ChatApp } from "./pages/chat-App";
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
