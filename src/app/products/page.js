'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageLoading from '@/components/PageLoading'
import Products from '@/components/Products'
import { getProducts } from '@/utils/functions'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function page() {
  const [allProducts,setAllProducts]= useState([]);
  const [loading,setLoading] = useState(false);

  const getAllProducts = async()=>{
    setLoading(true);
    const res= await getProducts();
    setLoading(false);
    setAllProducts(res)
  };

  useEffect(()=>{
    getAllProducts();
  },[]);

  if(loading){
    return <PageLoading/>;
  }

  return (
    <>
    <Header/>
    <Products data={allProducts}/>
    <Footer/>
    </>
  )
}
