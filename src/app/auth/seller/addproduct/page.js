import React from "react";
import Upload from "./Upload";

function page() {
  return (
    <>
    <h1 className="text-2xl font-black text-center py-10">Add a Product</h1>
    <div className="max-w-2xl mx-auto p-4">
      <form action="/submit-post" method="POST">
        <div className="mb-6">
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-800 mb-1"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="reviewscount"
            className="block text-lg font-medium text-gray-800 mb-1"
          >
            Number of Reviews
          </label>
          <input
            type="number"
            id="reviewscount"
            name="reviewscount"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="rating"
            className="block text-lg font-medium text-gray-800 mb-1"
          >
            Number of Reviews
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        {/* <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-800 mb-1"
          >
            Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full"
          />
        </div> */}
        <Upload/>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default page;
