import React, { useContext } from "react";
import { SearchContext } from "../context";
import { motion } from "framer-motion";
import DropDownMenu from "./DropDownMenu";
import { VscThreeBars } from "react-icons/vsc";
import { useEffect } from "react";

export default function Navigation() {
  const { lang, categoryClick, types } = useContext(SearchContext);

  const [dropDown, setDropDown] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      className="  max_sm:overflow-x-hidden side-navigation w-[100%] bg-[#F9F6EE] flex h-[60px]    "
      style={{
        boxShadow: "1.9px 3.8px 3.8px hsl(0deg 0% 0% / 0.44)",
      }}
    >
      <div className="sm:hidden flex items-center ml-[10px]">
        <button onClick={() => setDropDown(!dropDown)}>
          <VscThreeBars className="text-[2rem]" />
        </button>
      </div>
      {dropDown && <DropDownMenu types={types} lang={lang} />}
      <div className="flex flex-row  max_sm:hidden items-center justify-between       ">
        {types.map((item) => {
          const { eng, geo, type } = item;
          return (
            <motion.button
              whileHover={{
                backgroundColor: "hsla(37, 89%, 52%, 0.6)",
                color: "white",
              }}
              transition={{
                easeOut: [0.17, 0.67, 0.83, 0.67],
              }}
              style={{
                fontFamily: "Dosis",
                fontSize: "1rem",
                height: "100%",
                width: "9rem",
              }}
              onClick={() => categoryClick(type)}
              key={type}
            >
              {!lang ? eng : geo}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
