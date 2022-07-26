import { Route, Routes } from "react-router-dom"
import { SigninSignupPage } from "./pages/signin-signup-page"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninSignupPage />} />
        <Route path="/signin" element={<SigninSignupPage />} />
        <Route path="/login" element={<SigninSignupPage />} />
      </Routes>
    </div>
  );
}

export default App
