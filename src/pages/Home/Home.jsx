import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard, RestCountries } from "../../components";
import { Modal } from "../../components/modal/Modal";
import { useUser } from "../../context/user-context";

export const Home = () => {
  const { token, setToken, setUserDetails, modalDetails } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
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
    <div>
      <div className="h-screen bg-slate-800 relative overflow-auto text-white">
        <nav className="flex justify-between items-center">
          <h1 className="text-lg p-2">Home</h1>
          <button className="bg-red-500 rounded-lg p-1 mx-3" onClick={logout}>
            Logout
          </button>
        </nav>
        <Dashboard />
        <RestCountries />
      </div>
      {modalDetails.display ? <Modal /> : <></>}
    </div>
  );
};
