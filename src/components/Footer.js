"use client"

import Image from "next/image"



const Footer = () => {

  return (
    <div className="bg-pack px-12 bg-cover pt-24 font-oxygen">
      <div className="flex justify-between items-center px-5">
        <div>
          <Image className="w-[100%]" src="/logo.png"
            alt="logo"
            width={120}
            height={120}
          />{" "}
        </div>
        <div className="items-start">
          <p className="text-[36px] font-bold uppercase text-white mb-8">
            Visit us today!
          </p>
          <div className="flex justify-start items-center mt-2">
            <Image
              className="w-[5%] h-auto" src="/location-icon.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-white font-xs ml-1">
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
            <p className="text-white ml-1">+923121602666</p>
          </div>
          <div className="flex justify-start items-center mt-1">
            <Image
              className="w-[5%] h-auto" src="/email-icon.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-white ml-1 underline cursor-pointer">mailto:info@botnosticsolutions.ai </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[55px] justify-center">
        <p className="uppercase text-[36px] text-gray-300 mr-5 font-extralight">
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
        <Image
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
        />
      </div>
      <p className="text-center text-[22px] pb-5 pt-[62px] text-white font-medium">
        © 2023 Botnostic Solutions (PVT) Ltd, All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
