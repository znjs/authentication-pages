import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/user-context";
import "./login.css";

export const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "", fullname: "" });
  const navigate = useNavigate();
  const { users, setUsers, setUserDetails } = useUser();
  const signupHandler = () => {
    if (!!user.email && !!user.password) {
      const foundUser = users.find(
        (singleUser) => user.email === singleUser.email
      );
      if (foundUser) {
        console.error("User already exists");
      } else {
        setUserDetails((prev) => ({ ...prev, ...user, token: nanoid() }));
        setUsers((prev) => [...prev, { ...user }]);
        navigate("/");
      }
    }
  };
  return (
    <div className="flex h-screen w-screen text-center bg-slate-800 ">
      <div className="flex justify-center items-center flex-grow min-w-fit">
        <div className="flex flex-col justify-center items-center authCard h-full w-full">
          <div className="backdrop-opacity-25 rounded-lg max-w-[350px] text-gray-50">
            <div className="py-4 flex items-center justify-center">
              <i className="fa-brands fa-joomla text-5xl"></i>
              <h2 className="text-gray-50 font-dScript italic text-4xl mx-2">
                Brand Name
              </h2>
            </div>
            <h2 className=" text-2xl my-3">Sign Up</h2>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="fullname">
                FullName*
              </label>
              <input
                value={user.fullname}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, fullname: e.target.value }))
                }
                type="text"
                name="fullname"
                placeholder="john doe"
                autoComplete="off"
                className=" bg-black py-3 my-2 px-2 border border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="email">
                Email*
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
                className=" bg-black py-3 my-2 px-2 border border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-xl w-40" htmlFor="password">
                Password*
              </label>
              <input
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
                name="password"
                placeholder="password"
                className="bg-black py-3 my-2 px-2 border border-gray-500 rounded-xl shadow text-base font-sans"
              />
            </div>
            <button
              type="button"
              className={`text-center w-full py-4 bg-sky-500 hover:bg-sky-400 rounded-md ${
                !!user.email && !!user.password && !!user.fullname
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              onClick={signupHandler}
            >
              SIGN UP
            </button>
            <p className="text-sm font-sans font-medium text-gray-400 my-2">
              Already have an Account?{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                login
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:block md:basis-1/3 hidden flex-grow authImg"></div>
    </div>
  );
};
