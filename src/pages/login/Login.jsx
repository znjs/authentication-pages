import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [userDetails, setUserDeatils] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-slate-300 flex justify-center items-center">
      <div className="bg-gray-50 w-80 p-2 rounded-md shadow-lg">
        <h1 className="text-2xl text-center">Login</h1>
        <div className="flex items-center flex-wrap justify-start my-2">
          <label htmlFor="username" className="w-20">
            Username
          </label>
          <input
            className="grow px-2 py-1 focus:border-blue-700 border-2 outline-0"
            type="text"
            placeholder="Username"
            id="username"
            value={userDetails.username}
            name="username"
            onChange={(e) => {
              setUserDeatils((prev) => ({ ...prev, username: e.target.value }));
            }}
          />
        </div>
        <div className="flex items-center justify-start my-2">
          <label htmlFor="username" className="w-20">
            Password
          </label>
          <input
            className="grow px-2 py-1 focus:border-blue-700 border-2 outline-0"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={(e) => {
              setUserDeatils((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember-me"
            name="remember-me"
            checked={userDetails.rememberMe}
            onChange={() => {
              setUserDeatils((prev) => ({
                ...prev,
                rememberMe: !prev.rememberMe,
              }));
            }}
          />
          <label htmlFor="remember-me" className="mx-2">
            Remember Me
          </label>
        </div>
        <button
          className="bg-blue-600 w-full py-2 my-2 rounded-md text-white font-medium"
          onClick={() => console.log(userDetails)}
        >
          Login
        </button>
        <div className="hover:underline">
          <span className="cursor-pointer" onClick={() => navigate("/signup")}>
            Create a new account
            <i className="fa-solid fa-angle-right text-xs"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
