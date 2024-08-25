import React, { useState } from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { product } from "../../data";
import Accordion from "../Component/Accordion";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';
import CountUp from 'react-countup';
import { MdApps, MdBusinessCenter, MdSecurity } from "react-icons/md";

export default function Become() {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.reveal', {
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
      delay: 200,
      reset: true
    });
  }, []);
  
  const [activeLink, setActiveLink] = useState(false);
  
  return (
    <main>
      <div className="my-10 bg-[#0B4B17]">
        <div className="right text-white h-[20rem] mx-5 py-10 ">
          <h1 className="mt-10 text-4xl font-bold reveal ">Work Your Way</h1>
          <p className="my-3 mt-10 text-lg reveal">
            Give your visitor a smooth online experience with a solid UX design
          </p>
          <button className="bg-[#5BBB7B] p-5  reveal font-bold text-lg mt-7 hover:bg-black">
            Become Seller
          </button>
        </div>
      </div>
      <div className="flex justify-between my-10 flex-col sm:flex-row sm:space-x-4 p-4 ">
        <div className="mx-5 text-xl font-bold left reveal">
          <ul>
            <li>
              <a
                href="#For Hiring"
                className={`${
                  activeLink === "For Hiring"
                    ? "underline underline-offset-4"
                    : "text-black"
                }`}
                onClick={() => setActiveLink("For Hiring")}
              >
                For Hiring
              </a>
            </li>
            <li>
              <a
                href="#For Freelancing"
                className={`${
                  activeLink === "For Freelancing"
                    ? "underline underline-offset-4"
                    : "text-black"
                }`}
                onClick={() => setActiveLink("For Freelancing")}
              >
                For Freelancing
              </a>
            </li>
          </ul>
        </div>
       {
        activeLink?(
          <div className="right reveal ">
            <h1 className="text-xl"> For Hiring </h1>
            <p className="my-3 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page  when looking at its layout.The <br />
              point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using ‘Content here, <br />
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum  <br /> 
              their default model text,    and a search for ‘lorem ipsum’ will 
              uncover many web sites still  in their infancy. Various versions  <br />
              have evolved over the years, sometimes by accident, sometimes on 
              purpose (injected humour and the like).
            </p>
            <button className="border border-[#5BBB7B] p-5 my-5 font-bold hover:bg-[#5BBB7B] hover:text-white">Get Started</button>
          </div>
        ):(
          <div className="right reveal">
            <h1 className="text-xl"> For Freelancing </h1>
            <p className="my-3 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page  when looking at its layout.The <br />
              point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using ‘Content here, <br />
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum  <br /> 
              their default model text,    and a search for ‘lorem ipsum’ will 
              uncover many web sites still  in their infancy. Various versions  <br />
              have evolved over the years, sometimes by accident, sometimes on 
              purpose (injected humour and the like).
            </p>
            <button className="border border-[#5BBB7B] p-5 my-5 font-bold hover:bg-[#5BBB7B] hover:text-white">Get Started</button>
          </div>
        )
       }
      </div>
      <div className="container">
        <div className="mx-10 my-10 drop reveal">
          <p className="text-3xl font-bold">Need something done ?</p>
          <p className="mt-3">Most viewed and all-time top-selling services</p>
        </div>
        <div className="grid justify-start grid-cols-1 mx-5 space-x-6 reveal icon md:grid-cols-2 lg:grid-cols-4 ">
          <div className="mx-4 icon1">
            <FaUserTie className="text-5xl " />
            <p className="mt-2 text-xl font-bold">Post a job</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. <br /> Simply fill in a title,
              description.
            </p>
          </div>
          <div className=" icon1">
            <MdBusinessCenter className="text-5xl" />
            <p className="mt-2 text-xl font-bold">Choose freelancers</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="icon1">
          <MdSecurity className="text-5xl" />
            <p className="mt-2 text-xl font-bold">Pay safely</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
          <div className="icon1">
          <MdApps className='text-4xl' />    
            <p className="mt-2 text-xl font-bold">We’re here to help</p>
            <p className="mt-3 text-lg">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
        </div>
      </div>

      <div className=" my-10 flex justify-between bg-[#FFEDE8] flex-col sm:flex-row sm:space-x-4 p-4">
        <div className="left mx-3 mt-[50px] h-full space-x-7 reveal">
          <p className="text-3xl font-bold">
            A whole world of freelance <br /> talent at your fingertips
          </p>
          <div className="flex items-center mt-5 space-x-3">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-black dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text-xl font-bold">Proof of quality</span>
          </div>
          <p className="mx-5">
            Check any pro’s work samples, client reviews, and identity <br />{" "}
            verification.
          </p>
          <div className="flex items-center mt-5 space-x-3">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-black dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="my-3 text-xl font-bold">No cost until you hire</span>
          </div>
          <p className="mx-5">
            Check any pro’s work samples, client reviews, and identity <br />{" "}
            verification.
          </p>
          <div className="flex items-center mt-5 space-x-3">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-black dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="my-3 text-xl font-bold">Safe and secure</span>
          </div>
          <p className="mx-5">
            Check any pro’s work samples, client reviews, and identity <br />{" "}
            verification.
          </p>
        </div>
        <div className="right reveal">
          <img src="images/h1.jpg" alt="" />
        </div>
      </div>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 space-x-10 md:grid-cols-2 lg:grid-cols-4 compteur">
          <div className="mt-[3rem]">
            <span className="px-4 text-4xl font-bold ">
            <CountUp
          start={0}
          end={890}
          duration={2.75}
          ></CountUp>
              M</span>
            <p className="text-lg ">Total Freelancer</p>
          </div>
          <div className="mt-[3rem]">
            <span className="px-4 text-4xl font-bold ">
            <CountUp
          start={0}
          end={750}
          duration={2.75}
          ></CountUp>
              M</span>
            <p className="text-lg ">Positive Review</p>
          </div>
          <div className="mt-[3rem]">
            <span className="px-4 text-4xl font-bold ">
            <CountUp
          start={0}
          end={98}
          duration={2.75}
          ></CountUp>
            M</span>
            <p className="text-lg ">Order recieved</p>
          </div>
          <div className="mt-[3rem]">
            <span className="px-4 text-4xl font-bold ">
            <CountUp
          start={0}
          end={336}
          duration={2.75}
          ></CountUp>
              M</span>
            <p className="text-lg ">Projects Completed</p>
          </div>
        </div>
      </div>
      <hr className="my-20" />
      <div className="mx-5 reveal">
        <h1 className="text-5xl ">Our Team</h1>
        <p className ="text-lg">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="container mx-auto bg-white reveal">
      <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {product.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-lg font-bold">
                    <a href={product.href} >
                      <span aria-hidden="true" className="absolute inset-0 font-bold" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-md gray-500 text-">{product.color}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="my-5 text-center reveal">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="my-3">Lorem ipsum dolor sit amet, consectetur.</p>
    </div>
   <div className="container">
    <Accordion />
   </div>
      
    </main>
  );
}
