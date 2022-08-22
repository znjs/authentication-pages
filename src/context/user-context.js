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
  const [modalDetails, setModalDetails] = useState({
    display: false,
    data: {},
  });
  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
        token,
        setToken,
        users,
        setUsers,
        modalDetails,
        setModalDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
