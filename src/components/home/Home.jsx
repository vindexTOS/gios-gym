import React from "react";
import Product from "../product/Product";
import Navigation from "../side_navigation/Navigation";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100%] bg-[#f2f2ff]  ">
      <Navigation />
      <Product />
    </div>
  );
}
