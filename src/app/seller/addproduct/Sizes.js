'use client'
import React,{useEffect, useState} from 'react';

const SizesComp= ({setProduct}) => {
    const [selectedSizes, setSelectedSizes] = useState([]);
    const sizes = ["s","m","l","xl","xxl","xxxl"] 

    const handleSizeButtonClick = (size) => {
        setSelectedSizes((prevSelectedSize) => {
            if(prevSelectedSize.includes(size)){
                return prevSelectedSize.filter((s) => s !== size)
            }
            else{
                return [...prevSelectedSize, size]
            }
        });
        const selectedSize = selectedSizes?.includes(size) ? selectedSizes?.filter((s) => s !== size): [...selectedSizes, size];
        setProduct((prevProduct)=>({
            ...prevProduct,
            sizes:selectedSize
        }))
    }

   return (
    <div>
        {sizes.map((size) => (
            <button
                key={size}
                className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mr-5  uppercase
                ${selectedSizes.includes(size) ? "bg-gray-500 text-white":""}`}
                onClick={() => handleSizeButtonClick(size)}>
                    {size}
                </button>
        ))}
    </div>
  )
}

export default SizesComp