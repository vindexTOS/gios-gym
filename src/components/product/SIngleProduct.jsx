import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/data";
import Additem from "../checkout/Additem";
import ProductDec from "./productDec";
import Shippinginfo from "../Shippinginfo";
import ProductSpecs from "./ProductSpecs";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SearchContext } from "../context";
import uuid from "react-uuid";
export default function SingleProduct() {
  const { card, setCard } = useContext(SearchContext);

  // states

  const [decNav, setDecNav] = React.useState({
    dec: true,
    spec: false,
    shipping: false,
  });

  const handleCard = (item) => {
    card.push(item);
    setCard((item) => {
      return (item.id = uuid());
    });
  };
  // img slider logic
  const nextImg = () => {
    setImgIndex((index) => {
      let newIndex = index + 1;
      return checkImg(newIndex);
    });
  };
  const prevImg = () => {
    setImgIndex((index) => {
      let newIndex = index - 1;
      return checkImg(newIndex);
    });
  };

  const checkImg = (num) => {
    if (num > singlePage.imgs.length - 1) {
      return 0;
    } else if (num < 0) {
      return singlePage.imgs.length - 1;
    }
    return num;
  };
  // img slider logic ends here

  const { productId } = useParams();
  const product = data.find((producte) => producte.id === parseInt(productId));
  // data destruction
  const { img, title, type, price, singlePage } = product;
  const { decTitle, dec, Specifications, imgs } = singlePage;

  const [imgIndex, setImgIndex] = React.useState(1);
  return (
    <div
      key={productId}
      className="flex flex-row items-center  
    justify-start gap-6 mt-10 w-[100%] "
    >
      <div className="flex flex-col items-start justify-center ml-5 ">
        <div className="flex flex-col items-center justify-cenetr w-[50%]">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</h1>

          <img
            className="w-[100%] h-[500px] rounded-[1rem]"
            style={{ border: "2px solid black" }}
            src={imgs[imgIndex]}
          />
          <div className="flex flex-row    ">
            <BiLeftArrow
              style={{ fontSize: "200%" }}
              onClick={() => prevImg()}
            />

            <BiRightArrow
              style={{ fontSize: "200%" }}
              onClick={() => nextImg()}
            />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <a onClick={() => setDecNav({ dec: true })}>Product description</a>
          <a onClick={() => setDecNav({ dec: false, spec: true })}>
            Product sepcs
          </a>
          <a onClick={() => setDecNav({ dec: false, shipping: true })}>
            Shipping detales
          </a>
        </div>
        <div className="w-[50%] h-[1px] bg-gray-300 mb-5"></div>
        <div className="flex flex-col text-start  items-center justify-center w-[50%] ">
          {decNav.dec ? (
            <ProductDec dec={dec} />
          ) : decNav.spec ? (
            <ProductSpecs Specifications={Specifications} />
          ) : decNav.shipping ? (
            <Shippinginfo />
          ) : null}
          <Link to="/">Go back</Link>
        </div>
      </div>
      <Additem product={product} handleCard={handleCard} />
    </div>
  );
}
