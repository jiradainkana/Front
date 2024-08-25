import React from 'react'
import './Carroussel.css'
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';
import CountUp from 'react-countup';

export default function Carroussel() {
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
<div className="mx-auto overflow-hidden container-fluid">
<div className="grid grid-cols-1 p-6 bg-[#064D17] h-[40rem] md:grid-cols-2">
    <div className="mx-10 text-left reveal">
    <p className='text-white md:text-5xl mt-[100px]  text-3xl  font-bold'>Find the perfect freelance
    </p>
    <p className='mt-5 md:text-5xl font-bold text-white text-3xl'>Services for your business
</p>
<p className="mt-5 text-white text-lg">Ceci est une description de votre projet. Vous pouvez ajouter plus d'informations ici pour donner un aperçu de ce que fait votre projet.</p>

<form className="max-w-2xl mx-auto">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full my-5  p-8  text-md text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-4 p-5 bg-yellow-300 items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full cursor-pointer text-sm  dark:bg-blue-600  dark:focus:ring-blue-800 hover:bg-white">Search</button>
    </div>
</form>
 <div className="grid relative sm:bottom-[2rem] sm:grid-cols-2 sm:flex grid-cols-1 space-x-10 md:grid-cols-2 lg:grid-cols-4 compteur">
         <div className='mt-[3rem]'>
         <span className='px-4 text-3xl font-bold text-white'>
          <CountUp
          start={0}
          end={950}
          duration={2.75}
          ></CountUp>M</span>
         <p className='text-center text-white text-md'>Total Freelancer</p>
        </div>
        <div className='mt-[3rem]'>
         <span className='px-4 text-3xl font-bold text-white '>  
         <CountUp
          start={0}
          end={850}
          duration={2.5}
          ></CountUp>M</span>
         <p className='text-center text-white text-md'>Positive Review</p>
        </div>
        <div className='mt-[3rem]'>
          <span className='px-4 text-3xl font-bold text-white '>
          <CountUp
          start={0}
          end={98}
          duration={2.75}
          
          ></CountUp> 
            M</span>
         <p className='text-center text-white text-md'>Order recieved</p>
        </div>
        <div className='mt-[3rem]'>
         <span className='px-4 text-3xl font-bold text-white '>
         <CountUp
          start={0}
          end={250}
          duration={2.75}
          
          ></CountUp>
            M</span>
         <p className='text-center text-white text-md'>Projects Completed</p>
        </div>
    </div>
    </div>
    <div className="lg:flex  space-x-4 hidden">
    <img src="images/team5-150x150.jpg" alt="Image de votre projet" className=" object-cover reveal w-[300px] h-auto mt-[80px]"/>
    <img src="images/team2-150x150.jpg" alt="Image de votre projet" className="object-cover h-auto rounded reveal w-80"/>
    </div>
    <div className="absolute">
    <img src="images/link1.png" alt="Image de votre projet" className="h-auto reveal relative inset-10 mx-[50rem] rounded w-80 "/>
    <img src="images/link3.png" alt="Image de votre projet" className="h-auto reveal relative mt-[300px] inset-0 mx-[50rem] rounded"/>
    </div>
</div>
</div>
</main>

  )
}
