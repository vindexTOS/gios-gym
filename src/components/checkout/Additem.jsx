import React from "react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";

export default function Additem({ product, handleCard }) {
  const [changeIcon, setChangeIcon] = React.useState(false);
  return (
    <div
      className=" flex bg-orange-500 w-[6rem]    rounded-[15px]        "
      onClick={() => setChangeIcon(true)}
    >
      <button
        onClick={() => handleCard(product)}
        className="flex  flex-row justify-center items-center gap-2"
      >
        <p className="bg-white ml-1     w-[1.4rem] h-[1.4rem]  rounded-[15px] flex items-center justify-center text-yellow-500 ">
          {!changeIcon ? (
            <BsFillCartPlusFill
              style={{ marginRight: "2px", fontSize: "1rem" }}
            />
          ) : (
            <BsFillCartCheckFill
              style={{ color: "green", marginRight: "2px", fontSize: "1rem" }}
            />
          )}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontFamily: "Bebas Neue",
            marginTop: "4px",
          }}
        >
          ADD TO CART
        </p>
      </button>
    </div>
  );
}
