"use client"

import Image from "next/image"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Cagliostro } from "next/font/google";
import Link from "next/link";
import Footer from "../Footer";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to track whether the navbar is open or close
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Function to toggle the navbar
  };
  console.log('navbar', isNavbarOpen)
  return (
    <div className="flex flex-col ">
      <div className="">
        <Image
          src='/contact.jpeg'
          alt="contac image"
          width={500}
          height={500}
          className="w-[100%]"
        />
      </div>
      <div className="absolute inset-0 bg-opacity-50  h-fit">
       
        {/* Full-screen Navbar */}
        <div
          className={`${isNavbarOpen ? "block" : "hidden"
            }  top-0 left-0 right-0 bg-[#000] p-4 z-10 h-auto flex  flex-col`}
        >
         {/* prod-services place*/}
         {/* <hr class="h-px bg-[#f3f] border-0 dark:bg-[#f3f]"></hr> */}
          <div className="flex flex-col mt-20">
          <div className="flex ">
          <div className="flex flex-col mr-[2rem] w-[85%]">
            <div className="flex justify-evenly ">
              <h2 className="text-white ml-[-12rem]">PRODUCTS</h2>
              <h2 className="text-white">SERVICES</h2>
            </div>
          <hr className="h-px bg-[#fff] border-0 dark:bg-[#fff] "></hr>
           <div className="flex justify-evenly ">
           <div className="py-2 ">
            {/* <h1 className="text-white underline text-white mr-4">PRODUCTS</h1> */}
            <div className="flex flex-col text-white mt-4 mb-1">
              <div className="flex items-center">

                <Image
                  src='/recbot.png'
                  alt="contact image"
                  width={80}
                  height={80}
                  // className="w-[50%]"
                />
                <h4 className="text-[12px] ml-1">Recruitment Bot</h4>
              </div>
            </div>
            <div className="flex flex-col text-white mb-1">
              <div className="flex items-center">

                <Image
                  src='/mycareer.png'
                  alt="contact image"
                  width={80}
                  height={80}
                  // className="w-[50%]"
                />
                <h4 className="text-[12px] ml-1">Career Advisory Service</h4>
              </div>

            </div>
            <div className="flex flex-col text-white mb-1">
              <div className="flex items-center">

                <Image
                  src='/careerprog.png'
                  alt="contact image"
                  width={80}
                  height={80}
                  // className="w-[50%]"
                />
                <h4 className="text-[12px] ml-1 ">Career Progression Service</h4>
              </div>

            </div>
          </div>
          <div className=" ">
            {/* <h1 className="text-white underline text-white mr-4">PRODUCTS</h1> */}
            {/* <hr class="h-px my-20 bg-[#f3f] border-0 dark:bg-[#f3f]"></hr> */}
            <div className="flex flex-col text-white mt-4">
              <div className="flex items-center">

                <Image
                  src='/chatbot-dev.png'
                  alt="contact image"
                  width={80}
                  height={80}
                  // className="w-[50%]"
                />
                <h4 className="text-[12px] ml-1">Chat Bot Development</h4>
              </div>
            </div>
            <div className="flex flex-col text-white">
              <div className="flex items-center">

                <Image
                  src='/business-intelligence.png'
                  alt="contact image"
                  width={80}
                  height={80}
                  // className="w-[50%]"
                />
                <h4 className="text-[12px] ml-1">Business Intelligence &Analytics Solution</h4>
              </div>

            </div>
            <div className="flex flex-col text-white">
              <div className="flex items-center">

                <Image
                  src='/analytics.png'
                  alt="contact image"
                  width={80}
                  height={80}
                  // className="w-[50%]"
                />
                <h4 className="text-[12px] ml-1 ">Analytics as a Service</h4>
              </div>

            </div>
          </div>
           </div>
         
          </div>
          <div className=" py-2 ">
            <h1 className="text-white ">COMPANY</h1>
            <div className="flex flex-col mt-4 items-center">
           
             <Link href="/" className="text-[12px] ml-1 underline text-white mb-4">About Us</Link>
             
             <Link href="/" className="text-[12px] ml-1 underline text-white mb-4">Partners</Link>
            
             <Link href="/" className="text-[12px] ml-1 underline text-white mb-4">Media</Link>
            
             <Link href="/" className="text-[12px] ml-1 underline text-white mb-4">Testimonial</Link>
           
             <Link href="/" className="text-[12px] ml-1 underline text-white mb-4">Contact Us</Link>
           
            </div>
           
            
          </div>
          </div>
          </div>
        </div>

      </div>
      <div className="absolute top-0 right-0 p-6">
        {/* Menu Kebab or Close Icon */}
        <button
          onClick={toggleNavbar}
          className="text-white text-xl focus:outline-none"
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
      <div className="mt-6 flex items-center flex-col justify-center">
          <h3 className="text-[#1853A9] text-[30px] mb-3">Our team of experts are on hand to answer your questions.</h3>
        <hr className="w-[67%] h-[2px] bg-[#1853A9] border-0 dark:bg-[#1853A9]"></hr>
      </div>
      <div className=" bg-opacity-50 bg-gray-100 mt-32">
        <div className="items-center flex flex-col  ">

          <Formik
            initialValues={{
              name: "",
              email: "",
              contactNumber: "",
              membershipNumber: "",
              subject: "",
              message: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="px-5 py-12 w-[50%] ">

                <label className="flex mb-6 text-medium font-semibold text-gray-800 ">
                  Please note: starred fields are required{" "}
                </label>

                <div className="mb-6">
                  <label className="flex mb-2 items-center text-sm font-semibold text-gray-800 ">
                    Name <p className="text-red-700">*
                    </p>
                    {errors.name && touched.name ? (
                      <div className=" mx-1 text-xs text-red-600">{errors.name}</div>
                    ) : null}
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="shadow-sm bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  />

                </div>

                <div className="mb-6">
                  <label className="flex mb-2 text-sm font-semibold text-gray-800 ">
                    Email <p className="text-red-700">*</p>
                    {errors.email && touched.email ? (
                      <div className=" mx-1 text-xs text-red-600">{errors.email}</div>
                    ) : null}
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="shadow-sm bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  />
                </div>

                <div className="mb-6">
                  <label className="flex mb-2 text-sm font-semibold text-gray-800 ">
                    Contact Number 
                  </label>
                  <Field
                    name="contactNumber"
                    className="shadow-sm bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  />
                </div>
                <div className="mb-6">
                  <label className="flex mb-2 text-sm font-semibold text-gray-800 ">
                    P@sha Membership No. (if any)
                  </label>
                  <Field
                    name="membershipNumber"
                    className="shadow-sm bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  />
                </div>

                <div className="mb-6">
                  <label className="flex mb-2 text-sm font-semibold text-gray-800 ">
                    Subject <p className="text-red-700">*</p>
                    {errors.subject && touched.subject ? (
                      <div className=" mx-1 text-xs text-red-600">{errors.subject}</div>
                    ) : null}
                  </label>
                  <Field
                    name="subject"
                    className="shadow-sm bg-[#D9D9D9]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                  />
                </div>
                <div className="mb-6">
                  <label className="flex mb-2 text-sm font-semibold text-gray-900">
                    Your message<p className="text-red-700">*</p>
                    {errors.message && touched.message ? (
                      <div className=" mx-1 text-xs text-red-600">{errors.message}</div>
                    ) : null}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="block p-2.5 w-full text-medium text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[#D9D9D9]"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <button
                  type="submit"
                  className="text-white bg-blue-900 hover:bg-blue-800  font-lg rounded-lg text-medium px-12 py-2.5 text-center "
                >
                  Submit
                </button>
                <button className="font-medium text-[#0F3979]"
                type="button"
                onClick={() => {
                  // Access the resetForm function provided by Formik and call it to reset the form
                  // resetForm();
                }}
                >Clear form</button>
                </div>
              </Form>
            )}

          </Formik>
        </div>
      </div>
     
      <Footer />
    </div>
  )
}

export default Contact
// i want to the Image as background image