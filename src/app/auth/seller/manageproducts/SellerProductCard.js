import Link from "next/link";
import React from "react";
import {AiOutlineEdit,AiFillDelete} from 'react-icons/ai';
import StarRatings from "react-star-ratings";


function SellerProductCard({ data}) {
 
  return (
    <div className="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/products/${data?.id}`}>
      <img
          className="p-8 rounded-t-lg object-contain h-48 w-full transition-transform transform hover:scale-150"
          src={data?.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/products/${data?.id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            {data?.title}
          </h5>
        </Link>
        <div className="flex items-center my-3">
          Purchased by: 
          {/* Star icons */}
          {/* Rating */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mt-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {10} people
          </span>
        </div>
        <div className="flex items-center space-x-2">
            <Link href={`/auth/seller/manageproducts/${data?.id}`}>
          <button className="px-5 py-1 my-2 rounded-sm bg-green-500 flex flex-row hover:scale-110">Edit <AiOutlineEdit color="white"/></button>
            </Link>
          <button className="px-2 py-1 my-2 rounded-sm bg-red-500 flex flex-row hover:scale-110">Delete <AiFillDelete color="white"/></button>
        </div>
      </div>
    </div>
  );
}

export default SellerProductCard;
