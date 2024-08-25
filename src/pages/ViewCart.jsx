import React from "react";
import { FaTrash } from "react-icons/fa";

export default function ViewCart(){
  
  return (
    <main>
      <div className="container">
        <h1 className="mx-5 text-xl my-5 font-bold">Cart</h1>
        <ul className="mx-5 flex space-x-2">
          <li>
            <a to="/" className="cursor-pointer">
              Home /{" "}
            </a>
          </li>
          <li>
            <a to="/" className="text-gray-600">
              Cart
            </a>
          </li>
        </ul>

       <div className="flex justify-between">
       <div className="relative overflow-x-auto my-8  mx-5 sm:rounded-lg">
          <table className="w-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-md uppercase bg-[#0C4B16] text-white">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black text-lg">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src="images/shop4.jpg"
                    className="rounded-full w-[6rem] shadow-lg"
                    alt=""
                  />
                </th>
                <td className="px-6 py-4">Basic Plan</td>
                <td className="px-6 py-4">$29</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">$29</td>
                <td className="px-6 py-4 text-right">
                  <a
                    to="#"
                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  >
                    <FaTrash />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="my-5 flex space-x-8">
            <input type="text"  className="p-5 border border-[#064D17] outline-none" placeholder="coupon code"/>
            <label htmlFor="" className="my-5 text-xl">Coupon:</label>
            <button className="bg-[#064D17] p-5 rounded-lg text-white text-center text-lg font-bold">Apply Coupon</button>
            <button className="bg-[#EEF8F2] p-5 rounded-lg text-[#064D17] text-center text-lg font-bold">Update Cart</button>

          </div>
        </div>
        <div className="my-5">
          <div className="w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cart totals
              </h5>
            </a>
            <div className="flex mt-5 justify-between space-x-10">
            <p className="mb-3">
             Subtotal
            </p>
            <p className="mb-3">
             $29
            </p>
            </div>
            <hr />
            <div className="flex justify-between gap-10 my-5">
            <p className="mb-3">
             Total
            </p>
            <p className="mb-3 mx-10">
             $29
            </p>
            </div>
            <button className="bg-[#064D17] p-5 rounded-lg text-white text-center text-lg font-bold">Proceed to CheckOut</button>
          </div>
        </div>
       </div>
      </div>
    </main>
  );
}
