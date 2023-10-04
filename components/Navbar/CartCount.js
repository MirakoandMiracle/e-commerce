"use client"
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
import {BsCartFill} from "react-icons/bs"

const CartCount = () => {
const {cartCount , setIsOpenCartPanel} = useContext(CartContext);
    
    return (
        <>
        <div className="relative w-fit">
      
        <span className="absolute text-sm -top-3 -right-2 p-1 rounded-xl bg-violet-400">
        {cartCount}
        </span>
        <BsCartFill size={24} className="text-violet-900 cursor-pointer"  onClick={() => setIsOpenCartPanel(true)}/>
        </div>

      
        </>
    );
}

export default CartCount;