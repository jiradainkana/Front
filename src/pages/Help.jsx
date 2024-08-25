import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import { FaBeer, FaCreditCard, FaRocket, FaSearch, FaUser } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md';
import { MdApps,  MdNewReleases } from 'react-icons/md';
import Accordion from '../Component/Accordion';
export default function Help() {
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
        <div className="my-10 text-center reveal">
      <h1 className="text-4xl font-bold">How can we help you?</h1>
      <p className="my-3">Give your visitor a smooth online experience with a solid UX design</p>
    </div>
   <div className="container mx-auto reveal">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
  <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    <FaRocket className='text-4xl' />
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Getting Started</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
    <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    <FaUser className='text-4xl' />  
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Account / Profile</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
    <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    <FaSearch className='text-4xl' />    
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Find a Project</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
    <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    <FaCreditCard className='text-4xl' />    
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Payment Issues</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
  </div>
  <div className="grid grid-cols-1 gap-4 my-5 md:grid-cols-2 lg:grid-cols-4">
  <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
     <MdSecurity className='text-4xl' /> 
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trust & Safety</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
    <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    <FaBeer className='text-4xl' /> 
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">API</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
    <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    <MdApps className='text-4xl' />    
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apps</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
    <div className="card">
    <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow max-w-[20rem]">
    < MdNewReleases className='text-4xl' />    
    <h5 className="my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What's New</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum is placeholder <br /> text commonly used in site.</p>
    </a>
    </div>
  </div>
   </div>
   <div className="my-10 text-center reveal">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="my-3">Lorem ipsum dolor sit amet, consectetur.</p>
    </div>
    <div className="container">
    <Accordion />
   </div>
    </main>
  )
}
