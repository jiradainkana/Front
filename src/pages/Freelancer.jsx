import React from "react";
import { Link } from "react-router-dom";
import { Card, products } from "../../data";
import {  FaArrowRight, FaStar } from "react-icons/fa";

export default function Freelancer() {
  return (
    <main>
      <div className="mx-5 my-3 text-lg">
        <Link to="/" className="cursor-pointer hover:text-black">
          {" "}
          Home
        </Link>{" "}
        /
        <Link to="/Freelance" className="cursor-pointer text-gray-500">
          {" "}
          Freelancers
        </Link>
      </div>
      <div className="relative left">
        <img src="images/bg-filter1.jpg" alt="" className="h-full" />
        <div className="absolute inset-12">
          <h1 className="text-5xl">Design & Creative</h1>
          <p className="my-3">
            Give your visitor a smooth online experience with a solid UX design
          </p>
        </div>
      </div>
      <div className="flex mt-3 justify-between">
        <div className="left">
          <p className="mx-8 my-10 text-xl">Showing 8 results</p>
        </div>
        <div className="right my-7">
          <button
            type="button"
            className="text-white text-lg border bg-gray-500 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Filter
          </button>

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="  hover: font-medium border me-3 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Sort By (Default){" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sort By (Default)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Newest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Oldest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Random
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
 <div className="container mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
 {Card.map((product) => (
 <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"key={product.id}>
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={product.imageSrc} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{product.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{product.title}</span>
        <div className="flex my-2">
          <FaStar  className="text-yellow-400 my-1"/>
          <span>{product.icon}</span>
        </div>
        <div className="flex space-x-3">
          <button className="bg-[#FFF6F5] p-3 rounded-full text-center hover:bg-black hover:text-white">{product.button1}</button>
          <button className="bg-[#FFF6F5] p-3 rounded-full text-center hover:bg-black hover:text-white">{product.button2}</button>
          <span className="my-2">+1</span>
        </div>
        <hr />
        <div className="flex space-x-20">
          <div className="my-2">
            <p className="text-lg">Location:</p>
            <p className="my-2 text-gray-600 text-lg">{product.ville}</p>
          </div>
          <div className="my-2">
            <p className="text-lg">Rate</p>
            <p className="my-2 text-gray-600 text-md">{product.heure}</p>
          </div>
        </div>
        <button className="bg-[#F9FDFC] w-[12rem] text-[#0B4B17] text-lg rounded-lg p-5 font-bold hover:text-white hover:bg-[#0B4B17] flex">View Profile <FaArrowRight className="mx-4 mt-2"/></button>
    </div>
</div>
  ))}
 </div>
 </div>



    </main>
  );
}
