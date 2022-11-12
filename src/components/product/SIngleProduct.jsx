import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
export default function SingleProduct() {
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
      className="flex flex-col items-center  
    justify-center gap-6 mt-10"
    >
      <div className="flex flex-col items-center justify-cenetr">
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</h1>

        <img
          className="w-[100%] h-[500px] rounded-[1rem]"
          style={{ border: "2px solid black" }}
          src={imgs[imgIndex]}
        />
        <div className="flex flex-row   ">
          <BiLeftArrow style={{ fontSize: "200%" }} onClick={() => prevImg()} />

          <BiRightArrow
            style={{ fontSize: "200%" }}
            onClick={() => nextImg()}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-cenetr   w-[40%] h-[500px]">
        <h3>{decTitle}</h3>
        <p>{dec}</p>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}
