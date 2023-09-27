import Link from "next/link";
import React from "react";
import {BsFillCartPlusFill} from 'react-icons/bs';

function ProductCard({ data}) {
  return (
    <Link className="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" href={`/${data?.id}`}>
        <img
          className="p-8 rounded-t-lg object-contain h-48 w-full transition-transform transform hover:scale-150"
          src={data?.image}
          alt="product image"
        />
      <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data?.title}
          </h5>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Star icons */}
          {/* Rating */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {data?.rating?.rate}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${data?.price}
          </span>
          <a
            href="#"
            className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BsFillCartPlusFill size={20} className="mr-2"/>
            Add to cart
          </a>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
