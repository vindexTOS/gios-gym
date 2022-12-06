import React from "react";
import shippingImg from "../utils/shippingImg.svg"


export default function Shippinginfo() {
  return (
    <div className="  max_sm:w-[20rem] h-[100vh] bg-gray-300 text-black text-[1.4rem]">
      <div className="flex items-center justify-center"><p className="z-10 text-center 
      ">
        We normally ship your order within 1 business days with Swiss Post to
        Switzerland and Liechtenstein when ordered with “Swiss Post Priority”
        (all other countries are listed below) or worldwide with “DHL Express”.
        We will contact you if your product can’t be shipped within the
        estimated time. Please see also the availability details with every
        product. We always do our best to complete orders as soon as possible.
      </p></div>
      <div className=" flex items-center justify-center w-[100%]absolute z-0"><img src={shippingImg}/></div>
    </div>
  );
}
