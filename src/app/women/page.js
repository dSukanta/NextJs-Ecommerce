"use client"
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Products from '@/components/Products'
import { getProductsByCategory } from '@/utils/functions'
import React, { useEffect, useState } from 'react'

function page() {
  const [womenProducts,setWomenProducts]= useState([]);
  const [loading,setLoading] = useState(false);

  const getAllWomenProducts = async()=>{
    setLoading(true);
    const res= await getProductsByCategory(`women's clothing`);
    setLoading(false);
    setWomenProducts(res)
  };

  useEffect(()=>{
    getAllWomenProducts();
  },[])

  return (
    <>
    <Header/>
    <div className='justify-center text-center'>
    <Heading title={`Women's Clothing`}/>
    </div>
    <Products data={womenProducts}/>
    </>
  )
}

export default page