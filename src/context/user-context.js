import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
  });
  const [token, setToken] = useState(localStorage.getItem("CT-token") || "");
  const [users, setUsers] = useState([
    {
      fullname: "John Doe",
      email: "john.doe@gmail.com",
      password: "1234",
    },
  ]);
  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, token, setToken, users, setUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
