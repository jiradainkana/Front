import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
.object({
  email: yup.string().required("Veuillez remplir ces champs"),
  password: yup.string().required("Veuillez remplir ces champs"),
  confirmPassword: yup.string().required("Veuillez remplir ces champs"),
  
})
.required()

export default function Login() {
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
    <main className="bg-[#FFE8E3] h-[60rem]">
    <div className="py-8 text-center">
      <p className="text-5xl">Log In</p>
      <p className="my-4 text-lg">
        Give your visitor a smooth online experience with a solid UX design
      </p>
    </div>
    <div className="flex justify-center mb-2">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <div className="bg-[#F6F8F9] p-6">
          <p className=''>Username: Freelancer or employer</p>
          <p className=''>Password: Demo</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 font-medium text-gray-900 text-md dark:text-white"
              >
                Email<span className="text-xl text-red-500">*</span>
              </label>
              <input
              {...register("email")}
                type="email"
                id="email"
                className="block w-full p-5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              
              />
               <span className='text-red-600'>{errors.email?.message}</span>
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password<span className="text-xl text-red-500">*</span>
              </label>
              <input
              {...register("password")}
                type="password"
                id="password"
                className="block w-full p-5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
              />
              <span className='text-red-600'>{errors.password?.message}</span>
            </div>
          <div className="flex justify-between">
              <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <label className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
              Keep me signed in
                <a href="#" className="text-blue-600 hover:underline"></a>.
              </label>
            </div>
            <div className="for">
                <Link to="/forget">Forget Password</Link>
            </div>
          </div>
            <button
              type="submit"
              className="text-white bg-[#064D17]   font-medium rounded-lg  w-full sm:w-auto px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  text-xl"
            >
              Login 
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
  )
}
