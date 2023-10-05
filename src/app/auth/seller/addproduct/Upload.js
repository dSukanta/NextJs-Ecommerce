'use client'

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const Upload = () => {
  const inputRef = useRef();
  const [images, setImages] = useState([]);
  const [inputKey, setInputKey] = useState(0);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files);

    setImages((prevImages) => [...prevImages, ...droppedFiles]);
  };

  useEffect(() => {
    window.addEventListener('dragenter', handleDragEnter, false);
    window.addEventListener('dragover', handleDragOver, false);
    window.addEventListener('drop', handleDrop, false);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter, false);
      window.removeEventListener('dragover', handleDragOver, false);
      window.removeEventListener('drop', handleDrop, false);
    };
  }, []);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const clearAllImages = () => {
    setImages([]);
    setInputKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <div className="form-container">
      

        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className='w-full h-full border-dashed border-2 border-indigo-600 text-center justify-center item-center p-10 my-5'
        >
          <div>
            <p>Drag and drop files here</p>
          </div>
          <div>
            <button onClick={() => inputRef.current.click()} className='p-2 m-2 rounded-md bg-indigo-700 text-white'>Or select files to upload</button>
            <input
              key={inputKey}
              ref={inputRef}
              type="file"
              multiple
              accept="image/*"
              style={{
                opacity: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
              }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div>
          <ul className='flex flex-row'>
            {images.map((image, index) => (
              <li key={index}>
                <div className="image-container">
                <span>{image.name}</span>
                  <span
                    onClick={() => {
                      removeImage(index);
                    }}
                    className="remove-icon"
                  >
                    &#x2715;
                  </span>
                  <Image src={URL.createObjectURL(image)} alt={image.name} width={200} height={200}/>
                </div>
              </li>
            ))}
          </ul>

          {images.length > 0 && (
            <ul>
              <li className="clear-all">
                <button onClick={clearAllImages}>Clear All</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
