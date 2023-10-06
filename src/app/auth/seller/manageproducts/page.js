'use client'
import PageLoading from '@/components/PageLoading';
import Products from '@/components/Products';
import SellerHeader from '@/components/SellerHeader';
import { getProducts } from '@/utils/functions';
import { useEffect, useState } from 'react'
import SellerProductCard from './SellerProductCard';


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
    <SellerHeader/>
    <h1 className="text-2xl text-center font-black p-5 md:p-10">My Products</h1>
    <div className='flex flex-wrap gap-2 justify-center align-center space-x-2'>
        {allProducts?.map((product,i)=><SellerProductCard key={i} data={product}/>)}
    </div>
    </>
  )
}
