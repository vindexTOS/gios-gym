import React from 'react'
 import {AiFillPhone,AiOutlineHome } from "react-icons/ai"
import {BsFillEnvelopeFill} from "react-icons/bs"


export default function Footer() {
  return (
     <footer    className="w-[100vw] h-[100px] bg-[#F9F6EE] flex items-center  justify-center   mt-auto  "
    
    >

      <div className="w-[20%] flex flex-col ">
        <h1>Contact</h1>
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
