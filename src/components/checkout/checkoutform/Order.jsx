import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Order({ items, handleRemove }) {
  return (
    <div className="flex  w-[50%] flex-col">
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
              <div key={index} className="bg-gray-200 w-[100%] flex flex-row ">
                <img className="w-[120px] h-[120px]" src={item.img} />
                <div className="flex flex-col">
                  <p className="text-[1.2rem]"> {item.title}</p>{" "}
                  <div className="flex flex-row items-center justify-center gap-10">
                    <p>
                      Price{" "}
                      <span className="text-green-600">${item.price}</span>
                    </p>{" "}
                    <button
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
