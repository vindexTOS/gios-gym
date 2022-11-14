import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/data";
import Additem from "../checkout/Additem";
import ProductDec from "./productDec";
import Shippinginfo from "../Shippinginfo";
import ProductSpecs from "./ProductSpecs";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SearchContext } from "../context";
import { useDispatchCart } from "../checkout/Cart";
import { motion } from "framer-motion";
export default function SingleProduct() {
  const dispatch = useDispatchCart();

  const { card, setCard } = useContext(SearchContext);

  // states
  // description switcher state
  const [imgIndex, setImgIndex] = React.useState(1);

  const [decNav, setDecNav] = React.useState({
    dec: true,
    spec: false,
    shipping: false,
  });
  // add itam to a cart function
  const handleCard = (item) => {
    console.log(item);
    dispatch({ type: "ADD", item });
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

  return (
    <div
      key={productId}
      className=" body-div bg-[#f2f2ff] flex flex-col items-center  
    justify-start gap-6 mt-10 overflow-x-hidden   w-[100vw]      "
    >
      <div className="main-div flex flex-row items-start justify-center   gap-5    w-[100%]   ">
        <div className=" img-div flex flex-col items-center justify-cenetr w-[40%] overflow-hidden ">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</h1>

          <img
            className="w-[100%] h-[500px] rounded-[1rem] overflow-hidden"
            style={{ border: "2px solid black" }}
            src={imgs[imgIndex]}
          />
          <div className="flex flex-row   gap-10 ">
            <motion.p
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(227, 227, 227, 0.53)",
                borderRadius: "50%",
                transition: "none",
              }}
            >
              {" "}
              <BiLeftArrow
                style={{ fontSize: "200%", cursor: "pointer" }}
                onClick={() => prevImg()}
              />
            </motion.p>
            <motion.p whileHover={{ scale: 1.2 }}>
              {" "}
              <BiRightArrow
                style={{ fontSize: "200%", cursor: "pointer" }}
                onClick={() => nextImg()}
              />
            </motion.p>
          </div>
        </div>
        <div className=" dec-div flex flex-col gap-5 w-[50%] mt-[3rem]">
          <div className="flex flex-row gap-5">
            <a
              className="cursor-pointer"
              onClick={() => setDecNav({ dec: true })}
            >
              Product description
              {decNav.dec && (
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  className="  h-[2px] bg-red-600 "
                ></motion.div>
              )}
            </a>
            <a
              className="cursor-pointer"
              onClick={() => setDecNav({ dec: false, spec: true })}
            >
              Product sepcs
              {decNav.spec && (
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  className="  h-[2px] bg-red-600 "
                ></motion.div>
              )}
            </a>
            <a
              className="cursor-pointer"
              onClick={() => setDecNav({ dec: false, shipping: true })}
            >
              Shipping detales
              {decNav.shipping && (
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  className="  h-[2px] bg-red-600 "
                ></motion.div>
              )}
            </a>
            <Additem product={product} handleCard={handleCard} />
          </div>
          <div className="w-[100%] h-[1px] bg-gray-600  mb-5"></div>
          <div className=" switch-page-div flex flex-col text-start  items-center justify-center w-[100%] ">
            {decNav.dec ? (
              <ProductDec dec={dec} />
            ) : decNav.spec ? (
              <ProductSpecs Specifications={Specifications} />
            ) : decNav.shipping ? (
              <Shippinginfo />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
