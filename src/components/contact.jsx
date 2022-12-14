 import React,{useRef,useState} from "react";
import {SiGmail,SiInstagram,SiFacebook,SiTwitter} from "react-icons/si"
import {AiFillPhone,AiOutlineSend } from "react-icons/ai"
 import contactImg from "../utils/contactImg.svg"
import {motion as m} from "framer-motion"



const SucssesContact = ()=>{
return <div className="absolute flex items-start  ">
    <m.div className="h-[2.5rem] w-[9rem] bg-green-400 flex items-center justify-center rounded-[5px]"
    initial={{y:-600}}
    animate={{y:1}}
    exit={{ duration: 2000,
      fill: "forwards" }}

    ><h1 className="text-[11px] text-white">your message sent successfully</h1></m.div>
  </div>
}

 
 export default function Contact( ) {

 

  const [succsess,setSuccsess] = useState(false)
  const onSubmitClick = (e)=>{
    e.preventDefault()
     setSuccsess(!succsess)
    const time = setTimeout(()=> {
      setSuccsess(false)
    },1000)
  time()
  }


  
  return (
    <form onSubmit={onSubmitClick }
     
    className="w-[100vw] h-[100%]  mt-10  pb-10 flex flex-row items-center gap-20	 justify-center  ">
              {succsess && < SucssesContact />}


      <div className=" w-[100%] flex flex-col items-start justify-start gap-2 ml-5 z-10 max_sm:items-center">
        <div className="flex flex-col gap-2 max_sm:items-start max_sm:justify-start  max_sm:w-[90%]">
          <input
            placeholder="Name"
            name="user_name"
            type="text"
            style={{
              background:" linear-gradient(302deg, rgba(102,245,250,0.12958686892725846) 34%, rgba(204,255,253,0.23883056640625) 65%, rgba(208,248,255,0.1632003143054097) 100%)" , borderBottom:"2px solid hsla(37, 89%, 52%, 0.6)",outline:"none"
            }}
          />
          <input

            placeholder="Email"
            name="user_email"
            type="email"
            style={{
              background:" linear-gradient(302deg, rgba(102,245,250,0.12958686892725846) 34%, rgba(204,255,253,0.23883056640625) 65%, rgba(208,248,255,0.1632003143054097) 100%)" , borderBottom:"2px solid hsla(37, 89%, 52%, 0.6)",outline:"none"
           }}
          />
        </div>
        <textarea
        placeholder="Contact us here or links below..."
        name="message"
          className="w-[50%] h-[300px] max_sm:w-[90%] max_sm:h-[350px]"
          style={{
            boxShadow: "1.9px 1px 3.8px hsla(37, 89%, 52%, 0.6)",
            outline:"none",
            background:"linear-gradient(302deg, rgba(102,245,250,0.15199583251269255) 34%, rgba(204,255,253,0.5861695019804797) 65%, rgba(208,248,255,0.5245448521205357) 100%)"
          }}
        ></textarea>
                <div className="flex items-end justify-end w-[50%]"><m.button 
                type="submit"
                style={{backgroundColor:"rgb(250,208,102)",color:"white"}}
                whileHover={{
                  backgroundColor:"rgb(250,161,102)"
                }}
                className="flex flex-row items-center justify-center gap-1 w-[5rem] h-[2rem]   rounded-[3px]">Send< AiOutlineSend style={{ fontSize:"1rem" }}/></m.button></div>

         <div className="contact-info flex flex-col items-start  justify-center gap-2   max_sm:w-[90%]">
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
        <div className=" svg-icon w-[80%] z-0 absolute  ml-[20rem] flex items-center justify-center max_sm:ml-[5rem]"> <img src={contactImg}/></div>

    </form>
  );
}


