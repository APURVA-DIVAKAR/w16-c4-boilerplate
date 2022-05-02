import { Flex } from "./Styled";
import React from "react";

export const ProductCard = ({ value }) => {
  //  console.log(value)
   const { id,title,brand,price,category,image} = value;
  return (
    <div >
      <div data-testid="single-product-item" key={id} >
        {/* display item info here  */}
        <h3>{title}</h3>
         <img src ={image} height="300px" width="200px"></img>
         <h3>{brand}</h3>
         <h4>{price}</h4>

      </div>
    </div>
  );
};
