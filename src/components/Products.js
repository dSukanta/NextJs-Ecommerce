import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

function Products({ data}) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container py-2 mx-auto">
          <div className="flex flex-wrap gap-5 justify-center">
            {data?.map((product, i) => (
             <ProductCard data={product}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
