"use client"

import React,{useState,useEffect} from 'react';
import Image from 'next/image';
// import photo from '../../public/photo.png'
import {Menuicon} from '../../public/menu-icon.png'
import Headertop from './Headertop';
import { Oxygen } from 'next/font/google';

const Header = () => {

  const paragraphsArray = ["Our goal is to provide our consumers with the right AI powered solution for their complications. The services we provide, using artificial intelligence, are able to offer unique solutions to career and corporate based issues faced by both individuals and corporations.",
  "Botnostic Solutions actively works with the government of Pakistan on the Prime Minister’s Youth Programme, providing our AI powered career counselling services to their website as a means to better equip the youth of the country with the right information on the best career choices for them.",
  "Our Recruitment services are currently being used by our corporate partners as a medium to aid them in hiring the best possible candidate with the help of AI, as well as manage their own employees in the most efficient manner possible."
]
const [paragraphIndex, setParagraphIndex] = useState(0);

useEffect(() => {
  // Change the paragraph index after 5 seconds
  const paragraphInterval = setInterval(() => {
    setParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphsArray.length);
  }, 8000);

  return () => clearInterval(paragraphInterval);
}, []);

const currentParagraph = paragraphsArray[paragraphIndex];

  return (
    <div className=" h-full header">
     
      {/* Content */}
        <Headertop  />
      <div className='w-[100%] flex flex-col mt-[9rem] md:mt-[0.5rem] ml-[-4rem] text-left  font-oxygen'>
        <h1 className='text-[#21B0B0] w-[120%] sm:w-[90%] md:w-[45%] 
        text-[11px] xsm:text-[20px] md:text-[22px] font-semibold ' >Spearheading the augmentation of artificial intelligence for business solutions</h1>
        <div className=' max-h-[380px] mt-2 w-[120%] sm:w-[80%] md:w-[40%] lg:w-[25%] text-[8px] 
        xsm:text-[14px] md:text-[17px] transition-all duration-3000 ease-in-out font-oxygen'>{currentParagraph}</div>
      </div>
    </div>
  );
  
};

export default Header;

