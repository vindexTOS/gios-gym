import { motion } from "framer-motion";
import { SearchContext } from "../context";

import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function DropDownMenu({ types }) {
  const { lang, categoryClick } = useContext(SearchContext);

  return (
 <motion.div
      initial={{ x: -400 }}
      animate={{ x: 0}}
      exit={{ x: -100 }}
      className="sm:hidden flex flex-col  z-30 absolute bg-[#F9F6EE] mt-[3.7rem] w-[100vw] h-[100vh] "
      style={{
        boxShadow: "5px 4px 8px 2px rgba(0,0,0,0.75)",
        backgroundColor:  "hsla(251, 3%, 87%, 0.46)" 
 
      }}
    >
 {types.map((item) => {
        const { eng, geo, type,link } = item;
        return (
          <Link to={link}><motion.button
            whileTap={{ backgroundColor: "gray", color: "red" }}
            className="text-center text-white text-[1.7rem]    w-[100%]"
            style={{ fontFamily: "Dosis" ,backgroundColor:" hsla(29, 100%, 52%, 0.92)"}}
            onClick={() => categoryClick(type)}
            key={type}
          >
            
            {!lang ? eng : geo}
          </motion.button>
          <div className="w-[100%] h-[2px] bg-white"></div></Link>
        );
      })}  
    </motion.div> 
  );
}
