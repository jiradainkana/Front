import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main>
      <footer className="bg-[#064D17]  overflow-hidden  rounded-tr-3xl">
        <div className="flex flex-col justify-between my-10 sm:flex-row sm:space-x-4">
          <div className="flex justify-center mx-5 space-x-5 font-bold text-white right my-7">
            <p className="text-lg">Terms of Service</p>
            <p className="text-lg">Privacy Policy</p>
            <p className="text-lg">Site Map</p>
          </div>
          <div className="flex justify-center font-bold text-white left my-7 me-3">
            <p className="text-lg me-3">Follow Us</p>
        <div className="flex space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} />
      </a>
    </div>
          </div>
        </div>
        <footer className="dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  About
                </h2>
                <ul className="font-medium text-white dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/about" className=" hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/become" className="hover:underline">
                      Become Seller
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Jobs on Freeio
                    </a>
                  </li>
                  <li className="mb-4">
                    <Link to="/pricing" className="hover:underline">
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/service" className="hover:underline">
                      Services Freeio
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/teams" className="hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Categories
                </h2>
                <ul className="font-medium text-white dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/design" className="hover:underline">
                      Design & Creative
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/developpement" className="hover:underline">
                      Development & IT
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/music" className="hover:underline">
                      Music & Audio
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/program" className="hover:underline">
                      Programming & Tech
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/digital" className="hover:underline">
                      Digital Marketing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/finance" className="hover:underline">
                      Finance & Accounting
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Writing & Translation
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Trending
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Lifestyle
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Support
                </h2>
                <ul className="font-medium text-white dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/help" className="hover:underline">
                      Help & Support
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/faq" className="hover:underline">
                      FAQ ADS
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/service" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/teams" className="hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Subscribe
                </h2>
                <ul className="font-medium text-white dark:text-gray-400">
                  <li className="mb-4">
                    <form className="max-w-md mx-auto">
                      <div className="relative">
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-5 text-sm text-white bg-white rounded-lg ps-10 dark:text-white"
                          placeholder="Your Email Address"
                         
                        />
                        <button
                          type="submit"
                          className="text-black absolute end-2.5 bottom-2.5  font-medium rounded-lg text-md px-4 py-2"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Apps
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Ios App
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Android App
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2023{" "}
          ADS. 2024 CreativeLayers. All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium ">
          
            
<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white me-5   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">English <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
<div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Deutch</Link>
      </li>
      <li>
      <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Espagnol</Link>

      </li>
      <li>
      <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">French</Link>
      </li>
    </ul>
</div>
        </ul>
      </footer>
      </footer>
    </main>
  );
}
