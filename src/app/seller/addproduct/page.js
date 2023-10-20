"use client";
import React, { useEffect, useState } from "react";
import Upload from "./Upload";
import SizesComp from "./Sizes";
import ColorComp from "./Colors";
import SellerHeader from "@/components/SellerHeader";
import toast, { Toaster } from "react-hot-toast";
import { fetchData, restrictedPost } from "@/utils/functions";
import { MdCancel } from "react-icons/md";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
  },
};

function Page() {
  const [product, setProduct] = useState({
    title: "",
    category: [],
    description: "",
    price: 0,
    sizes: [],
    color: [],
    numberOfReviews: "",
    rating: 0,
    image: [],
  });

  const [loading, setLoading] = useState({state:false, name:""});
  const [title, setTitle] = useState("");

  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const handleProductUpdate = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleNewProductSubmit = async(event) => {
    event.preventDefault();
    const admintoken = localStorage.getItem("admintoken");
    if(!admintoken){
      return toast.error(`Unauthorized or token not found`);
    }
    if (!product?.title) {
      return toast.error(`Title is required`);
    }
    if (!product?.price) {
      return toast.error(`product price is required`);
    }
    if(product.category && !Array.isArray(product.category)){
      return toast.error(`product category should be an [array]`);
    };
    if (!product?.description) {
      return toast.error(`product description is required`);
    };
    if(!Array.isArray(product.image) || !product.image.length) {
        return toast.error(`product images is required and should be an [array]`);
    };
    if(product.sizes && !Array.isArray(product.sizes)){
      return toast.error(`product sizes should be an [array]`);
    };
    if(product.color && !Array.isArray(product.color)){
      return toast.error(`product colors should be an [array]`);
    };
   
    const res= await restrictedPost(`products/${admintoken}/newproduct`,"POST",product,admintoken);
    console.log(res,'res')
    if(res.status === 201){
      return toast.success(res.message);
    }else{
      return toast.error(res.message);
    }
  };

  const getCategories = async () => {
    const res = await fetchData("categories/allcategories");
    //  console.log(res,'cat res')
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

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

  const handlePostCategory = async () => {
    const token = localStorage.getItem("admintoken");
    setLoading({state:true,name:'postcategory'})
    const res = await restrictedPost(
      "categories/addcategory",
      "POST",
      { title },
      token
    );
    setLoading({state:false, name:''})
    if (res.status === 200) {
      toast.success(res.message);
      setOpen(false);
    } else {
      console.log(res.message);
      toast.error(res.message);
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
              {categories?.map((category, i) => (
                <option
                  key={i}
                  value={category?.title}
                  disabled={product.category.includes(category?.title)}
                >
                  {category?.title}
                </option>
              ))}
              <option value="addnew">+ Add a New Category</option>
            </select>
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
      <Modal isOpen={open} style={customStyles}>
        <h3 className="p-3 text-xl font-bold">+ Add New Category</h3>
        <input
          className="border rounded md:w-7/12 h-10 w-full"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button disabled={loading.state && loading.name==='postcategory'}
          onClick={handlePostCategory}
          className="bg-green-500 rounded p-2 px-3 mx-5 text-white"
        >
          + Add
        </button>
        <button
          onClick={() => setOpen(false)}
          className="bg-red-500 rounded p-2 px-3 text-white"
        >
          {" "}
          x Close
        </button>
      </Modal>
      <Toaster />
    </>
  );
}

export default Page;
