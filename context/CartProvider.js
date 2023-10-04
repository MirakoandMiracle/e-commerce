
"use client"


import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
import React from 'react'

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);

    useEffect(() => {
     setCartCount(cartProducts.length)
    }, [cartProducts])
    
    const cartUpdate = (update_product) => {
      console.log(update_product);
     const updatedProducts= cartProducts.map(product=>{
        if(product.id == update_product.id){
          return update_product
        }
        return product
      })
      setCartProducts([...updatedProducts])
    };

const addCard =(product) =>{
    const isExitCard = cartProducts.find((pro)=>pro.id === product.id);
    if(isExitCard){
        return;
    }
    else{
        setCartProducts([...cartProducts, product])
    }
}
  return (
<CartContext.Provider value={{cartProducts, addCard, cartCount , setIsOpenCartPanel , isOpenCartPanel , cartUpdate}}>{children }</CartContext.Provider>
  )
}

export default CartProvider