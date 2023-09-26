import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font bg-indigo-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">E-Comm</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/men'} className="mr-5 text-white hover:text-blue-600/100">
          Men's Clothing
          </Link>
          <Link href={'/women'} className="mr-5 text-white hover:text-blue-600/100">
          Women's Clothing
          </Link>
          <Link href={'/electronics'} className="mr-5 text-white hover:text-blue-600/100">
          Electronics
          </Link>
        </nav>
        <Link href={'/auth/login'}>
        <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0 mx-2">
          Login
        </button>
        </Link>
        <Link href={'/auth/signup'}>
        <button className="inline-flex items-center text-white bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 mx-2">
          Signup
        </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
