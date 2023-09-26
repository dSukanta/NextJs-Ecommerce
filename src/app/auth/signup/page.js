"use client"
import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import Link from 'next/link'

function page() {

    const [showPassword, setShowPassword] = useState({
        name:'',
        status:false
    });

  const togglePasswordVisibility = (name) => {
    setShowPassword({name:name,status:!showPassword.status});
  };


  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Signup</h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone no.</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
          <div className="relative">
            <input
              type={(showPassword.name==='password' && showPassword.status) ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={()=>togglePasswordVisibility('password')}
            >
              {(showPassword.name==='password' && showPassword.status)? <AiFillEyeInvisible/>:<AiFillEye/>}
            </span>
          </div>
        </div>
        <div className="relative mb-4">
          <label htmlFor="confirmpassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
          <div className="relative">
            <input
              type={(showPassword.name==='confirm-password' && showPassword.status)? 'text' : 'password'}
              id="confirmpassword"
              name="confirmpassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={()=>togglePasswordVisibility('confirm-password')}
            >
              {(showPassword.name==='confirm-password' && showPassword.status)? <AiFillEyeInvisible/>:<AiFillEye/>}
            </span>
          </div>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        <p className="text-xs text-gray-500 mt-3">Already have an account? Awesome! <Link  href="/auth/login" className='text-blue-600/100'>Login</Link></p>
      </div>
    </div>
  </section>
  )
}

export default page