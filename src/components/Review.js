import Image from "next/image"
import { Reviews } from "./dataBank"

const Review = () => {
    return (
        <div className="font-inter">
            <div className="flex bg-[#0B3675]  ">
                <div className="w-1/3 p-4 flex flex-col justify-center font-inter">
                    <h1 className="mb-2 text-[28px] font-black  text-[#5EFCFC]">Customer Review</h1>
                    <div className="text-left text-[14px] font-medium text-[#fff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna
                        aliqua. Ut enim ad minim
                        veniam, quis nostrud </div>
                </div>
                <div className="p-6 flex">

                    <div className="flex flex-col max-w-xs mr-3">
                      
                         <Image
                            alt="usericon"
                            // Importing an image will
                            // automatically set the width and height
                            src="/usericon.png"
                            sizes="100vw"
                            className="w-[100%] h-auto rounded-lg "
                            width={100}
                            height={100}

                        />
                        <div className=" bg-[#EBEBEB] mt-[-18px] rounded-xl">
                            <p className="text-[12px] w-[95%] font-semibold h-[12rem] p-2 text-left flex justify-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna
                                aliqua. Ut enim ad minim
                                veniam, quis nostrud </p>
                        </div>
                      
                    </div>
                    <div className="flex flex-col max-w-xs mr-3">
                      
                      <Image
                         alt="usericon"
                         // Importing an image will
                         // automatically set the width and height
                         src="/usericon.png"
                         sizes="100vw"
                         className="w-[100%] h-auto rounded-lg "
                         width={100}
                         height={100}

                     />
                     <div className=" bg-[#EBEBEB] mt-[-18px] rounded-xl">
                         <p className="text-[12px] w-[95%] font-semibold h-[12rem] p-2 text-left flex justify-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna
                             aliqua. Ut enim ad minim
                             veniam, quis nostrud </p>
                     </div>
                   
                 </div>
                 <div className="flex flex-col max-w-xs mr-3">
                      
                      <Image
                         alt="usericon"
                         // Importing an image will
                         // automatically set the width and height
                         src="/usericon.png"
                         sizes="100vw"
                         className="w-[100%] h-auto rounded-lg "
                         width={100}
                         height={100}

                     />
                     <div className=" bg-[#EBEBEB] mt-[-18px] rounded-xl">
                         <p className="text-[12px] w-[95%] font-semibold h-[12rem] p-2 text-left flex justify-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna
                             aliqua. Ut enim ad minim
                             veniam, quis nostrud </p>
                     </div>
                   
                 </div>
                </div>
               
            </div>
            <div className="bg-[#fff] mt-[6rem] flex flex-col justify-center items-center mb-14">
                   <h1 className="font-bold text-[40px] underline text-[#0F397A] mb-4">MEDIA LINKS</h1>
               <div className=" flex ">
              <div>
              <Image
                            alt="geo-1.png"
                            // Importing an image will
                            // automatically set the width and height
                            src="/geo.png"
                            sizes="100vw"
                            className="w-[8rem]"
                            width={400}
                            height={400}
                           

                        />
              </div>
                        <div>
                        <Image
                            alt="geo.png"
                            // Importing an image will
                            // automatically set the width and height
                            src="/media-3.png"
                            sizes="100vw"
                            className="w-[8rem]  "
                            width={400}
                            height={400}

                        />
                        </div>
                       <div>
                       <Image
                            alt="fm"
                            // Importing an image will
                            // automatically set the width and height
                            src="/fm-2.png"
                            sizes="100vw"
                            className="w-[8rem] "
                            width={400}
                            height={400}

                        />
                       </div>
               </div>
            </div>
        </div>
    )
}

export default Review