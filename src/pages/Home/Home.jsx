import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../components";
import { useUser } from "../../context/user-context";

export const Home = () => {
  const { token, setToken, userDetails, setUserDetails } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!!token) navigate("/login");
  }, [token]);
  const logout = () => {
    setToken("");
    setUserDetails({
      fullname: "",
      email: "",
    });
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-lg p-2">Home</h1>
        <button className="bg-red-500 rounded-lg p-1" onClick={logout}>
          Logout
        </button>
      </div>
      <Dashboard />
    </div>
  );
};
