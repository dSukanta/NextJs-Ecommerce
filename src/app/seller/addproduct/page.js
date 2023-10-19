"use client";
import React, { useEffect, useState } from "react";
import Upload from "./Upload";
import SizesComp from "./Sizes";
import ColorComp from "./Colors";
import SellerHeader from "@/components/SellerHeader";
import toast, { Toaster } from "react-hot-toast";
import { fetchData } from "@/utils/functions";
import { MdCancel } from "react-icons/md";

function Page() {
  const [product, setProduct] = useState({
    title: "",
    category: [],
    description: "",
    price: 0,
    sizes: [],
    colors: [],
    numberOfReviews: "",
    rating: 0,
    images: [],
  });

  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const handleProductUpdate = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleNewProductSubmit = (event) => {
    event.preventDefault();
    console.log(product, "product");
    toast.success("Product added successfully!");
  };

  const getCategories = async () => {
    const res = await fetchData("categories/allcategories");
    //  console.log(res,'cat res')
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChangeCategory = (e) => {
    if (e?.target?.value === "addnew") {
      setOpen(true);
    } else {
      setProduct({
        ...product,
        category: [...product.category, e.target.value],
      });
    }
  };

  return (
    <>
      <SellerHeader />
      <h1 className="text-2xl text-center font-black p-5 md:p-10">
        Add a Product
      </h1>
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
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-800 mb-1"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value="select a category"
              onChange={handleChangeCategory}
              className="p-2 rounded border border-grey-600"
            >
              <option value="select a category">Select Category</option>
              {categories.map((category, i) => (
                <option key={i} value={category?.title} disabled={product.category.includes(category?.title)}>
                  {category?.title}
                </option>
              ))}
              <option value="addnew">Add a New Category</option>
            </select>
            {/* <select onChange={(e)=>setProduct({...product,category:[...product.category, e.target.value]})} className="p-2 rounded border border-grey-600">
              <option>Select Category</option>
              <option onClick={()=>setOpen(true)}>+ Add a New Category</option>
                {
                  categories?.map((category,i) =>
                  <option value={category?.title} key={i} disabled={product?.category?.includes(category?.title)}>{category?.title}</option>
                  )
                }
                
            </select> */}
            <div className="flex md:flex-row flex-col mt-2">
              {product?.category?.map((cate, i) => (
                <>
                  <p
                    key={i}
                    className="p-2 border border-grey-300 bg-slate-200"
                  >
                    {cate}
                  </p>
                  <MdCancel
                    onClick={() =>
                      setProduct({
                        ...product,
                        category: product?.category?.filter(
                          (el, i) => el !== cate
                        ),
                      })
                    }
                  />
                </>
              ))}
            </div>
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
            />
          </div>

          <Upload setProduct={setProduct} product={product} />
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
      <Toaster />
    </>
  );
}

export default Page;
