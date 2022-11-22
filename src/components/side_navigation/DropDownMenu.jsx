import { motion } from "framer-motion";
import { SearchContext } from "../context";

import React, { useContext } from "react";

export default function DropDownMenu({ types }) {
  const { lang, categoryClick } = useContext(SearchContext);

  return (
    <motion.div
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className="sm:hidden flex flex-col absolute bg-[#F9F6EE] mt-[3.4rem] w-[60%] h-[100vh] "
      style={{
        boxShadow: "5px 4px 8px 2px rgba(0,0,0,0.75)",
      }}
    >
      {types.map((item) => {
        const { eng, geo, type } = item;
        return (
          <motion.button
            whileTap={{ backgroundColor: "gray", color: "red" }}
            className="text-start text-[2rem]"
            style={{ fontFamily: "Dosis" }}
            onClick={() => categoryClick(type)}
            key={type}
          >
            {!lang ? eng : geo}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
