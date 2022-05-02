import React, { useEffect } from "react";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Select,Grid } from "./Styled";



export const Women = () => {
    
  const[Data,setData]= useState([]);
  const[order,setOrder]=useState("asc");
  const getData=async()=>{
    let res = await fetch('https://movie-fake-server.herokuapp.com/products')
    let prod = await res.json();
    setData(...Data,prod);
    let men = Data.filter(men);
    setData(...Data,men);
  }
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
     getData();
  }, [setData]);
  const handleSort = (e) => {
    // dispatch sort products on change
    if(e.target.value=="asc"){
      const sorted =[...Data].sort((a,b)=>{
        return a.price -b.price
      })
      setData(sorted);
    }
    else{
      const sorted =[...Data].sort((a,b)=>{
        return b.price -a.price
      })
      setData(sorted);
    }
  };
  
  // console.log(data)
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
           {Data.map((item)=>{
            
             return(
              <ProductCard key={item.id} value={item} />
             )
           })}
      </Grid>
    </>
  );
};
