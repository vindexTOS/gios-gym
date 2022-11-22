import React, { useContext, useReducer, createContext } from "react";
import { SearchContext } from "../context";
import { FiDelete } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import EmptyCart from "./Empty.Cart";
const CartStateContex = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      const NewArr = [...state];
      NewArr.splice(action.index, 1);

      return NewArr;
    default:
      throw new Error(`unkown action ${action.type}`);
  }
};
export const useCart = () => useContext(CartStateContex);
export const useDispatchCart = () => useContext(CartDispatchContext);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContex.Provider value={state}>
        {children}
      </CartStateContex.Provider>
    </CartDispatchContext.Provider>
  );
};

export default function Cart() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const [checkOut, setCheckOut] = React.useState([]);
  const [checkButton, setCheckButton] = React.useState(false);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  const checkedOut = (item) => {
    if (!checkButton) {
      setCheckOut([...item]);
      setCheckButton(true);
    } else {
      console.log("You already checked out");
    }
  };

  if (items.length == 0) {
    return <EmptyCart />;
  }
  if (checkButton) {
    return <CheckOutForm />;
  }

  return (
    <section className="bg-[#f2f2ff] w-[100vw] h-[100vh]  flex flex-col items-center justify-center ">
      <div
        className="bg-white w-[20%] flex items-center justify-center border-[2px]"
        style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
      >
        <p>
          Total Price <span className="text-green-500">${totalPrice}</span>
        </p>
      </div>
      <div className="flex flex-col gap-5 bg-white h-[60%] overflow-y-scroll  rounded-[10px] border-[2px]    p-5">
        {items.map((item, index) => {
          const { title, img, id, price } = item;
          return (
            <div
              key={id}
              className="flex flex-row items-center justify-between border-[2px] p-1 rounded-[10px]  gap-3 "
            >
              <Link to={`/${id}`}>
                {" "}
                <img
                  className="w-[80px] h-[70px] rounded-[10px] border-[2px]"
                  src={img}
                />
              </Link>
              <h1>{title}</h1>
              <p className="text-green-500">${price}</p>
              <motion.button
                whileHover={{
                  color: "red",
                }}
                className="bg-"
                onClick={() => handleRemove(index)}
              >
                <FiDelete />
              </motion.button>
            </div>
          );
        })}
      </div>
      <motion.div
        whileHover={{ scale: 1.1, color: "yellowgreen" }}
        whileTap={{ color: "green" }}
        className="bg-orange-500 p-1 rounded-[10px]"
      >
        {" "}
        <button
          type="button"
          className="flex flex-row items-center gap-1"
          onClick={() => checkedOut(items)}
        >
          <motion.p>
            <AiOutlineCheckCircle style={{ fontSize: "1.2rem" }} />
          </motion.p>
          <p>Check out</p>
        </button>
      </motion.div>
    </section>
  );
}
