import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Headertop = () => {
    
  return (
    <div className="absolute inset-y-4 inset-x-2 sm:inset-x-8 flex justify-between items-center font-oxygen h-10 z-10">

    <Image 
     src="/botnostic-logo.png"
     width={150}
     height={75}
     alt="Picture of the author"
     // className='h-auto'
    />
    <div className='flex items-center ml-4 font-oxygen'>

    <div className='hover:bg-[#21B0B0] cursor-pointer font-oxygen font-medium 
    text-[10px] sm:text-[14px] md:text-[16px] leading-7
     text-white box-border flex flex-row justify-center
     items-center px-3 w-14 sm:w-24 md:w-32 h-6 sm:h-8 md:h-9 
     top-11 border-2 border-teal-500 shadow-md rounded-xl '>CAREERS</div>

    <Link href="/contact-us " className='hover:bg-[#21B0B0] cursor-pointer font-oxygen font-medium 
    text-[10px] sm:text-[14px] md:text-[16px] leading-7
     text-white box-border flex flex-row justify-center
     items-center px-3 w-14 sm:w-24 md:w-32 h-6 sm:h-8 md:h-9 
     top-11 border-2 border-teal-500 shadow-md rounded-xl ml-3 mr-2'>CONTACT</Link>

    {/* <div className='menu '>MENU</div> */}
    <Navbar />
  
 

    {/* <Image 
    src="/menu-icon.png"
   //  width={40}
   //  height={20}
   width="0"
   height="0"
   sizes="100vw"
   className="w-full h-auto"
    alt="Picture of the author" 
 //    className='menu-icon'
 style={{
     width: '30px',
height: '15px',
// top: '54px',
marginLeft: '8px',
marginTop: '10px',
fontFamily: 'Roboto',
fontStyle: 'normal',
fontweight: 500,
fontSize: '16px',
lineHeight: '20px',
cursor: 'pointer',
color: '#FFFFFF'
       }}
    /> */}
    </div>
   
   </div>
  )
}

export default Headertop