import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Additem from "../checkout/Additem";
import ProductDec from "./productDec";
import Shippinginfo from "../Shippinginfo";
import ProductSpecs from "./ProductSpecs";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SearchContext } from "../context";
import { useDispatchCart } from "../checkout/Cart";
import { motion } from "framer-motion";
import Sugestions from "./Sugestions";
import Loading from "../home/Loading";

export default function SingleProduct() {
  const dispatch = useDispatchCart();

  const { card, setCard, navFilter } = useContext(SearchContext);

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
    if (num > imgs.length - 1) {
      return 0;
    } else if (num < 0) {
      return imgs.length - 1;
    }
    return num;
  };
  // img slider logic ends here

  const { productId } = useParams();
  const product = navFilter.find(
    (producte) => String(producte.id) === productId
  );
  // data destruction
  if (!product) {
    return (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  const { title, price, dec, Specifications, imgs } = product;

  return (
    <div
      key={productId}
      className=" body-div bg-[#f2f2ff] flex flex-col items-center  
    justify-start gap-6 mt-10 overflow-x-hidden   w-[100vw]      "
    >
      <div className="main-div flex flex-row items-start justify-center   gap-5    w-[100%]   ">
        <div className=" img-div flex flex-col   items-center justify-cenetr w-[40%] overflow-hidden ">
          <h1
            classNae=" text-[2rem] max_sm:text-[1rem]"
            style={{ fontWeight: "bold" }}
          >
            {title}
          </h1>
          <h1>
            PRICE <span className="text-green-500">${price}</span>
          </h1>

          <img
            className="w-[100%] h-[500px] rounded-[1rem] overflow-hidden  max_sm:h-[250px]"
            style={{ border: "2px solid black" }}
            src={imgs[imgIndex]}
          />
          <div className="flex flex-row mt-2  gap-10 ">
            <motion.p
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(227, 227, 227, 0.53)",
                borderRadius: "10px",
              }}
            >
              {" "}
              <BiLeftArrow
                className="text-[200%] max_sm:text-[150%]"
                style={{ cursor: "pointer" }}
                onClick={() => prevImg()}
              />
            </motion.p>
            <motion.p
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(227, 227, 227, 0.53)",
                borderRadius: "10px",
              }}
            >
              {" "}
              <BiRightArrow
                className="text-[200%] max_sm:text-[150%]"
                style={{ cursor: "pointer" }}
                onClick={() => nextImg()}
              />
            </motion.p>
          </div>
          <div className="  flex flex-col bg-red-300">
            <h1 className="text-[1.2rem]">simular products</h1>

            <Sugestions product={product} />
          </div>
        </div>
        <div className=" dec-div flex flex-col gap-5 w-[50%] mt-[3rem] max_sm:mt-0">
          <div className="flex flex-row gap-5">
            <a
              className="cursor-pointer max_sm:text-[12px]"
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
              className="cursor-pointer max_sm:text-[12px]"
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
              className="cursor-pointer max_sm:text-[12px]"
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
