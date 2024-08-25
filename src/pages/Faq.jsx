import React from 'react'
import Accordion from '../Component/Accordion'

export default function Faq() {
  return (
  <main>
     <div className="text-center my-5">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="my-3">Lorem ipsum dolor sit amet, consectetur.</p>
    </div>
   <div className="container">
    <span className='mx-[10rem] mt-5 text-gray-600 text-2xl font-bold'>Payments</span>
    <Accordion />
   </div>
   <div className="container">
   <p className='mx-[10rem] mt-10 text-gray-600 text-xl font-bold'>Suggestion</p>
    <Accordion />
   </div>
  </main>
  )
}
