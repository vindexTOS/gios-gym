import React, { useContext } from "react";
import { SearchContext } from "../../components/context";
import { Link } from "react-router-dom";
export default function Sugestions({ product }) {
  const { navFilter } = useContext(SearchContext);

  return (
    <div className="  mt-10     ">
      <h1 className="text-[1.2rem] ml-2 ">simular products</h1>

      <div
        style={{ overflowX: "scroll" }}
        className="  w-[40%] h-[220px] flex flex-row gap-3       overflow-x-scroll   mt-2 absolute"
      >
        {navFilter
          .sort(() => Math.random() - 0.5)
          .map((item) => {
            {
              if (product.type == item.type)
                return (
                  <Link to={`/${item.id}`}>
                    {" "}
                    <div className="rounded-[15px] bg-gray-100 w-[170px] h-[180px] flex flex-col items-center justify-center ">
                      <img
                        className="w-[150px] h-[160px] rounded-[15px]  border-[1px]"
                        src={item.img}
                      />
                      <p className="text-[10px]">{`${item.title.substring(
                        0,
                        20
                      )} `}</p>
                    </div>
                  </Link>
                );
            }
          })}
      </div>
    </div>
  );
}
