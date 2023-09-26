"use client";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import Products from "@/components/Products";
import { getProductsByCategory } from "@/utils/functions";
import React, { useEffect, useState } from "react";

function page() {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllElectronicsProducts = async () => {
    setLoading(true);
    const res = await getProductsByCategory(`electronics`);
    setLoading(false);
    setElectronicsProducts(res);
  };

  useEffect(() => {
    getAllElectronicsProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="justify-center text-center">
        <Heading title={"Electronics"} />
      </div>
      <div>
        {loading ? <Loading /> : <Products data={electronicsProducts} loading={loading} />}
      </div>
    </>
  );
}

export default page;
