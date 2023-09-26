import React from "react";

function Products({ data }) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data?.map((product, i) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full sm:px-4 md:px-2 lg:px-1 text-left" key={i}>
              <div className="hover:shadow-lg p-5 rounded-md">
                <div className="relative h-48 rounded overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full"
                    src={product?.image}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product?.title}
                  </h2>
                  <p className="mt-1">${product?.price}</p>
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
