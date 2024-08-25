
import {
  FaBeer,
  FaClock,
  FaEraser,
  FaLocationArrow,
  FaSave,
  FaShareAltSquare,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Add() {

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
      <div className="absolute">
        <img src="images/service-detail.jpg" alt="" className="h-[20rem]" />
      </div>
      <div className="relative items-center inset-10">
        <span className="text-4xl font-bold">
          Developers drop the framework folder into a new <br /> parent
        </span>
        <div className="flex">
          <div className="mt-5">
            <img className="w-10 h-10 rounded-full" src=" images/5.jpg" />
          </div>
          <div className="flex mt-5 space-x-10 ms-4">
            <p className="text-lg font-medium text-gray-900 truncate hover:text-[#0C4B16] cursor-pointer">
              Neil Sims
            </p>
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
      <div className="flex justify-between">
        <div className="flex mx-5  space-x-5 mt-[15rem]  ">
          <div className="icon">
            <FaClock color="black pt-6" size={50} />
          </div>
          <div className="">
            <p> Delivery Time</p>
            <p>2 Days</p>
          </div>
          <div className="icon">
            <FaBeer color="black pt-6" size={50} />
          </div>
          <div className="">
            <p>English level</p>
            <p>Conversational</p>
          </div>
          <div className="icon">
            <FaLocationArrow color="black pt-6" size={50} />
          </div>
          <div className="">
            <p>Location</p>
            <p>New York</p>
          </div>
        </div>
         <div className="mt-[12rem] right me-5">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover: dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="text-xl font-bold">$158</p>

            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mt-7 focus:ring-blue-500"
                />
              </div>
              <div className="mt-2 text-xl">
                <label
                  for="helper-checkbox"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  10000 Words (+5 days)
                </label>
                <p
                  id="helper-checkbox-text"
                  className="text-sm font-normal text-gray-500 dark:text-gray-600"
                >
                  I will professionally translate english <br /> to german
                </p>
                <p className="mt-3 text-xl font-bold">$85</p>
                <hr className="my-5" />

                <div className="flex space-x-2">
                  <div className="flex items-center h-5">
                    <input
                      id="helper-checkbox"
                      aria-describedby="helper-checkbox-text"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mt-7 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mt-2 text-xl">
                    <label
                      for="helper-checkbox"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      2000 Words (+3 days)
                    </label>
                    <p
                      id="helper-checkbox-text"
                      className="text-sm font-normal text-gray-500 dark:text-gray-600"
                    >
                      I will professionally translate english <br /> to german
                    </p>
                    <p className="mt-3 text-xl font-bold">$45</p>
                    <hr className="my-5" />
                    <button className="text-lg hover:text-[#064D17] hover:border border-[#064D17] bg-[#064D17] w-full p-4 rounded-lg text-white font-bold hover:bg-white">
                      By Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </main>
  );
}
