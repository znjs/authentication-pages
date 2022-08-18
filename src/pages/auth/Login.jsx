import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen text-center bg-slate-800 ">
      <div className="flex justify-center items-center flex-grow min-w-fit">
        <div className="flex flex-col justify-center items-center authCard h-full w-full">
          <div className="backdrop-opacity-25 rounded-lg max-w-[350px]  text-gray-50">
            <div className="py-4 flex items-center justify-center">
              <i className="fa-brands fa-joomla text-5xl"></i>
              <h2 className="text-gray-50 font-dScript italic text-4xl mx-2">
                Brand Name
              </h2>
            </div>
            <h2 className=" text-2xl my-3">Sign In</h2>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="email">
                Email:
              </label>
              <input
                value={user.email}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                autoComplete="off"
                className=" bg-black py-3 my-4 px-2 border border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="password">
                Password:
              </label>
              <input
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
                name="password"
                placeholder="password"
                className="bg-black py-3 my-4 px-2 border border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex items-center justify-start mx-4 my-2">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                value={user.rememberMe}
                onChange={() =>
                  setUser((prev) => ({ ...prev, rememberMe: !prev.rememberMe }))
                }
              />
              <label htmlFor="remember-me" className="mx-2">
                Remember Me
              </label>
            </div>
            <button
              type="button"
              className={`text-center w-full py-4 bg-sky-500 hover:bg-sky-400 rounded-md ${
                !!user.email && !!user.password
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              onClick={() => console.log(user)}
            >
              SIGN IN
            </button>
            <p className="text-sm font-sans font-medium text-gray-400 my-2">
              Don't have an account?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:block md:basis-1/3 hidden flex-grow authImg"></div>
    </div>
  );
};
