import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Order({ items, handleRemove }) {
  return (
    <div
      className="flex  w-[50%] flex-col bg-gray-300 rounded-[10px] m-5"
      style={{ boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1>Your Order</h1>
        <p>
          Total Price{" "}
          <span className="text-green-600">
            ${items.reduce((total, b) => total + b.price, 0)}
          </span>
        </p>
      </div>
      <h1 className="text-[1.2rem] " style={{ letterSpacing: "5px" }}>
        PRODUCTS
      </h1>

      <div className="flex flex-row gap-[20%]">
        <div className="flex  flex-col gap-5 overflow-y-scroll h-[30rem]  w-[100%] ">
          {" "}
          {items.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  boxShadow: "-1px 2px 2px hsla(14, 84%, 53%, 0.79)",
                }}
                className="bg-gray-200 w-[90%] flex flex-row m-2"
              >
                <img className="w-[120px] h-[120px]" src={item.img} />
                <div className="flex flex-col">
                  <p className="text-[1.2rem]"> {item.title}</p>{" "}
                  <div className="flex flex-row items-center justify-center gap-10">
                    <p>
                      Price{" "}
                      <span className="text-green-600">${item.price}</span>
                    </p>{" "}
                    <button
                      type="button"
                      className="flex items-center justify-center gap-1 bg-[#FF0000] w-[6rem] rounded-[5px] text-gray-200"
                      onClick={() => handleRemove(index)}
                    >
                      <MdDeleteForever />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
