'use client'
import SellerHeader from "@/components/SellerHeader";
import React, { useEffect, useState } from "react";
import toast,{Toaster} from "react-hot-toast";
import SizesComp from "../../addproduct/Sizes";
import ColorComp from "../../addproduct/Colors";
import Upload from "../../addproduct/Upload";
import { getProductsById } from "@/utils/functions";
import PageLoading from "@/components/PageLoading";

function Page({params}) {
  
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    sizes: [],
    colors: [],
    numberOfReviews: "",
    rating: 0,
    images: [],
  });

  const handleProductUpdate = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleNewProductSubmit = (event) => {
    event.preventDefault();
    toast.success('Product edited successfully!')
  };

  const [loading, setLoading] = useState(false);

  const getProduct = async (id) => {
    setLoading(true);
    const res = await getProductsById(id);
    setProduct({
      ...product,
      title: res?.title,
      category:res?.category,
      price:res?.price,
      numberOfReviews: res?.rating?.count,
      rating: res?.rating?.rate,
      description: res?.description,
      images:[...product?.images,...res?.image]
    });
    setLoading(false);
  };

  useEffect(() => {
    getProduct(params?.product);
  }, [params?.product]);

  if(loading){
    return <PageLoading/>;
  };

  return (
    <>
      <SellerHeader />
      <h1 className="text-2xl text-center font-black p-5 md:p-10">Edit Product</h1>
      <div className="px-5 md:px-10 flex flex-wrap">
        <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-5 md:mb-0">
          <div className="mb-3">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
              onChange={handleProductUpdate}
              defaultValue={product?.title}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
              onChange={handleProductUpdate}
              defaultValue={product?.category}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
              onChange={handleProductUpdate}
              defaultValue={product?.price}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="size"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Size
            </label>
            <SizesComp setProduct={setProduct} />
          </div>

          <div className="mb-3">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              rows="6"
              required
              onChange={handleProductUpdate}
            ></textarea>
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-2">
          <div className="mb-3">
            <label
              htmlFor="color"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Color
            </label>
            <ColorComp setProduct={setProduct} />
          </div>

          <div className="mb-3">
            <label
              htmlFor="numberOfReviews"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Number of Reviews
            </label>
            <input
              type="number"
              id="numberOfReviews"
              name="numberOfReviews"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
              onChange={handleProductUpdate}
              defaultValue={product?.numberOfReviews}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="rating"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
              onChange={handleProductUpdate}
              defaultValue={product?.rating}
            />
          </div>

          <Upload setProduct={setProduct} />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
              onClick={handleNewProductSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
}

export default Page;
