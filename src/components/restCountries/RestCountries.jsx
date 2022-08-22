import axios from "axios";
import { useEffect, useState } from "react";
import { TableRow } from "../tableRow/TableRow";

export const RestCountries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data);
    })();
  }, []);

  return (
    <div className="w-[540px] mx-auto">
      <div className="flex">
        <p className="text-center w-32">Country</p>
        <p className="text-center grow">Flag</p>
        <p className="text-center w-32">Currency</p>
      </div>
      {data.map((entry, idx) => (
        <TableRow data={entry} key={idx} />
      ))}
    </div>
  );
};
