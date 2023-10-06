'use client'
import React, { useState, useEffect } from 'react';
import { AiFillDelete,AiFillCloseCircle,AiOutlineSend } from "react-icons/ai";
import { SketchPicker,AlphaPicker,ChromePicker,CirclePicker ,PhotoshopPicker } from 'react-color';

const ColorComp = ({setProduct}) => {
  const [open, setOpen] = useState(false);
  const [sketchColor, setSketchColor] = useState(''); // State for SketchPicker
  const [selectedColors, setSelectColors] = useState([]);

  const handleColorButtonClick = () => {
    if(!sketchColor){
      alert('Please select a color');
      return;
    }
    setSelectColors((prevSelectedColors) => [...prevSelectedColors, sketchColor]);
    setProduct((prevProduct)=>({
      ...prevProduct,
      colors:[...prevProduct.colors, sketchColor]
  }))
    setOpen(false);
  }

  const handleDeleteColor = (indexToDelete) => {
    setSelectColors((prevSelectedColors) => {
      const updateColors = [...prevSelectedColors];
      updateColors.splice(indexToDelete, 1);
      return updateColors;
    });
    setProduct((prevProduct)=>({
      ...prevProduct,
      colors: prevProduct.colors.splice(indexToDelete,1)
    }))
  }

  const handleChangeComplete = (color) => {
    setSketchColor(color.hex); // Update SketchPicker color
  };


  return (
    <div>
      <div className='flex items-center justify-between mt-3 relative'>
        <button className='block border-[1px] rounded-lg px-3 text-[14px]'
          onClick={() => setOpen(!open)}
        >
          Choose Color
        </button>
        {open && (
            <div className='absolute right-0 bg-gray-300 pb-2 shadow-md'>
                <PhotoshopPicker  color={sketchColor} onChangeComplete={handleChangeComplete} onAccept={handleColorButtonClick} onCancel={()=>setOpen(false)}/>
            </div>
        )}
      </div>
      <div className='mt-5 flex items-center space-x-1'>
        {selectedColors.map((selectedColor, index) => (
          <div key={index} className='flex items-center space-x-1 mb-2 border px-2 rounded-lg bg-gray-200'>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: '100%',
                backgroundColor: selectedColor,
                display: "inline-block"
              }}
            >
            </div>
            <span className='p-1 text-[14px]'>{selectedColor}</span>
            <button className='p-1 text-[18px]' onClick={() => handleDeleteColor(index)}><AiFillDelete/></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorComp;