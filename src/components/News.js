"use client"


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from './dataBank'
import Image from "next/image";

const News = () => {

  const product = productData.map((item) => <dataBank />)

  return (
    <div >
         <div className='flex flex-col mt-[5rem] '> 
          <h1 className='text-[32px] font-extrabold text-[#0B3675] self-center font-oxygen mb-4'>LATEST NEWS AND UPDATES</h1>
          <h1 className='mb-4 text-[#0B3675] font-semibold text-[20px] ml-5 font-oxygen'>Recent</h1>
          <Carousel className='mb-7'   responsive={responsive}>
           {
  productData.map((item) => (
    <div key={item.id} >
    <div className="rounded-md h-60 flex items-end justify-center card" style={{backgroundColor: item.bgColor}}  key={item.id} >
      
      <p className='bg-[#FFFFFF] w-[90%] mb-2 rounded text-[18px] font-medium font-oxygen' style={{color: item.bgColor}}> NEWS</p>
    </div>
    <div className="shadow h-[100px] rounded-md bg-[#D9D9D9]"  ></div>
    </div>
    
  ))
}
          </Carousel>
          <div className="p-6 flex flex-col ">
            <h1 className="text-[32px] font-extrabold text-[#0F397A] self-center mb-8 font-oxygen">OUR PARTNERS</h1>
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

// {
//   productData.map((item) => (
//     <div className="card" key={item.id}>
//       {/* <img className="product--image" src={item.url} alt="product image" /> */}
//       <h2>{item.name}</h2>
//       <p className="price">{item.price}</p>
//       <p>{item.description}</p>
//       <p>
//         <button>Add to Cart</button>
//       </p>
//     </div>
//   ))
// }