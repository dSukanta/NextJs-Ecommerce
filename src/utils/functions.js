export const getProducts= async()=>{
    try {
        const res= await fetch(`https://fakestoreapi.com/products`);
        const data= res.json();
        return data;
    } catch (error) {
        return `error fething data ${error?.message}`;
    }
};

export const getProductsByCategory= async(category)=>{
    try {
        const res= await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data= res.json();
        return data;
    } catch (error) {
        return `error fething data ${error?.message}`;
    }
};

export const getProductsById= async(id)=>{
    console.log(id,'id...')
    try {
        const res= await fetch(`https://fakestoreapi.com/products/${id}`);
        const data= res.json();
        return data;
    } catch (error) {
        return `error fething data ${error?.message}`;
    }
};


export const fetchData= async(endpoint)=>{
    // console.log(process.env.NEXT_PUBLIC_BASE_URL,'base url')
    try {
        const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`);
        const data= await res.json();
        return data;
    } catch (error) {
        return `error fetching data ${error?.message}`;
    }
};


export const restrictedPost= async(endpoint="/",method="POST",body,token)=>{
    const myHeaders= new Headers();
    myHeaders.append("Content-Type", "application/json"); 
    myHeaders.append("Authorization", `Bearer ${token}`);

    const options = {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(body)
    }
    console.log(body,'data')
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,options);
    const data= await res.json();
    return data;
};