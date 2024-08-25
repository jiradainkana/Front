import React from 'react'
import { Link } from 'react-router-dom'

export default function Music() {
  return (
    <main>
    <div className="mx-5 my-3 text-lg">
        <Link to="/" className='text-gray-500 cursor-pointer hover:text-black'> Home</Link> /
        <Link to="/service" className='cursor-pointer'> Service</Link>/ 
        <Link  className='text-gray-600'>Music & Audio</Link>
    </div>
    <div className="relative left">
      <img src="images/bg-filter1.jpg" alt=""  className='h-full'/>
       <div className="absolute inset-12">
       <h1 className='text-5xl'>Design & Creative</h1>
       <p className='my-3'>Give your visitor a smooth online experience with a solid UX design</p>
       </div>
    </div>
    <div className="flex mt-3 justify-between">
    <div className="left">
      <p className='mx-8 my-10 text-xl'>Showing all 0 results</p>
      <p className='text-gray-400 mx-8 text-lg'>No service found.</p>
    </div>
    <div className="right my-7">
    <button type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Filter</button>
    
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="  hover: font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sort By (Default) <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sort By (Default)</a>
  </li>
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Newest</a>
  </li>
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Oldest</a>
  </li>
  <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Random</a>
  </li>
</ul>
</div>
    </div>
    </div>
   
</main>
  )
}
