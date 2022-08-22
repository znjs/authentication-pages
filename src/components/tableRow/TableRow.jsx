import { useUser } from "../../context/user-context";

export const TableRow = ({ data }) => {
  const currency = data.currencies || {};
  let keys = Object.keys(currency) || [0];
  const { token, setToken, setUserDetails, modalDetails, setModalDetails } =
    useUser();
  return (
    <div className="flex py-2 items-center">
      <div className="w-32 flex items-center justify-center">
        <p>{data.name.common}</p>
        <i
          className="fa-solid fa-circle-info mx-2 cursor-pointer"
          onClick={() => {
            setModalDetails((prev) => ({
              ...prev,
              display: !prev.display,
              data,
            }));
          }}
        ></i>
        {/* <button>View All details</button> */}
      </div>
      <p className="grow">
        <img src={data.flags.png} alt="flag" />
      </p>
      <p className="w-32 text-center">{keys[0]}</p>
    </div>
  );
};
