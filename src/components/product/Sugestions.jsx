import React, { useContext } from "react";
import { SearchContext } from "../../components/context";
import { Link } from "react-router-dom";
export default function Sugestions({ product }) {
  const { navFilter } = useContext(SearchContext);

  return (
    <section className="flex flex-col items-center justify-center ">
      <h1>simular product</h1>

      <div className="   overflow-x-scroll w-[20%] h-[100px] bg-gray-700  absolute ">
        <div className="    ">
          {navFilter.map((item) => {
            const { img } = item;
            {
              if (product.type == item.type)
                return (
                  <Link to={`/product/${item.id}`}>
                    {" "}
                    <div>
                      <img className="w-[100px] h-[70px]" src={img} />
                    </div>
                  </Link>
                );
            }
          })}
        </div>
      </div>
    </section>
  );
}
