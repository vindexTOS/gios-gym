import React from 'react'
 import {AiFillPhone,AiOutlineHome,AiFillLinkedin,AiFillYoutube,AiFillFacebook } from "react-icons/ai"
import {BsFillEnvelopeFill} from "react-icons/bs"


export default function Footer() {
  return (
     <footer    className="w-[100vw] h-[100px] bg-[#F9F6EE] flex items-center
     justify-between   mt-auto  "
    
       >
        <div className="flex gap-5 flex-col ml-5">
          
        <div><h1 >FOLLOW US</h1>
        <div className="h-[1px] bg-black w-[80%]"></div></div>

        <div className="flex flex-row gap-5 text-[2rem] ">
         
        <AiFillFacebook className='text-[#3b5998] cursor-pointer'/>

          <AiFillLinkedin  className="text-[#0077b5] cursor-pointer"/>
          <AiFillYoutube className="text-[#FF0000] cursor-pointer"/>
          </div>
        </div>
<div className="flex flex-col items-center   ">
<h1 className="text-[10px]">Copyright © Giosgym.ge All rights reserved!</h1>
<p className="text-[10px]">2022 By Vindex</p>
</div>

      <div className="w-[20%] flex flex-col  ">
       
        <h1>CONTACT US</h1>
        <div className="h-[2px] bg-black w-[50%]"></div>
        <div className='flex flex-col items-start gap-2'>
        <span className="flex flex-row items-center  justify-center gap-3"><p  ><AiOutlineHome className="text-[1.1rem]" /></p><p className='text-[13px] '>5476 Dongola Hwy,Conway,SC 29527</p></span>
        <span className="flex flex-row items-center  justify-center gap-3"><p><BsFillEnvelopeFill /></p><p className='text-[13px] '>giosgym@gmail.com</p></span>
        <span className="flex flex-row items-center  justify-center gap-3"><p><AiFillPhone/></p><p className='text-[13px]' >+995 555 555 555</p></span>
        </div>
      </div>
    </footer>
  )
}
