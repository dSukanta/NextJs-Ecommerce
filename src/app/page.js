'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Products from '@/components/Products'
import { getProducts } from '@/utils/functions'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {
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

  return (
    <>
    <Header/>
    <Products data={allProducts}/>
    <Footer/>
    </>
  )
}
