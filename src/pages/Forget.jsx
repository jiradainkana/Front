import React from 'react'
import { Link } from 'react-router-dom'

export default function Forget() {
  return (
    <main className="bg-[#FFE8E3] h-[50rem]">
    <div className="py-8 text-center">
      <p className="text-5xl">Log In</p>
      <p className="my-4 text-lg">
        Give your visitor a smooth online experience with a solid UX design
      </p>
    </div>
    <div className="flex justify-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <p className='text-xl'>Reset Password</p>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 font-medium text-gray-900 text-md dark:text-white"
              >
                Please Enter Username or Email<span className="text-xl text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please Enter Username or Email"
                required
              />
            </div>
          <div className="flex justify-between">
              <div className="flex items-start mb-6">
             
              <label className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
              <div className="for">
                <Link to="/login" className='text-[#064D17] underline text-lg'>Back to Top</Link>
            </div>
              </label>
            </div>
          
          </div>
            <button
              type="submit"
              className="text-white bg-[#064D17]   font-medium rounded-lg  w-full sm:w-auto px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-xl"
            >
              Get New Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
   
  )
}
