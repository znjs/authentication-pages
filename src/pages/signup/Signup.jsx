import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [userDetails, setUserDeatils] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-slate-300 flex justify-center items-center">
      <div className="bg-gray-50 w-80 p-2 rounded-md shadow-lg">
        <h1 className="text-2xl text-center">Signup</h1>
        <div className="flex items-center flex-wrap justify-start my-2">
          <label htmlFor="username" className="w-20">
            FullName
          </label>
          <input
            className="grow px-2 py-1 focus:border-blue-700 border-2 outline-0"
            type="text"
            placeholder="John doe"
            id="fullname"
            name="fullname"
            value={userDetails.fullname}
            onChange={(e) =>
              setUserDeatils((prev) => ({ ...prev, fullname: e.target.value }))
            }
          />
        </div>
        <div className="flex items-center flex-wrap justify-start my-2">
          <label htmlFor="username" className="w-20">
            Username
          </label>
          <input
            className="grow px-2 py-1 focus:border-blue-700 border-2 outline-0"
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={userDetails.username}
            onChange={(e) =>
              setUserDeatils((prev) => ({ ...prev, username: e.target.value }))
            }
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
            onChange={(e) =>
              setUserDeatils((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <button
          className="bg-blue-600 w-full py-2 my-2 rounded-md text-white font-medium"
          onClick={() => console.log(userDetails)}
        >
          Signup
        </button>
        <div className="hover:underline">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            Already have an account?
          </span>
        </div>
      </div>
    </div>
  );
};
