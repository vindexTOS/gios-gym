import React from "react";
import shippingImg from "../utils/shippingImg.svg"


export default function Shippinginfo() {
  return (
    <div className=" flex flex-col items-center justify-center   max_sm:w-[100vw] h-[100%] bg-gray-300 max_sm:bg-gray-100 text-black text-[1.4rem]">
      <div className="  w-[95%]"><p className="  text-center 
      ">
        We normally ship your order within 1 business days with Swiss Post to
        Switzerland and Liechtenstein when ordered with “Swiss Post Priority”
        (all other countries are listed below) or worldwide with “DHL Express”.
        We will contact you if your product can’t be shipped within the
        estimated time. Please see also the availability details with every
        product. We always do our best to complete orders as soon as possible.
      </p></div>
      <div className="  max_sm:hidden flex items-center justify-center mt-10 w-[100%]   z-0"><img src={shippingImg}/></div>
    </div>
  );
}
