import React from "react";
import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className=" flex items-center justify-center w-[50%] h-[7rem] gap-5 ">
      <motion.div
        className="bg-[#FF0000] w-[2rem] bg-opacity-10 rounded-[10px]"
        initial={{ height: "10px" }}
        animate={{ height: "6rem" }}
        transition={{ ease: "linear", duration: 1.3, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="bg-[#FF0000] w-[2rem]  bg-opacity-10 rounded-[10px]"
        initial={{ height: "1rem" }}
        animate={{ height: "6rem" }}
        transition={{ ease: "linear", duration: 1.2, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="bg-[#FF0000] w-[2rem] bg-opacity-10 rounded-[10px]"
        initial={{ height: "1.3rem" }}
        animate={{ height: "6rem" }}
        transition={{ ease: "linear", duration: 1, repeat: Infinity }}
      ></motion.div>
    </div>
  );
}
