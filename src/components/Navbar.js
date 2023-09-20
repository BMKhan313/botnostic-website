import React from 'react'
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to track whether the navbar is open or close
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Function to toggle the navbar
  };

  return (
    <>
      <div className="absolute inset-0 bg-opacity-50 font-Roboto h-fit">

        {/* Full-screen Navbar */}
        <div
          className={`${isNavbarOpen ? "block" : "hidden"
            }  top-0 left-0 right-0 bg-[#000] p-4 z-10 h-auto flex  flex-col`}
        >
          {/* prod-services place*/}
          {/* <hr class="h-px bg-[#f3f] border-0 dark:bg-[#f3f]"></hr> */}
          <div className="flex flex-col mt-20">
            <div className="flex ">

              <div className="flex justify-between mr-[4rem] md2:mr-[9rem] w-[65%]">

                <div className="py-2 flex flex-col items-start">
                  <h1 className="text-white text-[12px] sm:text-[16px] md:text-[22px]  ">PRODUCTS</h1>
                  <div className="flex flex-col text-white mt-4 mb-1">

                    
                  </div>
                  <div className="flex flex-col text-white mb-1">
                    <div className="flex items-center">

                      <Image
                        src='/mycareerd.png'
                        alt="contact image"
                        width={60}
                        height={60}
                      // className="w-[40%] xsm:w-[50%] sm:w-[60%] md:w-[80%] lg:w-[100%] "
                      
                      />
                      
                      <h4 className="text-[8px]  md:text-[10px] lg:text-[14px] ml-1">My Career Dreams</h4>
                    </div>

                  </div>
                  <div className="flex items-center mb-1">

                      <Image
                        src='/rec-bot2.png'
                        alt="contact image"
                        width={60}
                        height={60}
                      // className="w-[40%] xsm:w-[50%] sm:w-[60%] md:w-[80%] lg:w-[100%] "
                      
                      // 
                      
                      />
                      <h4 className="text-[8px]  md:text-[10px] lg:text-[14px] ml-1 ">RecruitmentBot</h4>
                    </div>
                  <div className="flex flex-col text-white mb-1">
                    <div className="flex items-center">

                      <Image
                        src='/tms.png'
                        alt="contact image"
                        width={60}
                        height={60}
                      // className="w-[40%] xsm:w-[50%] sm:w-[60%] md:w-[80%] lg:w-[100%] "
                      
                      />
                      
                      <h4 className="text-[8px]  md:text-[10px] lg:text-[14px] ml-1 ">Talent Management Services</h4>
                    </div>

                  </div>
                </div>

                <div className="py-2 flex flex-col items-start ml-12 sm:ml-6 ">
                  <h2 className="text-white text-[12px] sm:text-[16px] md:text-[22px] ">SERVICES</h2>
                  <div className="flex flex-col text-white mt-4">

                    <div className="flex items-center">

                      <Image
                        src='/chat-dev.png'
                        alt="contact image"
                        width={60}
                        height={60}
                      // className="w-[40%] xsm:w-[50%] sm:w-[60%] md:w-[80%] lg:w-[100%] "
                      
                      />
                      
                      <h4 className="text-[8px]  md:text-[10px] lg:text-[14px] ml-1">ChatBot Development</h4>
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    <div className="flex items-center">

                      <Image
                        src='/business-int.png'
                        alt="contact image"
                        width={60}
                        height={60}
                      // className="w-[40%] xsm:w-[50%] sm:w-[60%] md:w-[80%] lg:w-[100%] "
                      
                      />
                      
                      <h4 className="text-[8px]  md:text-[10px] lg:text-[14px] ml-1">Business Intelligence &Analytics Solution</h4>
                    </div>

                  </div>
                  <div className="flex flex-col text-white">
                    <div className="flex items-center">

                      <Image
                        src='/analytics-as-ser.png'
                        alt="contact image"
                        width={60}
                        height={60}
                      // className="w-[40%] xsm:w-[50%] sm:w-[60%] md:w-[80%] lg:w-[100%] "
                      
                      />
                      
                      <h4 className="text-[8px]  md:text-[10px] lg:text-[14px] ml-1 ">Analytics As A Service</h4>
                    </div>

                  </div>
                </div>

              </div>
              {/* company */}
              <div className=" py-2 flex flex-col">
                <h1 className="text-white text-[12px] sm:text-[16px] md:text-[22px] ">COMPANY</h1>
                <div className="flex flex-col mt-6 items-center">

                  <Link href="/" className="text-[8px] xsm:text-[10px]  md:text-[16px]  ml-1 text-white mb-3 xsm:mb-5 md:mb-3 ">About Us</Link>

                  <Link href="/" className="text-[8px] xsm:text-[10px]  md:text-[16px]  ml-1 text-white mb-3 xsm:mb-5 md:mb-3 ">Partners</Link>

                  <Link href="/" className="text-[8px] xsm:text-[10px]  md:text-[16px]  ml-1 text-white mb-3 xsm:mb-5 md:mb-3 ">Media</Link>

                  <Link href="/" className="text-[8px] xsm:text-[10px]  md:text-[16px]  ml-1 text-white mb-3 xsm:mb-5 md:mb-3 ">Testimonial</Link>

                  <Link href="/" className="text-[8px] xsm:text-[10px]  md:text-[16px]  ml-1 text-white mb-3 xsm:mb-5 md:mb-3 ">Contact Us</Link>

                </div>


              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="absolute top-0 right-0 p-6 contents font-Roboto">
        {/* Menu Kebab or Close Icon */}
        <button
          onClick={toggleNavbar}
          className="text-white text-xl focus:outline-none "
          style={{ zIndex: 1 }} // Ensure that the button is above the navbar
        >
          {isNavbarOpen ? (
            // Close Icon (X)
            <span>&times;</span>
          ) : (
            // Menu Kebab Icon
            <span>&#9776;</span>
          )}
        </button>
      </div>
    </>
  )
}

export default Navbar