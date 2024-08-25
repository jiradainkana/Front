import React, { useState } from "react";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';
import CountUp from 'react-countup';
import { Link, useNavigate } from "react-router-dom";
import { Card2 } from "../../data";

export default function About() {

  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (inCart) {
      navigate("/viewcart");
    } else {
      setInCart(true);
    }
  };
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.reveal', {
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
      reset: true
    });
  }, []);
  return (
    <main>
      <div className="mx-5 mt-10">
        <h1 className="text-4xl font-bold reveal ">About</h1>
        <p className="my-3 text-lg text-gray-600">
          Give your visitor a smooth online experience with a solid UX design
        </p>
      </div>
      <div className="mx-5 reveal">
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-4">
          <img src="images/about1.jpg" alt="" />
          <img src="images/about2.jpg" alt="" />
          <img src="images/about3.jpg" alt="" />
          <img src="images/about4.jpg" alt="" />
        </div>
      </div>
      <div className="flex justify-between reveal flex-col sm:flex-row sm:space-x-4 p-4">
        <div className="my-20 left">
          <h1 className="mx-5 text-3xl font-bold">
            Join World's Best Marketplace <br /> for Workers
          </h1>
        </div>

        <div className="right  mt-[100px]">
          <p className="text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of <br /> a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or- <br /> less
            normal distribution of letters, as opposed to using ‘Content here,
            content here’ <br /> , making it look like readable English.
          </p>

          <ul className="my-10 space-y-4 text-lg text-left text-black dark:text-gray-400">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
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
              <span>
                Connect to freelancers with proven business experience
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
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
              <span>
                Get matched with the perfect talent by a customer success
                manager
              </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
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
              <span>
                Unmatched quality of remote, hybrid, and flexible jobs
              </span>
            </li>
          </ul>
          <button className="border border-[#80C594] p-5 hover:bg-[#80C594] hover:text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
      <div className=" my-10 flex justify-between flex-col sm:flex-row sm:space-x-4 p-4 bg-[#F0EFEC]">
        <div className="left mx-3 mt-[50px] h-full reveal space-x-7">
          <p className="text-3xl font-bold reveal">
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
            <span className="my-3 text-xl font-bold">Proof of quality</span>
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

      <div className="text-center reveal">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <p className="text-gray-500">
          Interdum et malesuada fames ac ante ipsum
        </p>
        <img src="images/icon-test.png" alt="" className="mx-auto my-10 " />
      </div>
      <div className="col">
        <p className="text-center">carrousell</p>
      </div>
      <div className="mx-auto bg-[#F0EFEB]">
        <div className="flex justify-between space-x-10">
          <div className="left reveal">
            <img src="images/h34.png"  alt="" />
          </div>
          <div className="right reveal">
            <div className="my-20 left">
              <h1 className="mx-5 text-3xl font-bold">
                Truested By Best <br />
                Freelancer
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <ul className="my-10 space-y-4 text-lg text-left text-black dark:text-gray-400">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
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
                  <span>
                    Connect to freelancers with proven business experience
                  </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
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
                  <span>
                    Get matched with the perfect talent by a customer success
                    manager
                  </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
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
                  <span>
                    Unmatched quality of remote, hybrid, and flexible jobs
                  </span>
                </li>
              </ul>
              <button className="border border-[#80C594] p-5 hover:bg-[#80C594] hover:text-white font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 text-center reveal">
        <p className="text-4xl font-bold ">Membership Plans</p>
        <p className="my-4 text-xl">Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className="container flex justify-center mx-auto mb-2 reveal">
        <div className="grid grid-cols-1 space-x-4 md:grid-cols-2 lg:grid-cols-4">
          {
            Card2.map((item,prod)=>(
              <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow" key={prod}>
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                {item.price}
              </h5>
              <h6 className="text-xl">{item.name}</h6>
              <p className="my-3 ">
               {item.title}
              </p>
              <p className="my-2">{item.list}</p>
              <p className="my-2">{item.visible}</p>
              <p className="my-4">{item.title1}</p>
              <p className="my-4">{item.title2}</p>
              <p className="my-4">{item.time}</p>
              <p className="my-4">{item.support}</p>
              <button
                onClick={handleClick}
                className="bg-[#EEF8F2] w-full rounded-full p-5 text-center font-bold text-[#5BBB7B]
                 hover:bg-[#5BBB7B] hover:text-white"
              >
                {inCart ? "View Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
