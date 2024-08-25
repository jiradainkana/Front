import React from "react";
import {
  FaArrowRight,
  FaEraser,
  FaSave,
  FaShareAltSquare,
  FaStar,
} from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, Count } from "../../data";

export default function NewProfile() {
  return (
    <main>
      <div className="flex justify-between">
        <div className="mx-5 my-3 text-lg">
          <Link to="/" className="cursor-pointer hover:text-black">
            {" "}
            Home
          </Link>{" "}
          /
          <Link to="/Freelance" className="text-gray-500 cursor-pointer">
            {" "}
            Freelancers
          </Link>
          /
        </div>
        <div className="flex my-3 space-x-3 right me-4">
          <p className="flex text-lg">
            {" "}
            <FaShareAltSquare
              size={25}
              className="mx-2 text-gray-600 shadow-lg cursor-pointer"
            />
            Share
          </p>
          <p className="flex text-lg">
            {" "}
            <FaSave
              size={25}
              className="mx-2 text-gray-600 cursor-pointer"
            />{" "}
            Save
          </p>
        </div>
      </div>
      <div className="my-5">
        <div className="my">
          <img
            src="images/freelancer-detail.jpg"
            alt=""
            className="h-[20rem]"
          />
        </div>
        <div className="flex justify-between mx-5">
          <div className="flex items-center gap-4 -mt-60">
            <img className="h-20 rounded-full w-50" src="images/5.jpg" alt="" />
            <div className="font-medium dark:text-white">
              <div className="text-2xl">Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
              <div className="flex my-2 me-3">
                <div className="flex my-1">
                  <FaStar className="mx-3 my-1 text-yellow-300" />
                  <span> 4.5 (2 Reviews)</span>
                </div>
                <div className="flex my-1">
                  <FaEraser className="mx-3 my-1 text-yellow-300" />
                  <span>1364 Views</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 -mt-60 me-5">
            <button className="font-bold bg-[#0B4B17] p-4 text-white rounded-lg">
              Download CV
            </button>
            <button className="font-bold bg-[#0B4B17] p-4 text-white rounded-lg">
              Message
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="left">
          <div className="flex space-x-4">
            <div className="flex space-x-2 icon">
              <MdCheckCircle className="text-5xl" />
              <p className="my-2 text-lg">
                Project Success <br />0
              </p>
            </div>
            <div className="flex space-x-2 icon">
              <MdCheckCircle className="text-5xl" />
              <p className="my-2 text-lg">
                Total Service
                <br />1
              </p>
            </div>
            <div className="flex space-x-2 icon">
              <MdCheckCircle className="text-5xl" />
              <p className="my-2 text-lg">
                Completed Service
                <br />2
              </p>
            </div>
            <div className="flex space-x-2 icon">
              <MdCheckCircle className="text-5xl" />
              <p className="my-2 text-lg">
                In Queue service
                <br />3
              </p>
            </div>
          </div>
          <div className="mx-5 my-3">
            <h1 className="text-2xl">About Freelancer</h1>
            <p className="my-3 text-gray-400 text-md">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem <br /> aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Nemo enim <br /> ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui <br /> ratione voluptatem sequi nesciunt.
            </p>
            <p className="text-gray-400 text-md">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque <br /> corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate
              non provident, similique sunt in culpa <br /> qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga.
            </p>
            <p className="my-3 text-gray-400 text-md">
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio <br /> cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis <br /> voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
          <hr className="mx-5" />
          <div className="my-5">
            <p className="mx-5 text-2xl font-bold">Education</p>
            <div className="mx-5 my-5">
              <ol className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                  </span>
                  <button className="mx-3 font-medium text-black bg-[#E1D5E1] p-3 rounded-full">
                    2005-2006
                  </button>
                  <p className="my-3 text-lg font-bold text-black">
                    Bachlors in Fine Arts
                  </p>
                  <p className="text-[#B6EDD6] font-bold text-md">
                    Modern College
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante{" "}
                    <br /> ipsum primis in faucibus.
                  </p>
                </li>
              </ol>
            </div>
            <div className="mx-5 my-5">
              <ol className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                  </span>
                  <button className="mx-3 font-medium text-black bg-[#E1D5E1] p-3 rounded-full">
                    2006-2009
                  </button>
                  <p className="my-3 text-lg font-bold text-black">
                    Computer Science
                  </p>
                  <p className="text-[#B6EDD6] font-bold text-md">
                    Harvartd University
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante{" "}
                    <br /> ipsum primis in faucibus.
                  </p>
                </li>
              </ol>
              <hr />
            </div>
          </div>
          <div className="my-5">
            <p className="mx-5 text-2xl font-bold">Work & Experience</p>
            <div className="mx-5 my-5">
              <ol className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                  </span>
                  <button className="mx-3 font-medium text-black bg-[#E1D5E1] p-3 rounded-full">
                    2019 - 2022
                  </button>
                  <p className="my-3 text-lg font-bold text-black">
                    UX Designer
                  </p>
                  <p className="text-[#B6EDD6] font-bold text-md">Dropbox</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante{" "}
                    <br /> ipsum primis in faucibus.
                  </p>
                </li>
              </ol>
            </div>
            <div className="mx-5 my-5">
              <ol className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                  </span>
                  <button className="mx-3 font-medium text-black bg-[#E1D5E1] p-3 rounded-full">
                    2022 - 2023
                  </button>
                  <p className="my-3 text-lg font-bold text-black">
                    Art Director
                  </p>
                  <p className="text-[#B6EDD6] font-bold text-md">
                    TechCompany
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem{" "}
                    <br /> aperiam, eaque ipsa quae ab illo inventore veritatis
                    et.
                  </p>
                </li>
              </ol>
              <hr />
            </div>
          </div>
          <div className="my-5">
            <p className="mx-5 text-2xl font-bold">Awards</p>
            <div className="mx-5 my-5">
              <ol className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                  </span>
                  <button className="mx-3 font-medium text-black bg-[#E1D5E1] p-3 rounded-full">
                    2021
                  </button>
                  <p className="my-3 text-lg font-bold text-black">
                    Professional Design
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante{" "}
                    <br /> ipsum primis in faucibus.
                  </p>
                </li>
              </ol>
            </div>
            <div className="mx-5 my-5">
              <ol className="relative text-gray-500 border-gray-200 border-s dark:border-gray-700 dark:text-gray-400">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
                  </span>
                  <button className="mx-3 font-medium text-black bg-[#E1D5E1] p-3 rounded-full">
                    2022
                  </button>
                  <p className="my-3 text-lg font-bold text-black">
                    Creative Design
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem{" "}
                    <br /> aperiam, eaque ipsa quae ab illo inventore veritatis
                    et.
                  </p>
                </li>
              </ol>
              <hr />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="mx-5 text-2xl font-bold">Services</p>
            <Link
              to=""
              className="my-2 font-bold text-green-500 hover:underline"
            >
              Browse Full List
            </Link>
          </div>
          <hr />
          <section className="flex justify-between space-x-5">
            <div className="w-full mx-5 my-2">
              <h1 className="text-2xl">2 Reviews</h1>
              <div className="max-w-sm p-8 mx-5 bg-[#FFEDE8] items-center my-3 rounded-lg">
                <a href="#">
                  <h5 className="mb-2 text-5xl font-bold text-center text-yellow-400">
                    4.5
                  </h5>
                  <div className="flex justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-300 ms-1 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <p className="my-3 text-center">2 ratings</p>
                </a>
              </div>
            </div>
            <div className="w-full my-8 right">
              <div className="flex items-center mt-4">
                <a href="#" className="font-bold text-black text-md">
                  5 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  50%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a href="#" className="font-bold text-black text-md">
                  4 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  50%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a href="#" className="font-bold text-black text-md">
                  3 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  0%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a href="#" className="font-bold text-black text-md">
                  2 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  0%
                </span>
              </div>
              <div className="flex items-center mt-4">
                <a href="#" className="font-bold text-black text-md">
                  1 star
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700"></div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  0%
                </span>
              </div>
            </div>
          </section>
          <div className="flex mx-5 space-x-4">
            <div className="image">
              <img src="images/user.png" alt="" className="rounded-full" />
            </div>
            <div className="my-2">
              <p>Admin</p>
              <div className="flex space-x-1">
                <svg
                  className="w-4 h-4 my-1 text-yellow-300 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="flex gap-2 mx-5">
                  <span className="font-semibold ">4.0</span>
                  November 9, 2022
                </p>
              </div>
            </div>
          </div>
          <p className="mx-5 text-gray-600 text-md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem <br /> aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
          <div className="flex mx-5 my-5 space-x-4">
            <div className="image">
              <img src="images/user.png" alt="" className="rounded-full" />
            </div>
            <div className="my-2">
              <p>Admin</p>
              <div className="flex space-x-1">
                <svg
                  className="w-4 h-4 my-1 text-yellow-300 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="flex gap-2 mx-5">
                  <span className="font-semibold ">5.0</span>
                  November 9, 2022
                </p>
              </div>
            </div>
          </div>
          <p className="mx-5 text-gray-600 text-md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem <br /> aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
          <div className="mx-5 my-3">
            <h1 className="text-xl font-bold">Add a review</h1>
            <p className="text-gray-600">Your Rating for this listing</p>

            <div className="flex items-center my-5">
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
         <form action="">
         <div className="mx-5">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-900 text-md dark:text-white"
            >
              Your Comment
            </label>
            <textarea
              id="message"
              rows="10"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Comments..."
            ></textarea>
              <div className="grid gap-6 my-4 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mt-2 font-medium text-gray-900 text-md dark:text-white">Your Name</label>
            <input type="text" id="first_name" className="block w-full p-5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div className="mb-6 ">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-900 text-md dark:text-white">Your Email</label>
        <input type="email" id="email" className="block w-full p-5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div>
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"> Save my name, email, and website in this browser for the next time I comment.</label>
    </div> 
        </div>
          <button type="submit" className="text-white bg-green-600 p-5 text-lg hover:bg-white hover:border border-green-600 hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Reviews</button>
          </div>
         </form>
        </div>
        <div className="mb-6 right me-2">
          <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                $25 - $35 / hr
              </h5>
            </Link>
            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <div className="flex justify-between space-x-9">
                <div className="flex space-x-3">
                  <MdCheckCircle className="mt-4 text-2xl" />
                  <p className="my-3 text-lg">Location</p>
                </div>
                <div className="right text-end">
                  <button className="hover:text-[#164D1B] my-4">
                    New York
                  </button>
                </div>
              </div>
              <hr />
              <div className="flex justify-between space-x-9">
                <div className="flex space-x-3">
                  <MdCheckCircle className="mt-4 text-2xl" />
                  <p className="my-3 text-lg">Type</p>
                </div>
                <div className="right text-end">
                  <button className="hover:text-[#164D1B] my-4">
                    New Rising Talent
                  </button>
                </div>
              </div>
              <hr />
              <div className="flex justify-between space-x-9">
                <div className="flex space-x-3">
                  <MdCheckCircle className="mt-4 text-2xl" />
                  <p className="my-3 text-lg">English Level</p>
                </div>
                <div className="right text-end">
                  <button className="hover:text-[#164D1B] my-4">
                    Professional
                  </button>
                </div>
              </div>
              <hr />
              <div className="flex justify-between space-x-9">
                <div className="flex space-x-3">
                  <MdCheckCircle className="mt-4 text-2xl" />
                  <p className="my-3 text-lg">Gender</p>
                </div>
                <div className="right text-end">
                  <button className="hover:text-[#164D1B] my-4">Female</button>
                </div>
              </div>
              <hr />
              <div className="flex justify-between space-x-9">
                <div className="flex space-x-3">
                  <MdCheckCircle className="mt-4 text-2xl" />
                  <p className="my-3 text-lg">Email</p>
                </div>
                <div className="right text-end">
                  <button className="hover:text-[#164D1B] my-4">
                    robertfox@apus.com
                  </button>
                </div>
              </div>
              <hr />
              <div className="flex justify-between space-x-9">
                <div className="flex space-x-3">
                  <MdCheckCircle className="mt-4 text-2xl" />
                  <p className="my-3 text-lg">Phone Number</p>
                </div>
                <div className="right text-end">
                  <button className="hover:text-[#164D1B] my-4">
                    (+88) 123-456-789
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="my-5">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                My Skills
              </h5>
              <div className="my-5 space-x-3">
                <a
                  href=""
                  className="bg-[#FEEDE9] p-3 rounded-full hover:bg-black hover:text-white"
                >
                  Design Writing
                </a>
                <a
                  href=""
                  className="bg-[#FEEDE9] p-3 rounded-full hover:bg-black hover:text-white"
                >
                  Figma
                </a>
              </div>
              <div className="my-8 space-x-5">
                <a
                  href=""
                  className="bg-[#FEEDE9] p-3 rounded-full hover:bg-black hover:text-white"
                >
                  HTML5
                </a>
                <a
                  href=""
                  className="bg-[#FEEDE9] p-3 rounded-full hover:bg-black hover:text-white"
                >
                  Prototying
                </a>
              </div>
              <div className="my-8 space-x-5">
                <a
                  href=""
                  className="bg-[#FEEDE9] p-3 rounded-full hover:bg-black hover:text-white"
                >
                  Sofware design
                </a>
              </div>
            </a>
          </div>
          <button className="text-lg text-[#6FBE86] border w-full p-4 font-bold border-[#6FBE86] hover:bg-[#6FBE86] hover:text-white rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
      <div className="container mx-auto my-5">
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
          {Count.map((product) => (
            <div
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={product.id}
            >
              <div className="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={product.imageSrc}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.title}
                </span>
                <div className="flex my-2">
                  <FaStar className="my-1 text-yellow-400" />
                  <span>{product.icon}</span>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#FFF6F5] p-3 rounded-full text-center hover:bg-black hover:text-white">
                    {product.button1}
                  </button>
                  <button className="bg-[#FFF6F5] p-3 rounded-full text-center hover:bg-black hover:text-white">
                    {product.button2}
                  </button>
                  <span className="my-2">+1</span>
                </div>
                <hr />
                <div className="flex space-x-20">
                  <div className="my-2">
                    <p className="text-lg">Location:</p>
                    <p className="my-2 text-lg text-gray-600">
                      {product.ville}
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="text-lg">Rate</p>
                    <p className="my-2 text-gray-600 text-md">
                      {product.heure}
                    </p>
                  </div>
                </div>
                <button className="bg-[#F9FDFC] w-[12rem] text-[#0B4B17] text-lg rounded-lg p-5 font-bold hover:text-white hover:bg-[#0B4B17] flex">
                  View Profile <FaArrowRight className="mx-4 mt-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
