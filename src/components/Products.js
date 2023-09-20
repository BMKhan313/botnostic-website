"use client"

import Image from "next/image"
import Button from '@mui/material/Button';
import classnames from "classnames";
import { useEffect,useState } from "react";

const Products = () => {

  const imageUrls = [
    "/product-background.png",
    "/b2.png",
    "/b3.png",
    // Add more image URLs as needed
  ];
  const paragraphsArray = [
    "Expertly designed with the help of industry leading professionals, RecruitmentBot streamlines and enhances your hiring process. With the help of AI, RecruitmentBot screens through hundreds of candidates’ CVs and is able to filter out the best matches for your organisation based on criterias that are not just limited to objective metrics or bias.RecruitmentBot can assess the strengths of every candidate applying to your organisation, and provide you with not only the best choices, but it does so in seconds, saving time and resources. Further assessments can be done on certain capabilities of the shortlisted candidates through specific questions based on our data analytics. All this means that more focus can go into interviewing and selecting the best candidates, making it an indispensable asset to modern HR departments that often have to go through thousands of CVs for each position.",
    "Cutting-edge solutions in career advisory for students who want to find the best career path for their own unique skill sets. We aim at revolutionising how students make their career decisions, by centering the focus on their unique disposition and interests and providing a detailed report on their compatibility for each of their desired career options. It employs artificial intelligence injected by a team of computer scientists to generate the most optimal advice.My Career Dreams is a result of valuable advice offered by highly qualified career counsellors and input from psychologists used together by very experienced data scientists. With the help of Artificial intelligence, this service in the form of a chatbot serves as a personalised and interactive career counsellor. It engages users in insightful conversations, through which it can understand their aspirations, strengths and career goals. After analysing this information, it provides a report on what career paths are most suitable for the user. This offers real-time support that is accessible and adaptable to any user's unique needs. Aggregated analytics are offered to their respective educational institutions to support data driven decision making",
    "The strategic goal in any organisation is managing resources well, and this bot pinpoints how your organisation can maximise its resources..Our Bot uses Artificial Intelligence to analyse and assess your employees’ potential for various functional areas, and subsequently aligns their skill development and career progression accordingly, helping them utilise their existing talent through effective career progression planning.Talent Management Services is a one-stop solution to your hiring problems, starting from high turnover rates to lack of motivation to mismatched candidates. This means that your organisation’s internal growth progression is aligned with the true potential of your employees, so you all rise together. Our Bot can suggest new and relevant career opportunities internally that may arise for your existing employees in order to maximise the role requirements, and provide avenues for your employees and organisation to grow.",
    "Botnostic Solutions delivers services through the use of Artificial Intelligence enabled Chatbots. We take the traditional linear conversational flow to the next level and help build interactive, user centric experiences. We design & develop conventional AI first User Experiences (CUX) for our clients.Our bots, customised to your exact needs, offer analytics to help understand customer engagement with your brand. Engage with your users immediately through multiple channels and maintain an edge over your competitors.",
    "Botnostic Solutions offers solutions that enable businesses to make complex, data driven decisions using Business Intelligence Tools. Insights into large volumes of data play a pivotal role in today’s dynamically changing world and so, having the right solutions customised to offer analytics as per an organisation’s need is a growing need.Where required, we employ the use of Artificial Intelligence to analyse large amounts of data and offer the relevant analytics.",
    "We offer business analytics to organisations that are looking to expand and grow their customer base. Using our cutting edge Artificial Intelligence, we dive deep into your data in order to extract the right value that your business needs to gain a competitive advantage in the market. With the rapidly expanding market of the modern world, our business analytics helps your organisations stay updated with whatever direction the market takes. "
  ];
  const serviceTitles = ["Career Progression Services", "Career Advisory Services", "Recruitment Bot"];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [showMoreText, setShowMoreText] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Change the paragraph index after 5 seconds
    const paragraphInterval = setInterval(() => {
      setParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphsArray.length);
    }, 5000);

    return () => clearInterval(paragraphInterval);
  }, []);

  useEffect(() => {
    // Show service titles one by one after 5 seconds each
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % serviceTitles.length);
    }, 5000);

    return () => clearInterval(serviceInterval);
  }, []);

  const backgroundImageUrl = imageUrls[currentIndex];
  const currentParagraph = paragraphsArray[paragraphIndex]; 
  const currentService = serviceTitles[currentServiceIndex];

const handleLearnMoreClick = () => {
  // Toggle the state to show/hide more text
  setShowMoreText(!showMoreText);
};
  return (
    // <div className="text-[#fff] flex product-main" >
    <div   className={classnames(
      "w-screen px-[1%] bg-cover bg-center transition-all duration-1000 ease-in-out product-main",
      // {
      //   "bg-red-500": backgroundImageUrl === "../../public/product-background.png",
      //   "bg-blue-500": backgroundImageUrl === "../../public/b2.png",
      //   "bg-green-500": backgroundImageUrl === "../../public/b3.png",
      //   // Add more classes for additional images
      // }
    )}
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}>
      <div className="block sm:flex justify-between items-center prod-main2">
        {/* icons and names */}
        <div className="flex justify-between w-[90%]">
        <div className="flex flex-col w-[52%]  justify-center " >
          {/* w-[20%] sm:w-[25%] md:w-[30%]  lg:w-[35%]  */}
        <div className="flex items-center mb-8 font-oxygen">
          <div className="relative flex flex-col flex-grow items-center w-6">
             <span className="prod-text tracking-[0.2rem] mr-1 font-bold text-[17px] sm:text-[18px] md:text-[18px] ">PRODUCTS</span>
        </div>
        <div className="flex flex-col w-full"> 
        
        <div className="block sm:flex items-center mb-2">
         <Image 
         src='/mycareerd.png'
         width={60}
         height={60}
         alt="rec-bot-icon"
         />
         <h3 className="ml-2 font-semibold text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]
          text-left  leading-4 cursor-pointer ">My Career Dreams</h3>
        </div>
        
        <div className="block sm:flex items-center mb-2">
         <Image 
         src='/rec-bot2.png'
         width={60}
         height={60}
         alt="rec-bot-icon"
         />
         <h3 className="ml-2 font-semibold text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]
          text-left text-[16px] leading-4 cursor-pointer">RecruitmentBot</h3>
        </div>
       
        <div className="block sm:flex items-center">
         <Image 
         src='/tms.png'
         width={60}
         height={60}
         alt="rec-bot-icon"
         />
         <h3 className="ml-2 font-semibold text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]
          text-left text-[16px] leading-4 cursor-pointer">Talent Management Services</h3>
        </div>
        </div>
        </div>
        {/* services */}
        <div className="flex items-center mb-8 font-oxygen ">
          <div className="relative flex flex-col flex-grow items-center w-6">
             <span className="prod-text tracking-[0.2rem] mr-1 font-bold text-[17px] sm:text-[18px] md:text-[18px]">SERVICES</span>
        </div>
        <div className="flex flex-col w-full">
        
        <div className="block sm:flex items-center mb-2">
         <Image 
         src='/chat-dev.png'
         width={60}
         height={60}
         alt="rec-bot-icon"
         />
         <h3 className="ml-2 font-semibold text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]
           text-left  cursor-pointer">ChatBot Development</h3>
        </div>
        <div className="block sm:flex items-center mb-2">
         <Image 
         src='/business-int.png'
         width={60}
         height={60}
         alt="rec-bot-icon"
         />
         <h3 className="ml-2 font-semibold text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]

          text-left text-[16px] leading-4 cursor-pointer">Business Intelligence &
           Analytics Solution</h3>
        </div>
        <div className="block sm:flex items-center">
         <Image 
         src='/analytics-as-ser.png'
         width={60}
         height={60}
         alt="rec-bot-icon"
         />
         <h3 className="ml-2 font-semibold text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px]
           text-left text-[16px] leading-4 cursor-pointer">Analytics As A Service </h3>
        </div>
        </div>
        </div>
        
        </div>
        {/* center div */}
        <div className="flex flex-col w-[40%] sm:w-[44%] md:w-[48%] lg:w-[52%] items-center  h-[30rem]">
          <h1 className="font-extrabold text-[12px] sm:text-[18px] md:text-[24] lg:text-[40px] mb-3 tracking-wider font-oxygen">WHAT WE OFFER</h1>
          <div className="rounded-lg bg-[#D9D9D9] flex w-[100%] h-[24rem]">
          
          </div>
        </div>
        </div>
        {/* product text */}
       <div className="w-[90%] sm:w-[25%] md:w-[30%] text-left text-[16px] font-normal 
        mr-[4px] sm:mr-[0px] ml-[0.5rem] sm:ml-[2rem]
       self-center font-oxygen">
        <h2 className="font-black mb-4 text-[14px] sm:text-[14px] md:text-[16px] tracking-wide">PRODUCTS</h2>
        {/* <p>Designed by career advisors and industry professionals,
           our recruitment bot interactively assesses the disposition 
           of a candidate towards the career field they aim to pursue.</p> */}
           <p className="transition-all duration-3000 ease-in-out 
           text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] 
           font-oxygen">{showMoreText ? currentParagraph : currentParagraph.slice(0, 300) + "..."}</p>

           <button className="font-bold bg-[#F5BC4F]
            text-[#1C1E2B] hover:text-[#fff] mt-3 rounded-md sm:rounded-xl font-oxygen 
            hover:bg-[#d8af63] text-medium px-1 sm:px-2 md:px-2.5 py-1 sm:py-2 md:py-2.5 text-center
            text-[10px] sm:text-[11px] md:text-[16px]
            "
            onClick={handleLearnMoreClick} 
            > {showMoreText ? "Show Less" : "Learn More"}</button>
       </div>

      </div>

    </div>
  )
}

export default Products