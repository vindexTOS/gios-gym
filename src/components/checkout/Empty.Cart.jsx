import React from "react";
import cartImg from "../../utils/cartImg.svg"

export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      {" "}
      <h1 className="z-10 text-[9rem] text-orange" style={{textShadow:"2px 3px 2px rgba(246, 211, 172, 1)"}}>Your cart is empty </h1>
     <div className="w-[50%] z-0 absolute"><img   src={cartImg}/></div> 
    </div>
  );
}
