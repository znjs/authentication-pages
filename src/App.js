import "./App.css";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
