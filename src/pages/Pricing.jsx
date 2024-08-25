import React from 'react'
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';

export default function Pricing() {
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
  return (
    <main>
       <div className="my-20 text-center reveal">
        <p className="text-4xl font-bold ">Membership Plans</p>
        <p className="my-4 text-xl">Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className="container flex justify-center mx-auto mb-2 reveal">
        <div className="grid grid-cols-1 space-x-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow">
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                $29
              </h5>
              <h6 className="text-xl">Basic Plan</h6>
              <p className="my-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                odit!
              </p>
              <p className="my-2">30 Listing</p>
              <p className="my-2">50 Day Visibility</p>
              <p className="my-4">Lorem ipsum dolor sit amet.</p>
              <p className="my-4">10 revisions.</p>
              <p className="my-4">09 Day Delivery Time.</p>
              <p className="my-4">Support 24/7</p>
              <button
                className="bg-[#EEF8F2] w-full rounded-full p-5 text-center font-bold text-[#5BBB7B]
               hover:bg-[#5BBB7B] hover:text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow">
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                $29
              </h5>
              <h6 className="text-xl">Basic Plan</h6>
              <p className="my-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                odit!
              </p>
              <p className="my-2">30 Listing</p>
              <p className="my-2">50 Day Visibility</p>
              <p className="my-4">Lorem ipsum dolor sit amet.</p>
              <p className="my-4">10 revisions.</p>
              <p className="my-4">09 Day Delivery Time.</p>
              <p className="my-4">Support 24/7</p>
              <button
                className="bg-[#EEF8F2] w-full rounded-full p-5 text-center font-bold text-[#5BBB7B]
               hover:bg-[#5BBB7B] hover:text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow">
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                $29
              </h5>
              <h6 className="text-xl">Basic Plan</h6>
              <p className="my-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                odit!
              </p>
              <p className="my-2">30 Listing</p>
              <p className="my-2">50 Day Visibility</p>
              <p className="my-4">Lorem ipsum dolor sit amet.</p>
              <p className="my-4">10 revisions.</p>
              <p className="my-4">09 Day Delivery Time.</p>
              <p className="my-4">Support 24/7</p>
              <button
                className="bg-[#EEF8F2] w-full rounded-full p-5 text-center font-bold text-[#5BBB7B]
               hover:bg-[#5BBB7B] hover:text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow">
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                $29
              </h5>
              <h6 className="text-xl">Basic Plan</h6>
              <p className="my-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                odit!
              </p>
              <p className="my-2">30 Listing</p>
              <p className="my-2">50 Day Visibility</p>
              <p className="my-4">Lorem ipsum dolor sit amet.</p>
              <p className="my-4">10 revisions.</p>
              <p className="my-4">09 Day Delivery Time.</p>
              <p className="my-4">Support 24/7</p>
              <button
                className="bg-[#EEF8F2] w-full rounded-full p-5 text-center font-bold text-[#5BBB7B]
               hover:bg-[#5BBB7B] hover:text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
