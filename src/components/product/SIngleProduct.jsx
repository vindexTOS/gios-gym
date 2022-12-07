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

  const { productId   } = useParams();
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
      className=" body-div  flex flex-col items-center  
    justify-start gap-6 mt-10 overflow-x-hidden  w-[100vw]  h-[100%] mb-[25rem]    "
    >
      <div className="main-div flex flex-row max_sm:flex-col max_sm:items-center items-start justify-center   gap-5    w-[100%]   ">
        <div className=" img-div flex flex-col   items-start justify-start max_sm:w-[90%] w-[40%] overflow-hidden ">
          <div className="flex flex-row gap-5 items-center justify-center ml-5">
            {" "}
            <h1
              classNae=" text-[4rem] max_sm:text-[1rem]"
              style={{ fontWeight: "bold" }}
            >
              {title}
            </h1>
            <h1>
              PRICE <span className="text-green-500">${price}</span>
            </h1>
          </div>
          <img
            className="w-[100%] h-[500px] rounded-[1rem] overflow-hidden     "
            style={{ border: "2px solid hsla(37, 89%, 52%, 0.9)" }}
            src={imgs[imgIndex]}
          />
          <div className="flex flex-row mt-2 w-[100%] items-center justify-center   ">
            <div className="flex flex-row  gap-10">
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
          </div>
        </div>
        <div className=" dec-div flex flex-col max_sm:items-center gap-5 w-[50%] mt-[3rem] max_sm:mt-0">
          <div className="flex flex-row   gap-5 max_sm:w-[20rem]  ">
            <a
              className="cursor-pointer max_sm:text-[12px]"
              onClick={() => setDecNav({ dec: true })}
            >
              Product description
              {decNav.dec && (
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  className="  h-[2px]  "
                  style={{backgroundColor:"hsla(37, 89%, 52%, 0.6)"}}

                ></motion.div>
              )}
            </a>
            <a
              className="cursor-pointer max_sm:text-[12px]"
              onClick={() => setDecNav({ dec: false, spec: true })}
            >
              Product Specs
              {decNav.spec && (
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  className="  h-[2px]   "                    style={{backgroundColor:"hsla(37, 89%, 52%, 0.6)"}}

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
                  className="  h-[2px]  

                   "
                   style={{backgroundColor:"hsla(37, 89%, 52%, 0.6)"}}

                ></motion.div>
              )}
            </a>
          </div>
          <div className="w-[100%] h-[1px] bg-gray-600   max_sm:w-[150%]"></div>
          <Additem product={product} handleCard={handleCard} />

          <div className=" switch-page-div flex flex-col text-start  items-center justify-center w-[100%]     ">
            {decNav.dec ? (
              <ProductDec dec={dec} />
            ) : decNav.spec ? (
              <ProductSpecs Specifications={Specifications} />
            ) : decNav.shipping ? (
              <p className="z-10  
              ">
                We normally ship your order within 1 business days with Swiss Post to
                Switzerland and Liechtenstein when ordered with “Swiss Post Priority”
                (all other countries are listed below) or worldwide with “DHL Express”.
                We will contact you if your product can’t be shipped within the
                estimated time. Please see also the availability details with every
                product. We always do our best to complete orders as soon as possible.
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-[100%]     flex items-start mt-5 ml-[6rem]">
        <Sugestions product={product} />
      </div>
    </div>
  );
}
