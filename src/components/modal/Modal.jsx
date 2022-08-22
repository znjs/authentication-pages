import { useUser } from "../../context/user-context";

export const Modal = () => {
  const { setModalDetails, modalDetails } = useUser();
  console.log(modalDetails);
  return (
    <div className="absolute w-full top-0 overflow-auto h-screen flex justify-center items-center bg-[#1c1d20cc]">
      <div className="bg-gray-500 w-[560px] p-2 rounded-md">
        <div className="flex flex-row-reverse justify-between items-center">
          <i
            className="fa-solid fa-xmark text-red-600 cursor-pointer"
            onClick={() => {
              setModalDetails((prev) => ({ ...prev, display: !prev.display }));
            }}
          ></i>
          <p className="text-xl">
            {modalDetails?.data?.name?.common} - {modalDetails?.data?.region}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div>
            <p>
              <span className="font-semibold">Subregion: </span>{" "}
              {modalDetails?.data?.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>{" "}
              {modalDetails?.data?.capital[0]}
            </p>
            <p>
              <span className="font-semibold">Population: </span>{" "}
              {modalDetails?.data?.population}
            </p>
            <p>
              <span className="font-semibold">TimeZones: </span>
              {modalDetails?.data?.timezones.map((timezone, idx) => (
                <span>
                  <span key={idx}>{timezone}</span>,
                </span>
              ))}
            </p>
          </div>
          <img
            src={modalDetails?.data?.flags?.png}
            className="w-[320px] h-[160px]"
            alt="flag"
          />
        </div>
      </div>
    </div>
  );
};
