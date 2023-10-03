"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
      <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">Admin Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            Only admin can Login here.
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-lg border"
              type="text"
              name="adminId"
              placeholder="Admin ID"
            />
            <div className="relative">
              <input
                className="p-2 rounded-lg border w-full"
                type={showPassword? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEye className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100" onClick={togglePasswordVisibility}/>
              ) : (
                <AiFillEyeInvisible className="absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}/>
              )}
            </div>
            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mt-10 text-sm border-t border-gray-500 py-5 playfair tooltip">
            Forget password?
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src="https://plus.unsplash.com/premium_photo-1661763582229-f828f78e94e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}

export default AdminLoginPage;
