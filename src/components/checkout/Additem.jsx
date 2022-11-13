import React from "react";

export default function Additem({ product, handleCard }) {
  return (
    <div className="flex mr-10">
      <button onClick={() => handleCard(product)}>Add to cart</button>
    </div>
  );
}
