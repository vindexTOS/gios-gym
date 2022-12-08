import React from 'react'
 import {AiFillPhone,AiOutlineHome,AiFillLinkedin,AiFillYoutube,AiFillFacebook } from "react-icons/ai"
import {BsFillEnvelopeFill} from "react-icons/bs"


export default function Footer() {
    return (
     <footer    className="w-[100vw] h-[150px] max_sm:h-[200px] bg-[#F9F6EE] flex items-center
     justify-between max_sm:justify-center max_sm:gap-[10rem]  mt-auto  "
    
       >
        <div className="flex gap-5 flex-col ml-5 max_sm:mb-[4.1rem] max_sm:gap-1 max_sm:justify-start max_sm:items-center max_sm:mb-[12px]">
          
        <div><h1 className="max_sm:text-[12px]">FOLLOW US</h1>
        <div className="h-[1px] bg-black w-[80%] max_sm:w-[100%]"></div></div>

        <div className="flex flex-row gap-5  max_sm:gap-1 max_sm:items-center  max_sm:flex-col text-[2rem] max_sm:text-[1.4rem]  ">
         
        <AiFillFacebook className='text-[#3b5998] cursor-pointer'/>

          <AiFillLinkedin  className="text-[#0077b5] cursor-pointer"/>
          <AiFillYoutube className="text-[#FF0000] cursor-pointer"/>
          </div>
        </div>
<div className="flex flex-col items-center  max_sm:absolute max_sm:justify-center  max_sm:mt-[10rem]">
<h1 className="text-[10px]">Copyright © Giosgym.ge All rights reserved!</h1>
<p className="text-[10px]">2022 By Vindex</p>
</div>

      <div className="w-[20%] flex flex-col   max_sm:items-center max_sm:mr-[2rem] max_sm:mb-[3.6rem] max_lg:mr-[6rem]     ">
       
        <h1 className="max_sm:text-[12px]    ">CONTACT US</h1>
        <div className="h-[2px] bg-black w-[90%] max_sm:h-[1px] max_sm:mb-2 "></div>
        <div className='flex flex-col items-start gap-2 '>
        <span className="flex flex-row items-center  justify-center gap-2"><p  ><AiOutlineHome className={ `text-[1.1rem] max_sm:text-[12px]  `  } /></p><p className='text-[13px] max_sm:text-[9px] max_lg:text-[11px]'>5476 Dongola Hwy,SC 527</p></span>
        <span className="flex flex-row items-center  justify-center gap-2"><p><BsFillEnvelopeFill  className={ `  max_sm:text-[12px]  `  }/></p><p className={ `text-[13px] max_sm:text-[7px] max_lg:text-[11px]`  } >giosgym@gmail.com</p></span>
        <span className="flex flex-row items-center  justify-center gap-2"><p><AiFillPhone  className={ `  max_sm:text-[12px]  `  }/></p><p className={ `text-[13px] max_sm:text-[8px] max_lg:text-[11px]`  } >+995 555 555 555</p></span>
        </div>
      </div>
    </footer>
  )
}
