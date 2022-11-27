import React from "react";

export default function Order({ items }) {
  return (
    <div className="flex bg-gray-600 w-[100%] flex-col">
      <div className="flex flex-row gap-5 bg-gray-300 w-[100%]">
        <h1>PRODUCT</h1>
        <h1>TOTAL</h1>
      </div>
      {items.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
