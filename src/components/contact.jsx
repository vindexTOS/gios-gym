import React from "react";
import {SiGmail,SiInstagram,SiFacebook,SiTwitter} from "react-icons/si"
import {AiFillPhone } from "react-icons/ai"
 import contactFormArt from "../utils/contactFormArt"
export default function contact() {
  return (
    <form className="w-[100vw] h-[100vh]     flex flex-col items-center	 justify-center  ">
      <div className=" w-[90%] flex flex-col items-start justify-start gap-2">
        <div className="  flex flex-col gap-2 ">
          <input
            placeholder="Name"
            type="text"
            style={{
               background:"none" , borderBottom:"2px solid hsla(37, 89%, 52%, 0.6)",outline:"none"
            }}
          />
          <input
            placeholder="Email"
            type="email"
            style={{
              background:"none" , borderBottom:"2px solid hsla(37, 89%, 52%, 0.6)",outline:"none"
           }}
          />
        </div>
        <textarea
        placeholder="Contact us here or links below..."
          className="w-[50%] h-[300px]"
          style={{
            boxShadow: "1.9px 1px 3.8px hsla(37, 89%, 52%, 0.6)",
            outline:"none",
            background:"none"
          }}
        ></textarea>
        <div className="flex flex-row items-center  justify-center gap-2">
          <SiGmail/>giosgym@gmail.com
         < SiInstagram/>@giosgym
         <SiFacebook/>@giosgym
       <  SiTwitter/>@Giosgym
      < AiFillPhone/> +995 555 555 555 
        </div>
        <contactFormArt/>
       </div>
    </form>
  );
}
