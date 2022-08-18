import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages";
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
