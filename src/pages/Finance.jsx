import React from 'react'
import { Link } from 'react-router-dom'
import { finance, Program } from '../../data'

export default function Finance() {
  return (
    <main>
    <div className="mx-5 my-3 text-lg">
        <Link to="/" className='cursor-pointer hover:text-black'> Home</Link> /
        <Link to="/service" className='cursor-pointer'> Service</Link>/ 
        <Link  className='text-gray-400'>Finance & Accounting</Link>
    </div>
    <div className="relative left">
      <img src="images/bg-filter1.jpg" alt=""  className='h-full'/>
       <div className="absolute inset-12">
       <h1 className='text-5xl'>Design & Creative</h1>
       <p className='my-3'>Give your visitor a smooth online experience with a solid UX design</p>
       </div>
    </div>
    <div className="flex justify-between mt-3">
    <div className="left">
      <p className='mx-8 my-10 text-xl'>Showing all 4 results</p>
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
    <div className="container-fluid">
    <div className="max-w-2xl px-4 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {finance.map((product) => (
          <div key={product.id} className="relative group">
            <div className="w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-50">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="object-cover object-center w-full h-60 lg:h-50 lg:w-full"
              />
              <p className="mx-5 mt-3 text-slate-400">{product.title}</p>
            </div>
            <a className="text-lg mx-auto hover:text-[#38A53F] mb-[-50px] hover:text-underline underline-offset-1">
              {product.Category}
            </a>
            <p className="mx-5">{product.icon}</p>
            <hr className="mt-3 w-50" />
            <div className="flex justify-between">
              <div>
                <h3 className="mt-5 text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={product.image1}
                        alt=""
                      />
                      <div className="font-medium dark:text-white">
                        <div>{product.name}</div>
                      </div>
                    </div>
                  </a>
                </h3>
              </div>
              <p className="mt-8 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
   
</main>
  )
}
