import { useUser } from "../../context/user-context";

export const Dashboard = () => {
  const { userDetails } = useUser();
  return (
    <div className="flex border rounded-lg py-2 px-4 mx-4">
      <i className="fa-solid fa-user-tie text-8xl"></i>
      <div className="grow flex flex-col justify-center px-4">
        <h1>Name: {userDetails.fullname}</h1>
        <h1>Email: {userDetails.email}</h1>
      </div>
    </div>
  );
};
