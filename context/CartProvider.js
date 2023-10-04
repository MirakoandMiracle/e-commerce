
"use client"


import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
import React from 'react'

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);
    const [cartCalculate, setCartCalculate] = useState(0);




    useEffect(() => {
     setCartCount(cartProducts.length)
    }, [cartProducts])


    useEffect(() => {
      let cartTotalCost = 0;
      cartProducts.forEach((product) => {
        const eachProductCost = product.discountAmount
          ? product.discountAmount * product.orderQuantity
          : product.price * product.orderQuantity;
        cartTotalCost += eachProductCost;
      });
      console.log({ cartTotalCost });
      setCartCalculate(cartTotalCost)
    }, [cartProducts]);
    
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

const removeCart=(product_id)=>{
  const deletedProduct=  cartProducts.filter(product=>product.id !==product_id)
  setCartProducts([...deletedProduct])
  }

  return (
<CartContext.Provider value={{cartProducts, addCard, cartCount , setIsOpenCartPanel , isOpenCartPanel , cartUpdate ,cartCalculate, removeCart }}>{children }</CartContext.Provider>
  )
}

export default CartProvider