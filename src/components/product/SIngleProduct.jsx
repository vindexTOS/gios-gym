import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/data";
export default function SingleProduct() {
  const { productId } = useParams();
  const product = data.find((producte) => producte.id === parseInt(productId));

  const { img, title, type, price, singlePage } = product;

  return (
    <div key={productId} className="flex items-center">
      <h1>{title}</h1>
      <div>
        <div className="flex flex-col bg-gray-300   gap-2 ">
          {singlePage.imgs.map((i, index) => {
            return (
              <div key={index}>
                <img
                  className="w-[200px] h-[200px] rounded-[10px]  "
                  src={i == "" ? <h1>no img</h1> : i}
                />
              </div>
            );
          })}{" "}
        </div>
      </div>
      <Link to="/">Go back</Link>
    </div>
  );
}
