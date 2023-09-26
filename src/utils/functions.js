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
}