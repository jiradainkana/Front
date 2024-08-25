import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Accordion from "../Component/Accordion";
import ScrollReveal from 'scrollreveal';
import  { useEffect } from 'react';

const schema = yup
  .object({
    nom: yup.string().required("Veuillez Remplir ce champs"),
    email: yup.string().required("Veuillez Remplir ce champs"),
    message: yup.string().required("Veuillez Remplir ce champs"),
  })
  .required()
export default function Contact() {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <main>
      <div className="my-10 bg-[#0C4B16]">
        <div className="right text-white h-[20rem] mx-5 py-10 reveal">
          <h1 className="mt-10 text-4xl font-bold ">Contact us</h1>
          <p className="my-3 mt-10 text-lg">
            We’d love to talk about how we can help you.
          </p>
        </div>
      </div>
    <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 p-4">
    <div className="left mx-5 container my-20 reveal">
        <h1 className="text-3xl">Keep In Touch With Us.</h1>
        <p className="my-3">
          Neque convallis a cras semper auctor. Libero id faucibus nisl
          tincidunt egetnvallis.
        </p>

        <div className="flex justify-between">
      <div className="mx-5 my-10 space-y-10">
          <div className="flex">
            <div className="text-3xl text-[#064D17]">
              {" "}
              <FaMapMarkerAlt />{" "}
            </div>
            <div className="mx-5">
              <span className="text-xl">Address</span>
              <p className="text-gray-600">328 Queensberry Street, North</p>
              <p className="text-gray-600">Melbourne VIC 3051, Australia.</p>
            </div>
          </div>
          <div className="flex">
            <div className="text-4xl text-[#064D17]">
              {" "}
              <FiPhone />{" "}
            </div>
            <div className="mx-5">
              <span className="text-xl">Phone</span>
              <p className="text-gray-600">+(088) 123 456 789</p>
            </div>
          </div>
          <div className="flex">
            <div className="text-3xl text-[#064D17]">
              {" "}
              <FaEnvelope />{" "}
            </div>
            <div className="mx-5">
              <span className="text-xl">Email</span>
              <p className="text-gray-600">hello@freeio.com</p>
            </div>
          </div>
        </div>
     
      </div>
      </div>
      <div className="right relative mb-5  bg-white h-[42rem] lg:w-[40rem] sm:w-3 reveal me-5 shadow-lg">
        <form action="" className="py-9"onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl mx-10">Tell us about yourself</h1>
          <p className="my-3 mx-10">
            Whether you have questions or you would just like to say hello,{" "}
            <br />
            contact us.
          </p>
          <div className="grid w-3/3 gap-6 mb-6 lg:grid-cols-2 mx-10">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nom
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                {...register("nom")}
              />
              <p className="text-red-600">{errors.nom?.message}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
              </label>
              <input
                type="email"
                id="last_name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
               
                {...register("email")}
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
          </div>

          <label className="block mx-10 mb-2 text-sm font-medium text-gray-900 dark:text-white">
             Message
          </label>
          <textarea
          rows="5"
            id="message"
            className="block mx-10 p-2 md:w-[35rem] sm:w-[10rem] text-sm text-gray-300 bg-white rounded-lg border border-gray-300"
            placeholder="Description..." {...register("message")}
          >  </textarea>
          <p className="text-red-600 mx-10">{errors.message?.message}</p>
          <button className="w-50 my-5 mx-10 p-5 bg-[#064D17] text-white font-bold rounded-lg hover:bg-white hover:text-[#064D17] hover:border border-[#064D17]">Send Message</button>
        </form>
      </div>
    </div>
   <div className="go text-center">
    <span className="">google Map</span>
   </div>
   <div className="text-center my-5 reveal">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <p className="my-3">Lorem ipsum dolor sit amet, consectetur.</p>
    </div>
   <div className="container">
    <Accordion />
   </div>
    </main>
  );
}
