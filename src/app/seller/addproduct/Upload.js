"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";

const Upload = ({ setProduct,product }) => {

  // console.log(product);
  const onupload = (result) => {
    const newImageUrl = result.info.secure_url;
    setProduct((preProduct) =>({
      ...preProduct,
      image: [...preProduct.image,newImageUrl]
    }))
  };

  const handleDeleteImage = (index) => {
    product?.image?.splice(index, 1);
    setProduct((preProduct)=>({
      ...preProduct,
      image: product.image,
    }))
  };

  return (
    <div>
      <CldUploadWidget uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME} onUpload={onupload}>
        {({ open }) => {
          function handleOnclick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button
              className="border-[1px] rounded-lg p-1 px-2"
              onClick={handleOnclick}
            >
              Upload Product Images
            </button>
          );
        }}
      </CldUploadWidget>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 my-2'>
            {product?.image?.map((imageUrl, index) =>(
                <div key={index} className='flex flex-col justify-center'>
                    <Image src={imageUrl} className='w-[150px] h-[150px] object-contain object-top' alt={`uploades Image ${index + 1}`} width={'0'} height={'0'} sizes="100vw"/>
                    <button className='border-[1px] rounded-lg p-1 px-2 mt-5' onClick={() => handleDeleteImage(index)}>delete</button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Upload;
