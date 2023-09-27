'use client'
import Header from '@/components/Header'
import Products from '@/components/Products'
import { getProducts } from '@/utils/functions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function Home() {
  const [allProducts,setAllProducts]= useState([]);
  const [loading,setLoading] = useState(false);
  const router= useRouter();
  const getAllProducts = async()=>{
    setLoading(true);
    const res= await getProducts();
    setLoading(false);
    setAllProducts(res)
  };

  useEffect(()=>{
    getAllProducts();
  },[]);

  const viewSingleProduct=(id)=>{
    router.replace(`/${id}`)
  }

  return (
    <>
    <Header/>
    <Products data={allProducts}/>
    </>
  )
}
