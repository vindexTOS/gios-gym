import React from "react";
import {SiGmail,SiInstagram,SiFacebook,SiTwitter} from "react-icons/si"
import {AiFillPhone } from "react-icons/ai"
import contactImg from "../utils/contactImg.svg"
 export default function contact() {
  return (
    <form className="w-[100vw] h-[100vh]  max_sm:mb-[30rem]   flex flex-row items-center gap-20	 justify-center  ">

      <div className=" w-[100%] flex flex-col items-start justify-start gap-2 ml-5 z-10 ">
        <div className="  flex flex-col gap-2 ">
          <input
            placeholder="Name"
            type="text"
            style={{
              background:" linear-gradient(302deg, rgba(102,245,250,0.12958686892725846) 34%, rgba(204,255,253,0.23883056640625) 65%, rgba(208,248,255,0.1632003143054097) 100%)" , borderBottom:"2px solid hsla(37, 89%, 52%, 0.6)",outline:"none"
            }}
          />
          <input
            placeholder="Email"
            type="email"
            style={{
              background:" linear-gradient(302deg, rgba(102,245,250,0.12958686892725846) 34%, rgba(204,255,253,0.23883056640625) 65%, rgba(208,248,255,0.1632003143054097) 100%)" , borderBottom:"2px solid hsla(37, 89%, 52%, 0.6)",outline:"none"
           }}
          />
        </div>
        <textarea
        placeholder="Contact us here or links below..."
          className="w-[50%] h-[300px]"
          style={{
            boxShadow: "1.9px 1px 3.8px hsla(37, 89%, 52%, 0.6)",
            outline:"none",
            background:"linear-gradient(302deg, rgba(102,245,250,0.15199583251269255) 34%, rgba(204,255,253,0.5861695019804797) 65%, rgba(208,248,255,0.5245448521205357) 100%)"
          }}
        ></textarea>
        <div className="contact-info flex flex-col items-start  justify-center gap-2">
         <p > <SiGmail className="text-[#c71610]"/>giosgym@gmail.com</p>
         <p>< SiInstagram className="text-[#cd486b]"/>@giosgym</p>
         <p> <SiFacebook className="text-[#3b5998]"/>@giosgym</p>
         <p> <  SiTwitter className="text-[#00acee]"/>@Giosgym</p>
      <p>  < AiFillPhone/> +995 555 555 555 </p>
      <p>
        <contactFormArt/>
        </p>
        </div>
        </div>
        <div className=" svg-icon w-[80%] z-0 absolute  ml-[20rem] flex items-center justify-center"> <img src={contactImg}/></div>

    </form>
  );
}
