import React, { useContext } from "react";
import { SearchContext } from "../context";

export default function Cart() {
  const { card, setCard } = useContext(SearchContext);

  React.useEffect(() => {
    console.log(card);
  }, [card]);
  return (
    <div>
      {card.map((item) => {
        const { title } = item;
        return (
          <div>
            {" "}
            <h1>{title}</h1> <button>Delete item</button>
          </div>
        );
      })}
    </div>
  );
}
