import React, { useContext } from "react";

import { SearchContext } from "../context";

import { GiWeight, GiWeightLiftingUp } from "react-icons/gi";
import { CiDumbbell } from "react-icons/ci";

export default function Navigation() {
  const { clickFilter, lang } = useContext(SearchContext);

  const types = [
    { eng: "All Product", geo: "ყველა პროდუქტი", type: "all" },
    { eng: "Weights", geo: "წონები", type: "weights" },
    {
      eng: "Barbell",
      geo: "ღერძი",
      type: "barbells",
    },
    {
      eng: "Dumbbells",
      geo: "ჰანტელი",
      type: "dumbbells",
    },
    { eng: "Machines", geo: "ტრენაჟორი", type: "machines" },
    { eng: "Racks", geo: "რაკი", type: "racks" },
    { eng: "Gymnastic", geo: "გიმასტიკეიბ", type: "gymnastic" },
  ];

  return (
    <nav
      className=" side-navigation w-[100%] bg-[#F9F6EE] flex h-[60px]    "
      style={{
        boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
      }}
    >
      <div className="flex flex-row  items-center justify-between gap-5   text-[1.3rem]    ">
        {types.map((item) => {
          const { eng, geo, type } = item;
          return (
            <button
              style={{ fontFamily: "Dosis" }}
              onClick={() => clickFilter(type)}
              key={type}
            >
              {!lang ? eng : geo}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
