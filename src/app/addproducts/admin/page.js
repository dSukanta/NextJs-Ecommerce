"use client"
import React, { useEffect, useState } from 'react'

function page() {

    const [domLoaded,setDomloaded]= useState(false);


    
    const token = localStorage.getItem('admintoken');

    useEffect(()=>{
        setDomloaded(true);
    },[]);

    if(!domLoaded){
        return null;
    }

    if(!token){
        return <div>
            <p>Your are not allowed. Only admin can access this page. If you are an admin <span>Login</span></p>
        </div>
    }
  return (
    <div>page</div>
  )
}

export default page