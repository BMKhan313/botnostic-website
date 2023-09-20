"use client"

import Image from "next/image"



const Footer = () => {

  return (
    <div className="bg-pack px-6 bg-cover pt-24 font-oxygen">
      <div className="block sm:flex justify-between items-center px-5">
        <div className="mb-[2rem] sm:mb-[0rem]">
          <Image src="/logo.png"
            alt="logo"
            width={200}
            height={2500}
          />{" "}
        </div>
        <div className="items-start">
          <p className="text-[24px] sm:text-[28px] md:text-[36px] font-bold uppercase text-white mb-8">
            Visit us today!
          </p>
          <div className="flex justify-start items-center mt-2">
            <Image
              className="w-[5%] h-auto" src="/location-icon.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-white text-[10px] sm:text-[12px] font-xs ml-1">
              Botnostic Solutions,
              Dafterkhwan North,
              Plot 94, Street 7,
              I-10/3, Islamabad Pakistan
            </p>
          </div>
          <div className="flex justify-start items-center mt-1">
            <Image
              className="w-[5%] h-auto" src="/phone-icon.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-white text-[10px] sm:text-[12px]  ml-1">+92 3002266226</p>
          </div>
          <div className="flex justify-start items-center mt-1">
            <Image
              className="w-[5%] h-auto" src="/email-icon.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-white ml-1 underline text-[10px] sm:text-[12px]  cursor-pointer">info@botnosticsolutions.ai </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[55px] justify-center">
        <p className="uppercase text-[22px] sm:text-[28px] md:text-[36px] text-gray-300 mr-5 font-extralight">
          Follow us
        </p>
        <Image
          className="w-[5%] h-auto" src="/fb-icon.png"
          alt="logo"
          width={100}
          height={100}
        />
        <Image
          className="w-[5%] h-auto ml-1" src="/linkedin-icon.png"
          alt="logo"
          width={100}
          height={100}
        />
        {/* <Image
          className="w-[5%] h-auto" src="/twitt.png"
          alt="logo"
          width={100}
          height={100}
        />
        <Image
          className="w-[5%] h-auto" src="/insta-icon.png"
          alt="logo"
          width={100}
          height={100}
        /> */}
      </div>
      <p className="text-center text-[14px] sm:text-[18px] md:text-[22px] pb-5 pt-[62px] text-white font-medium">
        © 2023 Botnostic Solutions (PVT) Ltd, All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
