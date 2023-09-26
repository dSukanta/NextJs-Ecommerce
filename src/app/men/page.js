"use client"
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Loading from '@/components/Loading'
import Products from '@/components/Products'
import { getProductsByCategory } from '@/utils/functions'
import React, { useEffect, useState } from 'react'

function page() {
  const [menProducts,setMenProducts]= useState([]);
  const [loading,setLoading] = useState(false);

  const getAllMenProducts = async()=>{
    setLoading(true);
    const res= await getProductsByCategory(`men's clothing`);
    console.log(res,'men products')
    setLoading(false);
    setMenProducts(res)
  };

  useEffect(()=>{
    getAllMenProducts();
  },[])
  return (
    <>
    <Header/>
    <div className='justify-center text-center'>
    <Heading title={`Men's Clothings`}/>
    </div>
    <div>
        {loading ? <Loading /> : <Products data={menProducts} loading={loading} />}
      </div>
    </>
  )
}

export default page