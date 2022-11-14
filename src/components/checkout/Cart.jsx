import React, { useContext, useReducer, createContext } from "react";
import { SearchContext } from "../context";

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

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  React.useEffect(() => {
    console.log(items);
  }, [items]);
  if (items.length == 0) {
    return <div>EMPTY CART</div>;
  }
  return (
    <section className="bg-gray-300 w-[100vw] h-[100%] flex ">
      <div className="flex flex-col gap-5 bg-white    ]">
        {items.map((item, index) => {
          const { title, img, id, price } = item;
          return (
            <div className="flex flex-row">
              <img className="w-[80px] h-[70px] " src={img} />
              <h1>{title}</h1>
              <button onClick={() => handleRemove(index)}>Remove item</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
