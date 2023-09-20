"use client"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from './dataBank'
import Image from "next/image";

const News = () => {

  const product = productData.map((item) => <dataBank />)

  return (
    <div >
         <div className='flex flex-col mt-[5rem] px-[1rem]'> 
          <h1 className='text-[18px] sm:text-[24px] md:text-[32px] font-extrabold text-[#0B3675] self-center font-oxygen mb-6'>LATEST NEWS AND UPDATES</h1>
          <h1 className='mb-4 text-[#0B3675] font-semibold text-[12px] sm:text-[16px] md:text-[20px] ml-5 font-oxygen'>Recent</h1>
          <Carousel className='mb-7'   responsive={responsive}>
           {
  productData.map((item) => (
    <div key={item.id} >
    <div className="rounded-md h-60 flex items-end justify-center card" style={{backgroundColor: item.bgColor}}  key={item.id} >
      
      <p className='bg-[#FFFFFF] w-[90%] mb-2 rounded text-[12px] sm:text-[16px] md:text-[18px] font-medium font-oxygen' style={{color: item.bgColor}}> NEWS</p>
    </div>
    <div className="shadow h-[100px] rounded-md bg-[#D9D9D9]"  ></div>
    </div>
    
  ))
}
          </Carousel>
          <div className="p-6 flex flex-col ">
            <h1 className="text-[18px] sm:text-[24px] md:text-[32px] font-extrabold text-[#0F397A] self-center mb-8 font-oxygen">OUR PARTNERS</h1>
            <Image  
              alt="partners.png"
              // Importing an image will
              // automatically set the width and height
              src="/partners.png"
              sizes="100vw"
              className="w-[100%] h-auto "

              // Make the image display full width
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
            width={500}
            height={500}
           
            />
          </div>
        </div>
       </div>
  )
}

export default News
